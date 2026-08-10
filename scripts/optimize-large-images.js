import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectsDir = join(__dirname, '../public/projects');

// Target sizes for different image types
const TARGETS = {
  thumbnail: { width: 800, quality: 85 },  // Thumbnails: 800px max
  gallery: { width: 1600, quality: 85 },   // Gallery images: 1600px max
  hero: { width: 1920, quality: 90 },      // Hero images: 1920px max
};

// Large files that need aggressive optimization
const LARGE_FILES = [
  'la-camille/thumbnail.png',      // 7.7MB -> should be ~200KB
  'la-camille/product.png',        // 8.4MB -> should be ~400KB
  'la-camille/responsive.png',     // 7.0MB -> should be ~400KB
  'la-camille/collection.png',     // 6.4MB -> should be ~400KB
  'la-camille/homepage.png',      // 1.4MB -> should be ~300KB
];

async function optimizeLargeFile(relativePath) {
  const inputPath = join(projectsDir, relativePath);

  if (!existsSync(inputPath)) {
    console.log(`⊘ File not found: ${relativePath}`);
    return null;
  }

  // Determine target based on filename
  let target = TARGETS.gallery;
  if (relativePath.includes('thumbnail')) target = TARGETS.thumbnail;
  else if (relativePath.includes('hero')) target = TARGETS.hero;

  const outputPath = inputPath.replace(/\.png$/, '.webp');
  const inputStats = await stat(inputPath);

  console.log(`\n📸 Optimizing: ${relativePath}`);
  console.log(`   Input: ${(inputStats.size / 1024 / 1024).toFixed(1)} MB`);

  try {
    await sharp(inputPath)
      .resize(target.width, undefined, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: target.quality, effort: 6 })
      .toFile(outputPath);

    const outputStats = await stat(outputPath);
    const savings = ((1 - (outputStats.size / inputStats.size)) * 100).toFixed(1);

    console.log(`   ✓ Output: ${(outputStats.size / 1024).toFixed(1)} KB (${savings}% reduction)`);

    return { success: true, input: inputStats.size, output: outputStats.size };
  } catch (error) {
    console.log(`   ✗ Failed: ${error.message}`);
    return { success: false, error: error.message };
  }
}

async function main() {
  console.log('🎯 Aggressively optimizing large portfolio images...\n');

  const results = [];
  for (const file of LARGE_FILES) {
    const result = await optimizeLargeFile(file);
    results.push({ file, ...result });
  }

  const successful = results.filter(r => r.success);
  const totalSaved = successful.reduce((acc, r) => acc + (r.input - r.output), 0);

  console.log(`\n✓ Successfully optimized: ${successful.length}/${results.length} files`);
  console.log(`💾 Total space saved: ${(totalSaved / 1024 / 1024).toFixed(1)} MB`);
}

main();
