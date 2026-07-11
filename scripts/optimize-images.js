import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectsDir = join(__dirname, '../public/projects');

// Supported input formats
const inputFormats = ['.png', '.jpg', '.jpeg', '.gif', '.tiff', '.webp'];

// WebP quality (0-100, 85 is recommended for web)
const quality = 85;

async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality, effort: 6 }) // effort: 6 is balanced speed/quality
      .toFile(outputPath);

    // Get file sizes for comparison
    const inputStats = await stat(inputPath);
    const outputStats = await stat(outputPath);
    const savings = ((1 - (outputStats.size / inputStats.size)) * 100).toFixed(1);

    return { success: true, savings: `${savings}%` };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

async function processDirectory(dir, recursive = true) {
  const entries = await readdir(dir, { withFileTypes: true });
  const results = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory() && recursive) {
      const subResults = await processDirectory(fullPath, recursive);
      results.push(...subResults);
    } else if (entry.isFile()) {
      const ext = entry.name.toLowerCase();

      // Skip if already webp or not an image
      if (ext === '.webp' || !inputFormats.some(fmt => ext.endsWith(fmt))) {
        continue;
      }

      const outputPath = fullPath.replace(/\.[^.]+$/, '.webp');

      // Skip if webp already exists and is newer
      if (existsSync(outputPath)) {
        const inputStats = await stat(fullPath);
        const outputStats = await stat(outputPath);
        if (outputStats.mtime >= inputStats.mtime) {
          results.push({
            file: fullPath,
            status: 'skipped',
            reason: 'WebP already exists and is up to date'
          });
          continue;
        }
      }

      const result = await convertToWebP(fullPath, outputPath);

      results.push({
        file: fullPath,
        inputSize: (await stat(fullPath)).size,
        outputSize: (await stat(outputPath)).size,
        ...result
      });
    }
  }

  return results;
}

async function convertSingleFile(inputPath) {
  if (!existsSync(inputPath)) {
    console.error(`File not found: ${inputPath}`);
    return;
  }

  const ext = inputPath.toLowerCase();

  if (!inputFormats.some(fmt => ext.endsWith(fmt))) {
    console.error('Unsupported file format. Supported: PNG, JPG, JPEG, GIF, TIFF, WebP');
    return;
  }

  const outputPath = inputPath.replace(/\.[^.]+$/, '.webp');

  console.log(`Converting: ${inputPath}`);
  console.log(`To: ${outputPath}`);

  const result = await convertToWebP(inputPath, outputPath);

  if (result.success) {
    console.log(`✓ Success! Size reduction: ${result.savings}`);
  } else {
    console.error(`✗ Failed: ${result.error}`);
  }
}

// CLI interface
const args = process.argv.slice(2);

if (args.length === 0) {
  // Process all projects directory
  console.log('🖼️  Optimizing all images in projects directory...\n');

  processDirectory(projectsDir).then(results => {
    const successful = results.filter(r => r.success);
    const skipped = results.filter(r => r.status === 'skipped');
    const failed = results.filter(r => !r.success && r.status !== 'skipped');

    console.log(`\n✓ Optimized: ${successful.length} files`);

    if (skipped.length > 0) {
      console.log(`⊘ Skipped: ${skipped.length} files (already have WebP)`);
    }

    if (failed.length > 0) {
      console.log(`\n✗ Failed: ${failed.length} files`);
      failed.forEach(f => console.log(`  - ${f.file}: ${f.error}`));
    }

    if (successful.length > 0) {
      let totalSavings = 0;
      successful.forEach(r => {
        const originalKB = r.inputSize / 1024;
        const webpKB = r.outputSize / 1024;
        totalSavings += originalKB - webpKB;
      });
      console.log(`\n💾 Total space saved: ${totalSavings.toFixed(1)} KB`);
    }
  });
} else if (args[0] === '--single' && args[1]) {
  convertSingleFile(args[1]);
} else {
  console.log('Usage:');
  console.log('  node scripts/optimize-images.js           # Optimize all images');
  console.log('  node scripts/optimize-images.js --single <path>  # Convert single file');
}
