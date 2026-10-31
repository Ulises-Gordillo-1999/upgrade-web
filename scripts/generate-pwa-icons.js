const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function run() {
  const iconsDir = path.join(process.cwd(), 'public', 'icons');
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
  }

  const inputPath = path.join(process.cwd(), 'public', 'logo_upgrade_solo.jpg');

  // 1. Generate 512x512 circular standard icon with transparency
  const circleMask512 = Buffer.from(
    '<svg width="512" height="512"><circle cx="256" cy="256" r="252" fill="white"/></svg>'
  );

  const img512 = await sharp(inputPath)
    .resize(512, 512, { fit: 'cover' })
    .composite([{ input: circleMask512, blend: 'dest-in' }])
    .png()
    .toBuffer();

  await sharp(img512).toFile(path.join(iconsDir, 'icon-512.png'));
  console.log('✓ Generated icon-512.png');

  // 2. Generate 192x192 circular standard icon
  const circleMask192 = Buffer.from(
    '<svg width="192" height="192"><circle cx="96" cy="96" r="94" fill="white"/></svg>'
  );

  await sharp(inputPath)
    .resize(192, 192, { fit: 'cover' })
    .composite([{ input: circleMask192, blend: 'dest-in' }])
    .png()
    .toFile(path.join(iconsDir, 'icon-192.png'));
  console.log('✓ Generated icon-192.png');

  // 3. Generate 512x512 maskable icon (safe zone: 400x400 centered on #090a0f background)
  const circleMask400 = Buffer.from(
    '<svg width="400" height="400"><circle cx="200" cy="200" r="196" fill="white"/></svg>'
  );

  const innerLogo400 = await sharp(inputPath)
    .resize(400, 400, { fit: 'cover' })
    .composite([{ input: circleMask400, blend: 'dest-in' }])
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 9, g: 10, b: 15, alpha: 1 }
    }
  })
    .composite([{ input: innerLogo400, top: 56, left: 56 }])
    .png()
    .toFile(path.join(iconsDir, 'icon-maskable-512.png'));
  console.log('✓ Generated icon-maskable-512.png');
}

run().catch(console.error);

