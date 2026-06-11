/**
 * Generates free lead-magnet files for /template-gratis download gate.
 * Run: npm run generate:downloads
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import ExcelJS from 'exceljs';
import PDFDocument from 'pdfkit';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '../public/downloads');

const BRAND = 'Patuhdata';
const DISCLAIMER =
  'Contoh struktur operasional Patuhdata — diselaraskan prinsip UU PDP. Bukan checklist resmi regulator. Sesuaikan dengan operasi institusi Anda. Gap Assessment penuh: patuhdata.id';

const checklistQuestions = [
  { domain: 'Tata kelola', q: 'Apakah DPO / PIC PDP sudah ditunjuk secara formal dengan mandat tertulis?' },
  { domain: 'Tata kelola', q: 'Apakah kebijakan perlindungan data pribadi dipublikasikan dan dikomunikasikan?' },
  { domain: 'Dokumentasi', q: 'Apakah register aktivitas pemrosesan (ROPA) dipertahankan dan diperbarui?' },
  { domain: 'Consent', q: 'Apakah mekanisme consent / dasar hukum terdokumentasi per channel?' },
  { domain: 'Consent', q: 'Apakah privacy notice tersedia dan selaras praktik operasional?' },
  { domain: 'Hak subjek', q: 'Apakah ada prosedur respons permintaan hak subjek data (akses, koreksi, hapus)?' },
  { domain: 'Keamanan', q: 'Apakah kontrol akses data pribadi (role, review berkala) dijalankan?' },
  { domain: 'Keamanan', q: 'Apakah enkripsi / proteksi data sensitif diterapkan sesuai kebijakan?' },
  { domain: 'Insiden', q: 'Apakah playbook insiden data pribadi ada dan pernah diuji?' },
  { domain: 'Insiden', q: 'Apakah alur pemberitahuan insiden ke manajemen / regulator terdefinisi?' },
  { domain: 'Vendor', q: 'Apakah inventaris vendor yang memproses data pribadi terdokumentasi?' },
  { domain: 'Vendor', q: 'Apakah DPA / klausul PDP dengan vendor kritis sudah ditandatangani?' },
  { domain: 'Retensi', q: 'Apakah jadwal retensi dan penghapusan data terdokumentasi?' },
  { domain: 'Transfer', q: 'Apakah transfer lintas negara / pihak ketiga dinilai risikonya?' },
  { domain: 'Pelaporan', q: 'Apakah kesiapan PDP dilaporkan ke manajemen secara berkala?' },
];

async function generateExcel() {
  const wb = new ExcelJS.Workbook();
  wb.creator = BRAND;
  wb.created = new Date();

  const guide = wb.addWorksheet('Petunjuk', {
    views: [{ state: 'frozen', ySplit: 1 }],
  });
  guide.columns = [{ width: 90 }];
  const guideLines = [
    `${BRAND} — Template ROPA (Register Aktivitas Pemrosesan)`,
    '',
    'Cara pakai:',
    '1. Isi satu baris per aktivitas pemrosesan data pribadi (mis. onboarding nasabah, payroll, marketing).',
    '2. Tentukan pengendali / pemroses, kategori data, penerima, lokasi, retensi, dan dasar hukum.',
    '3. Tandai status dokumentasi: Lengkap / Partial / Belum ada.',
    '4. Gunakan contoh baris (abu-abu) sebagai referensi — hapus atau ganti setelah memahami struktur.',
    '',
    DISCLAIMER,
    '',
    'Butuh penilaian 52 kontrol + roadmap remediasi? Hubungi: support@patuhdata.id | patuhdata.id/#assessment',
  ];
  guideLines.forEach((line, i) => {
    const row = guide.getRow(i + 1);
    row.getCell(1).value = line;
    if (i === 0) {
      row.getCell(1).font = { bold: true, size: 14, color: { argb: 'FF0C1F33' } };
    }
  });

  const ropa = wb.addWorksheet('ROPA', {
    views: [{ state: 'frozen', ySplit: 1 }],
  });

  const headers = [
    'ID Aktivitas',
    'Nama Aktivitas Pemrosesan',
    'Tujuan Pemrosesan',
    'Kategori Data Pribadi',
    'Subjek Data',
    'Penerima / Pihak Ketiga',
    'Lokasi Penyimpanan / Pemrosesan',
    'Retensi',
    'Dasar Hukum (Consent / Kontrak / Kepentingan Sah / dll.)',
    'Pengendali / Pemroses',
    'PIC / Owner',
    'Status Dokumentasi (Lengkap/Partial/Belum)',
    'Catatan',
  ];

  ropa.addRow(headers);
  const headerRow = ropa.getRow(1);
  headerRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
  headerRow.fill = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FF0069C7' },
  };
  headerRow.alignment = { vertical: 'middle', wrapText: true };
  headerRow.height = 36;

  const examples = [
    [
      'ACT-001',
      'Onboarding nasabah digital (contoh)',
      'Pembukaan rekening & verifikasi identitas',
      'Identitas, kontak, KYC, biometrik (jika ada)',
      'Calon nasabah / nasabah',
      'Vendor e-KYC (contoh), core banking internal',
      'Indonesia',
      'Selama relasi nasabah + 5 tahun setelah putus (sesuaikan kebijakan)',
      'Kontrak + consent',
      'Pengendali',
      'Head of Operations',
      'Partial',
      'Contoh — ganti dengan aktivitas nyata',
    ],
    [
      'ACT-002',
      'Payroll karyawan (contoh)',
      'Pemrosesan gaji dan benefit',
      'Identitas, rekening bank, NPWP, keluarga (jika ada)',
      'Karyawan',
      'Vendor payroll SaaS (contoh)',
      'Indonesia',
      'Masa kerja + sesuai ketentuan HR',
      'Kontrak kerja',
      'Pengendali',
      'HR Manager',
      'Lengkap',
      'Contoh — pastikan DPA dengan vendor payroll',
    ],
  ];

  examples.forEach((row) => {
    const r = ropa.addRow(row);
    r.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFF1F5F9' },
    };
    r.font = { italic: true, color: { argb: 'FF64748B' } };
  });

  ropa.addRow([]);
  ropa.addRow(['— Tambahkan aktivitas Anda di bawah ini —']);

  ropa.columns = headers.map((h) => ({
    width: Math.min(28, Math.max(14, Math.ceil(h.length * 0.6))),
  }));

  const outPath = path.join(OUT_DIR, 'patuhdata-ropa-starter.xlsx');
  await wb.xlsx.writeFile(outPath);
  console.log('Wrote', outPath);
}

const PDF_COLORS = {
  navy: '#0c1f33',
  brand: '#0069c7',
  brandDark: '#004a8f',
  brandLight: '#dbeafe',
  slate: '#334155',
  muted: '#64748b',
  border: '#94a3b8',
  cardBg: '#f1f5f9',
  white: '#ffffff',
};

const A4 = { width: 595.28, height: 841.89 };
const PDF_MARGIN = 40;
const CONTENT_W = A4.width - PDF_MARGIN * 2;
const LOGO_SRC = path.join(__dirname, '../public/logo.png');
const LOGO_WHITE_PATH = path.join(__dirname, '../public/logo-white.png');

/** White logo for dark PDF header (matches site inverted nav logo). */
async function ensureWhiteLogo() {
  if (fs.existsSync(LOGO_WHITE_PATH)) return LOGO_WHITE_PATH;
  if (!fs.existsSync(LOGO_SRC)) return null;

  const { data, info } = await sharp(LOGO_SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    const alpha = data[i + 3];
    if (alpha > 24) {
      data[i] = 255;
      data[i + 1] = 255;
      data[i + 2] = 255;
    }
  }
  await sharp(data, { raw: info }).png().toFile(LOGO_WHITE_PATH);
  console.log('Wrote', LOGO_WHITE_PATH);
  return LOGO_WHITE_PATH;
}

function pdfEnsureSpace(doc, needed) {
  const bottom = A4.height - PDF_MARGIN - 36;
  if (doc.y + needed > bottom) {
    doc.addPage();
    doc.y = PDF_MARGIN;
  }
}

function drawPdfPageFooter(doc, pageNum) {
  const y = A4.height - PDF_MARGIN - 6;
  doc
    .strokeColor(PDF_COLORS.border)
    .lineWidth(0.5)
    .moveTo(PDF_MARGIN, y - 10)
    .lineTo(A4.width - PDF_MARGIN, y - 10)
    .stroke();
  doc
    .fillColor(PDF_COLORS.muted)
    .fontSize(7.5)
    .font('Helvetica')
    .text(
      `${BRAND} · Ceklist Kesiapan Operasional UU PDP · patuhdata.id/template-gratis`,
      PDF_MARGIN,
      y - 4,
      { width: CONTENT_W * 0.75, align: 'left' }
    );
  doc.text(`Halaman ${pageNum}`, PDF_MARGIN, y - 4, {
    width: CONTENT_W,
    align: 'right',
  });
}

function drawPdfCoverHeader(doc, logoPath) {
  const headerH = 118;
  doc.save();
  doc.rect(0, 0, A4.width, headerH).fill(PDF_COLORS.navy);

  const logoY = 20;
  const logoW = 148;
  const logoH = 34;
  if (logoPath && fs.existsSync(logoPath)) {
    doc.image(logoPath, PDF_MARGIN, logoY, { fit: [logoW, logoH], align: 'left', valign: 'center' });
  } else {
    doc.fillColor(PDF_COLORS.white).fontSize(16).font('Helvetica-Bold');
    doc.text(BRAND, PDF_MARGIN, logoY + 8);
  }

  doc
    .fillColor(PDF_COLORS.white)
    .fontSize(22)
    .font('Helvetica-Bold')
    .text('Ceklist Kesiapan Operasional UU PDP', PDF_MARGIN, 62, { width: CONTENT_W });

  doc
    .fillColor('#cbd5e1')
    .fontSize(11)
    .font('Helvetica')
    .text('15 pertanyaan · 8 domain · centang Ya / Tidak / Partial', PDF_MARGIN, 92, { width: CONTENT_W });

  doc.restore();
  doc.y = headerH + 18;
}

function drawPdfResponseLegend(doc) {
  const h = 44;
  pdfEnsureSpace(doc, h + 10);
  const y = doc.y;
  doc
    .roundedRect(PDF_MARGIN, y, CONTENT_W, h, 5)
    .fillAndStroke(PDF_COLORS.white, PDF_COLORS.brand);

  doc
    .fillColor(PDF_COLORS.navy)
    .fontSize(10)
    .font('Helvetica-Bold')
    .text('Centang salah satu per pertanyaan:', PDF_MARGIN + 12, y + 8);

  const options = [
    { label: 'Ya', hint: 'sudah berjalan' },
    { label: 'Tidak', hint: 'belum ada' },
    { label: 'Partial', hint: 'sebagian' },
  ];
  const colW = (CONTENT_W - 24) / 3;
  options.forEach((opt, i) => {
    const cx = PDF_MARGIN + 12 + i * colW;
    const cy = y + 22;
    doc
      .rect(cx, cy, 16, 16)
      .fillAndStroke(PDF_COLORS.white, PDF_COLORS.navy);
    doc
      .fillColor(PDF_COLORS.navy)
      .fontSize(11)
      .font('Helvetica-Bold')
      .text(opt.label, cx + 22, cy + 2);
    doc
      .fillColor(PDF_COLORS.slate)
      .fontSize(8.5)
      .font('Helvetica')
      .text(`(${opt.hint})`, cx + 22, cy + 14);
  });

  doc.y = y + h + 12;
}

function drawPdfInstructionBox(doc) {
  const pad = 14;
  const text =
    'Tandai setiap pertanyaan berdasarkan bukti operasional (bukan hanya kebijakan di atas kertas). Centang kotak Ya / Tidak / Partial, lalu isi catatan singkat (dokumen, sistem, atau gap).';
  doc.font('Helvetica').fontSize(10.5);
  const textH = doc.heightOfString(text, { width: CONTENT_W - pad * 2, lineGap: 4 });
  const boxH = textH + pad * 2 + 24;

  pdfEnsureSpace(doc, boxH);

  const y = doc.y;
  doc
    .roundedRect(PDF_MARGIN, y, CONTENT_W, boxH, 6)
    .fillAndStroke(PDF_COLORS.brandLight, PDF_COLORS.brandDark);

  doc
    .fillColor(PDF_COLORS.brandDark)
    .fontSize(10)
    .font('Helvetica-Bold')
    .text('CARA MENGGUNAKAN CEKLIST INI', PDF_MARGIN + pad, y + pad);

  doc
    .fillColor(PDF_COLORS.navy)
    .fontSize(10.5)
    .font('Helvetica')
    .text(text, PDF_MARGIN + pad, y + pad + 18, {
      width: CONTENT_W - pad * 2,
      lineGap: 4,
    });

  doc.y = y + boxH + 12;
}

function drawPdfDomainHeading(doc, domain) {
  const h = 32;
  pdfEnsureSpace(doc, h + 10);

  const y = doc.y;
  doc.roundedRect(PDF_MARGIN, y, CONTENT_W, h, 4).fill(PDF_COLORS.brandDark);
  doc
    .fillColor(PDF_COLORS.white)
    .fontSize(12)
    .font('Helvetica-Bold')
    .text(domain.toUpperCase(), PDF_MARGIN + 14, y + 10, { width: CONTENT_W - 28 });
  doc.y = y + h + 12;
}

function drawPdfCheckbox(doc, x, y, label) {
  const size = 16;
  doc.rect(x, y, size, size).lineWidth(2).fillAndStroke(PDF_COLORS.white, PDF_COLORS.navy);
  doc
    .fillColor(PDF_COLORS.navy)
    .fontSize(11)
    .font('Helvetica-Bold')
    .text(label, x + size + 8, y + 2);
  return x + size + 8 + doc.widthOfString(label) + 22;
}

function drawPdfQuestionCard(doc, item, index) {
  const cardPad = 14;
  const numSize = 30;
  const questionText = item.q;
  const textWidth = CONTENT_W - cardPad * 2 - numSize - 12;

  doc.font('Helvetica-Bold').fontSize(11.5);
  const questionH = doc.heightOfString(questionText, { width: textWidth, lineGap: 3 });
  const checkboxRowH = 28;
  const notesBlockH = 34;
  const cardH = Math.max(
    96,
    cardPad * 2 + Math.max(questionH, numSize) + checkboxRowH + notesBlockH + 8
  );

  pdfEnsureSpace(doc, cardH + 10);

  const y = doc.y;
  const x = PDF_MARGIN;

  doc
    .roundedRect(x, y, CONTENT_W, cardH, 6)
    .fillAndStroke(PDF_COLORS.cardBg, PDF_COLORS.border);
  doc
    .roundedRect(x + 1, y + 1, 5, cardH - 2, 2)
    .fill(PDF_COLORS.brand);

  const numX = x + cardPad + 4;
  const numY = y + cardPad;
  doc.circle(numX + numSize / 2, numY + numSize / 2, numSize / 2).fill(PDF_COLORS.brand);
  doc
    .fillColor(PDF_COLORS.white)
    .fontSize(12)
    .font('Helvetica-Bold')
    .text(String(index + 1).padStart(2, '0'), numX, numY + 9, {
      width: numSize,
      align: 'center',
    });

  const qX = numX + numSize + 12;
  const qY = y + cardPad;
  doc
    .fillColor(PDF_COLORS.navy)
    .fontSize(11.5)
    .font('Helvetica-Bold')
    .text(questionText, qX, qY, { width: textWidth, lineGap: 3 });

  const checkBandY = y + cardPad + Math.max(questionH, numSize) + 12;
  const checkBandH = checkboxRowH + 6;
  doc
    .roundedRect(x + cardPad, checkBandY, CONTENT_W - cardPad * 2, checkBandH, 4)
    .fill(PDF_COLORS.brandLight);

  const checkY = checkBandY + 7;
  let cx = x + cardPad + 8;
  cx = drawPdfCheckbox(doc, cx, checkY, 'Ya');
  cx = drawPdfCheckbox(doc, cx, checkY, 'Tidak');
  drawPdfCheckbox(doc, cx, checkY, 'Partial');

  const notesY = checkBandY + checkBandH + 10;
  doc
    .fillColor(PDF_COLORS.navy)
    .fontSize(9.5)
    .font('Helvetica-Bold')
    .text('Catatan / bukti operasional:', x + cardPad, notesY);
  doc
    .strokeColor(PDF_COLORS.border)
    .lineWidth(1)
    .moveTo(x + cardPad, notesY + 22)
    .lineTo(x + CONTENT_W - cardPad, notesY + 22)
    .stroke();
  doc
    .moveTo(x + cardPad, notesY + 30)
    .lineTo(x + CONTENT_W - cardPad, notesY + 30)
    .stroke();

  doc.y = y + cardH + 10;
}

function drawPdfDisclaimer(doc) {
  pdfEnsureSpace(doc, 55);
  doc
    .fillColor(PDF_COLORS.slate)
    .fontSize(8.5)
    .font('Helvetica')
    .text(DISCLAIMER, PDF_MARGIN, doc.y, { width: CONTENT_W, lineGap: 3, align: 'left' });
  doc.moveDown(1);
}

function drawPdfClosing(doc) {
  pdfEnsureSpace(doc, 120);
  const y = doc.y;
  doc
    .roundedRect(PDF_MARGIN, y, CONTENT_W, 100, 6)
    .fillAndStroke('#f1f5f9', PDF_COLORS.navy);

  doc
    .fillColor(PDF_COLORS.navy)
    .fontSize(11)
    .font('Helvetica-Bold')
    .text('Langkah berikutnya', PDF_MARGIN + 14, y + 14);

  doc
    .fillColor(PDF_COLORS.slate)
    .fontSize(9.5)
    .font('Helvetica')
    .text(
      'Jika banyak jawaban "Tidak" atau "Partial", pertimbangkan Gap Assessment UU PDP Patuhdata — 52 kontrol operasional di 8 domain, prioritas remediasi, dan roadmap 90 hari.',
      PDF_MARGIN + 14,
      y + 32,
      { width: CONTENT_W - 28, lineGap: 3 }
    );

  doc
    .fillColor(PDF_COLORS.brand)
    .fontSize(9.5)
    .font('Helvetica-Bold')
    .text('patuhdata.id/layanan/pdp-readiness-assessment', PDF_MARGIN + 14, y + 72, {
      link: 'https://patuhdata.id/layanan/pdp-readiness-assessment',
      underline: true,
    });
  doc
    .fillColor(PDF_COLORS.brand)
    .text('support@patuhdata.id', PDF_MARGIN + 14, y + 86);

  doc.y = y + 110;
}

function generatePdf(logoPath) {
  return new Promise((resolve, reject) => {
    const outPath = path.join(OUT_DIR, 'patuhdata-pdp-readiness-checklist.pdf');
    const doc = new PDFDocument({
      size: 'A4',
      margins: { top: PDF_MARGIN, bottom: PDF_MARGIN, left: PDF_MARGIN, right: PDF_MARGIN },
      bufferPages: true,
    });
    const stream = fs.createWriteStream(outPath);
    doc.pipe(stream);

    drawPdfCoverHeader(doc, logoPath);
    drawPdfDisclaimer(doc);
    drawPdfInstructionBox(doc);
    drawPdfResponseLegend(doc);

    let currentDomain = '';
    checklistQuestions.forEach((item, index) => {
      if (item.domain !== currentDomain) {
        currentDomain = item.domain;
        drawPdfDomainHeading(doc, currentDomain);
      }
      drawPdfQuestionCard(doc, item, index);
    });

    drawPdfClosing(doc);

    const range = doc.bufferedPageRange();
    for (let i = 0; i < range.count; i++) {
      doc.switchToPage(i);
      drawPdfPageFooter(doc, i + 1);
    }

    doc.end();
    stream.on('finish', () => {
      console.log('Wrote', outPath);
      resolve();
    });
    stream.on('error', reject);
  });
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  await generateExcel();
  const logoPath = await ensureWhiteLogo();
  await generatePdf(logoPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
