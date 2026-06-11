/**
 * Extracts the stylized "pd" mark from public/logo.png, renders it white
 * (BCG/KPMG-style), and composites onto Patuhdata ocean background.
 * Run: npm run generate:monogram
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const LOGO_PATH = path.join(ROOT, 'public/logo.png');
/** Left portion of horizontal logo that contains only the pd monogram (no wordmark). */
const MONOGRAM_CROP_RATIO = 0.29;

const SIZES = [
  { name: 'monogram-pd.png', size: 512 },
  { name: 'monogram-pd-192.png', size: 192 },
  { name: 'monogram-pd-180.png', size: 180 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'monogram-pd-32.png', size: 32 },
  { name: 'favicon-32x32.png', size: 32 },
];

function oceanBackgroundSvg(size, radius) {
  const r = radius ?? Math.round(size * 0.219);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="ocean-bg" x1="50%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" stop-color="#0c1f33"/>
      <stop offset="40%" stop-color="#0f2842"/>
      <stop offset="100%" stop-color="#153a5c"/>
    </linearGradient>
    <radialGradient id="glow-a" cx="80%" cy="18%" r="55%">
      <stop offset="0%" stop-color="#7dd3fc" stop-opacity="0.24"/>
      <stop offset="100%" stop-color="#7dd3fc" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow-b" cx="22%" cy="88%" r="62%">
      <stop offset="0%" stop-color="#38a2f8" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#38a2f8" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${r}" fill="url(#ocean-bg)"/>
  <rect width="${size}" height="${size}" rx="${r}" fill="url(#glow-a)"/>
  <rect width="${size}" height="${size}" rx="${r}" fill="url(#glow-b)"/>
</svg>`;
}

/** Flat white mark from colored extract — preserves anti-aliased edges. */
async function toWhiteMark(coloredMark) {
  const { data, info } = await sharp(coloredMark)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    const opacity = Math.min(255, Math.round(Math.max(a, lum)));

    if (opacity > 16) {
      data[i] = 255;
      data[i + 1] = 255;
      data[i + 2] = 255;
      data[i + 3] = opacity;
    } else {
      data[i + 3] = 0;
    }
  }

  return sharp(data, { raw: info }).png().toBuffer();
}

async function extractMonogramFromLogo() {
  const meta = await sharp(LOGO_PATH).metadata();
  const cropWidth = Math.round(meta.width * MONOGRAM_CROP_RATIO);

  const cropped = await sharp(LOGO_PATH)
    .extract({ left: 0, top: 0, width: cropWidth, height: meta.height })
    .png()
    .toBuffer();

  const colored = await sharp(cropped).trim({ threshold: 15 }).png().toBuffer();
  const white = await toWhiteMark(colored);

  await sharp(colored).toFile(path.join(ROOT, 'public/monogram-pd-mark-source.png'));
  const markPath = path.join(ROOT, 'public/monogram-pd-mark.png');
  await sharp(white).toFile(markPath);
  console.log('Wrote', markPath, '(white)');

  return white;
}

async function buildMonogramIcon(mark, size) {
  const padding = Math.round(size * 0.13);
  const maxMark = size - padding * 2;
  const markMeta = await sharp(mark).metadata();
  const scale = Math.min(maxMark / markMeta.width, maxMark / markMeta.height);
  const w = Math.round(markMeta.width * scale);
  const h = Math.round(markMeta.height * scale);

  const resizedMark = await sharp(mark).resize(w, h, { fit: 'inside' }).png().toBuffer();
  const left = Math.round((size - w) / 2);
  const top = Math.round((size - h) / 2);

  const bg = await sharp(Buffer.from(oceanBackgroundSvg(size)))
    .resize(size, size)
    .png()
    .toBuffer();

  return sharp(bg).composite([{ input: resizedMark, left, top }]).png().toBuffer();
}

async function main() {
  if (!fs.existsSync(LOGO_PATH)) {
    console.error('Missing', LOGO_PATH);
    process.exit(1);
  }

  const mark = await extractMonogramFromLogo();

  for (const { name, size } of SIZES) {
    const out = path.join(ROOT, 'public', name);
    const png = await buildMonogramIcon(mark, size);
    await sharp(png).toFile(out);
    console.log('Wrote', out);
  }

}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
