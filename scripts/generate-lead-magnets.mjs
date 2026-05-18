/**
 * Generates free lead-magnet files for /resources download gate.
 * Run: npm run generate:downloads
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import ExcelJS from 'exceljs';
import PDFDocument from 'pdfkit';

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

function generatePdf() {
  return new Promise((resolve, reject) => {
    const outPath = path.join(OUT_DIR, 'patuhdata-pdp-readiness-checklist.pdf');
    const doc = new PDFDocument({ margin: 50, size: 'A4' });
    const stream = fs.createWriteStream(outPath);
    doc.pipe(stream);

    const navy = '#0c1f33';
    const brand = '#0069c7';

    doc.fillColor(navy).fontSize(18).font('Helvetica-Bold');
    doc.text('Ceklist Kesiapan Operasional UU PDP', { align: 'left' });
    doc.moveDown(0.3);
    doc.fillColor(brand).fontSize(11).font('Helvetica');
    doc.text(BRAND + ' — template gratis');
    doc.moveDown(0.8);

    doc.fillColor('#475569').fontSize(9).font('Helvetica');
    doc.text(DISCLAIMER, { align: 'left', lineGap: 2 });
    doc.moveDown(1);

    doc.fillColor(navy).fontSize(10).font('Helvetica-Bold');
    doc.text('Petunjuk: Tandai Ya / Tidak / Partial untuk setiap pertanyaan. Fokus pada bukti operasional, bukan hanya kebijakan di atas kertas.');
    doc.moveDown(0.8);

    checklistQuestions.forEach((item, index) => {
      const y = doc.y;
      if (y > 700) {
        doc.addPage();
      }

      doc.fillColor(brand).fontSize(8).font('Helvetica-Bold');
      doc.text(item.domain.toUpperCase(), { continued: false });
      doc.fillColor(navy).fontSize(10).font('Helvetica');
      doc.text(`${index + 1}. ${item.q}`, { lineGap: 3 });

      doc.moveDown(0.15);
      doc.fontSize(9).fillColor('#64748b');
      doc.text('Ya:  _____    Tidak:  _____    Partial:  _____    Catatan: ___________________');
      doc.moveDown(0.9);
    });

    if (doc.y > 650) doc.addPage();

    doc.moveDown(0.5);
    doc.fillColor(navy).fontSize(10).font('Helvetica-Bold');
    doc.text('Langkah berikutnya');
    doc.fillColor('#475569').fontSize(9).font('Helvetica');
    doc.text(
      'Jika banyak jawaban "Tidak" atau "Partial", pertimbangkan Gap Assessment UU PDP Patuhdata (52 kontrol operasional, 8 domain) untuk prioritas remediasi dan roadmap 90 hari.',
      { lineGap: 2 }
    );
    doc.moveDown(0.5);
    doc.fillColor(brand).text('patuhdata.id/layanan/pdp-readiness-assessment  |  support@patuhdata.id');

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
  await generatePdf();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
