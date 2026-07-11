import { pdf } from 'pdf-to-img';
import sharp from 'sharp';
import { writeFile } from 'fs/promises';

const pdfPath = process.argv[2];
const outputName = process.argv[3] || 'output';

if (!pdfPath) {
  console.error('Usage: node scripts/convert-pdf.js <pdf-path> [output-name]');
  process.exit(1);
}

try {
  console.log(`Converting ${pdfPath} to image...`);

  const converter = new pdf(pdfPath);

  // Convert first page to PNG buffer
  const pngBuffer = await converter(1);

  console.log('Optimizing to WebP...');

  // Optimize with sharp
  const webpBuffer = await sharp(pngBuffer)
    .webp({ quality: 85, effort: 6 })
    .toBuffer();

  // Write WebP file
  const outputPath = `public/projects/malmoum/${outputName}.webp`;
  await writeFile(outputPath, webpBuffer);

  console.log(`✓ Created: ${outputPath}`);
  console.log(`  Size: ${(webpBuffer.length / 1024).toFixed(1)} KB`);

} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
