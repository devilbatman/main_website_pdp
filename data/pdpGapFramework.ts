export type PdpControl = {
  code: string;
  title: string;
};

export type PdpDomain = {
  id: string;
  title: string;
  controls: PdpControl[];
};

/** 52 kontrol operasional PatuhData — diselaraskan prinsip UU PDP (bukan checklist resmi regulator). */
export const pdpDomains: PdpDomain[] = [
  {
    id: 'governance',
    title: 'Tata kelola & akuntabilitas',
    controls: [
      { code: 'PDP-GOV-01', title: 'Penunjukan dan mandat DPO / PIC PDP' },
      { code: 'PDP-GOV-02', title: 'Kebijakan perlindungan data pribadi' },
      { code: 'PDP-GOV-03', title: 'Akuntabilitas lintas legal, IT, risk, operasi' },
      { code: 'PDP-GOV-04', title: 'RACI aktivitas pemrosesan data' },
      { code: 'PDP-GOV-05', title: 'Program kesadaran & pelatihan PDP' },
      { code: 'PDP-GOV-06', title: 'Review berkala kebijakan dan kontrol' },
      { code: 'PDP-GOV-07', title: 'Integrasi PDP dalam SDLC / perubahan sistem' },
      { code: 'PDP-GOV-08', title: 'Pelaporan kesiapan ke manajemen' },
    ],
  },
  {
    id: 'lawful',
    title: 'Dasar hukum & consent',
    controls: [
      { code: 'PDP-LAW-01', title: 'Peta dasar hukum per aktivitas pemrosesan' },
      { code: 'PDP-LAW-02', title: 'Mekanisme perolehan consent' },
      { code: 'PDP-LAW-03', title: 'Privacy notice / informasi kepada subjek' },
      { code: 'PDP-LAW-04', title: 'Penilaian kepentingan sah (legitimate interest)' },
      { code: 'PDP-LAW-05', title: 'Kontrak atau syarat dengan subjek data' },
      { code: 'PDP-LAW-06', title: 'Penarikan consent & preferensi privasi' },
    ],
  },
  {
    id: 'rights',
    title: 'Hak subjek data',
    controls: [
      { code: 'PDP-DSR-01', title: 'Prosedur permintaan akses data' },
      { code: 'PDP-DSR-02', title: 'Koreksi dan pembaruan data' },
      { code: 'PDP-DSR-03', title: 'Penghapusan & hak dilupakan' },
      { code: 'PDP-DSR-04', title: 'Portabilitas data' },
      { code: 'PDP-DSR-05', title: 'SLA respons permintaan hak subjek' },
      { code: 'PDP-DSR-06', title: 'Log dan bukti penanganan permintaan' },
    ],
  },
  {
    id: 'security',
    title: 'Keamanan data',
    controls: [
      { code: 'PDP-SEC-01', title: 'Kontrol akses berbasis peran (RBAC)' },
      { code: 'PDP-SEC-02', title: 'Enkripsi at rest & in transit' },
      { code: 'PDP-SEC-03', title: 'MFA untuk akses data sensitif' },
      { code: 'PDP-SEC-04', title: 'Hardening aplikasi & infrastruktur' },
      { code: 'PDP-SEC-05', title: 'Pengujian keamanan berkala' },
      { code: 'PDP-SEC-06', title: 'Manajemen kerentanan & patch' },
      { code: 'PDP-SEC-07', title: 'Logging, monitoring, & alert' },
      { code: 'PDP-SEC-08', title: 'Backup, recovery, & continuity' },
    ],
  },
  {
    id: 'incident',
    title: 'Insiden & pelaporan',
    controls: [
      { code: 'PDP-INC-01', title: 'Deteksi dan eskalasi insiden data' },
      { code: 'PDP-INC-02', title: 'Playbook pelanggaran data pribadi' },
      { code: 'PDP-INC-03', title: 'Kriteria & prosedur notifikasi otoritas' },
      { code: 'PDP-INC-04', title: 'Notifikasi subjek data terdampak' },
      { code: 'PDP-INC-05', title: 'Post-incident review & perbaikan' },
    ],
  },
  {
    id: 'vendor',
    title: 'Vendor & pihak ketiga',
    controls: [
      { code: 'PDP-VND-01', title: 'Register vendor pemroses data' },
      { code: 'PDP-VND-02', title: 'Due diligence & risk scoring vendor' },
      { code: 'PDP-VND-03', title: 'DPA / perjanjian pemrosesan data' },
      { code: 'PDP-VND-04', title: 'Governance sub-processor' },
      { code: 'PDP-VND-05', title: 'Minimisasi data ke pihak ketiga' },
      { code: 'PDP-VND-06', title: 'Monitoring akses & kinerja vendor' },
      { code: 'PDP-VND-07', title: 'Offboarding & sertifikat penghapusan' },
    ],
  },
  {
    id: 'retention',
    title: 'Retensi & pemusnahan',
    controls: [
      { code: 'PDP-RET-01', title: 'Kebijakan retensi per jenis data' },
      { code: 'PDP-RET-02', title: 'Jadwal pemusnahan / anonymization' },
      { code: 'PDP-RET-03', title: 'Arsip & pembatasan akses arsip' },
      { code: 'PDP-RET-04', title: 'Bukti pemusnahan data' },
    ],
  },
  {
    id: 'transfer',
    title: 'Transfer lintas negara',
    controls: [
      { code: 'PDP-XFR-01', title: 'Peta transfer data ke luar negeri' },
      { code: 'PDP-XFR-02', title: 'Mekanisme hukum transfer internasional' },
      { code: 'PDP-XFR-03', title: 'Assessment risiko negara & penerima' },
    ],
  },
  {
    id: 'documentation',
    title: 'Dokumentasi & bukti audit',
    controls: [
      { code: 'PDP-DOC-01', title: 'Register aktivitas pemrosesan (ROPA)' },
      { code: 'PDP-DOC-02', title: 'Data flow diagram operasional' },
      { code: 'PDP-DOC-03', title: 'Klasifikasi & labeling data pribadi' },
      { code: 'PDP-DOC-04', title: 'Indeks bukti kontrol (evidence pack)' },
      { code: 'PDP-DOC-05', title: 'Kesiapan due diligence & tinjauan mitra' },
    ],
  },
];

export const totalPdpControls = pdpDomains.reduce((n, d) => n + d.controls.length, 0);

export const pdpTemplates = [
  {
    name: 'Preliminary Gap Summary',
    description: 'Ringkasan temuan awal KRITIS / SEDANG / RENDAH—format serupa ilustrasi di homepage.',
    format: 'Dokumen eksekutif 2–4 halaman',
  },
  {
    name: 'Register 52 Kontrol',
    description: 'Matriks status per kontrol: memenuhi, partial, gap, tidak berlaku—dengan owner.',
    format: 'Spreadsheet / register terstruktur',
  },
  {
    name: 'Register Aktivitas Pemrosesan (ROPA)',
    description: 'Daftar aktivitas, tujuan, kategori data, penerima, retensi, dasar hukum.',
    format: 'Template spreadsheet',
  },
  {
    name: 'Gap & Temuan Register',
    description: 'Setiap gap: dampak, referensi UU PDP, prioritas, rekomendasi, target waktu.',
    format: 'Register terpusat',
  },
  {
    name: 'Remediation Roadmap 90 Hari',
    description: 'Rencana perbaikan per kuartal dengan owner lintas legal, IT, dan operasi.',
    format: 'Roadmap + milestone',
  },
  {
    name: 'Vendor PDP Checklist',
    description: 'Due diligence, DPA, sub-processor, akses, offboarding untuk pihak ketiga.',
    format: 'Checklist per vendor',
  },
  {
    name: 'Consent & Privacy Notice Review',
    description: 'Review formulir, aplikasi, dan channel consent terhadap praktik operasional.',
    format: 'Checklist + catatan gap',
  },
  {
    name: 'Bukti Audit Index',
    description: 'Indeks dokumen, log, approval, dan SOP yang ditunjukkan saat audit internal/mitra.',
    format: 'Folder evidence terstruktur',
  },
];

export const pdpUseCases = [
  {
    segment: 'Bank digital & BPR',
    title: 'Kesiapan sebelum tinjauan pengawasan atau ekspansi produk digital',
    scenario:
      'Institusi meluncurkan mobile banking atau kerja sama dengan fintech—perlu membuktikan kontrol data nasabah, vendor core, dan jejak audit.',
    outcomes: ['Peta 52 kontrol dengan status gap', 'Prioritas remediasi 90 hari', 'Paket bukti untuk manajemen'],
  },
  {
    segment: 'Fintech & payment',
    title: 'Due diligence investor atau mitra bank',
    scenario:
      'Series A / partnership dengan bank mengharuskan jawaban kuesioner PDP, vendor cloud, dan alur data nasabah yang konsisten.',
    outcomes: ['ROPA & data flow', 'Vendor register + DPA gap', 'Preliminary summary untuk data room'],
  },
  {
    segment: 'Lending & credit',
    title: 'Data scoring, biro kredit, dan pihak ketiga',
    scenario:
      'Pemrosesan data finansial ke biro informasi kredit, KYC, atau model scoring—perlu dasar hukum, minimisasi, dan kontrak jelas.',
    outcomes: ['Assessment transfer & vendor', 'Kontrol consent & retensi', 'Gap pada pembagian data'],
  },
  {
    segment: 'SaaS / vendor ke finansial',
    title: 'Kesiapan menjadi sub-processor institusi keuangan',
    scenario:
      'Vendor cloud, KYC, atau HR SaaS diminta kuesioner keamanan dan bukti PDP oleh klien bank/fintech.',
    outcomes: ['Self-assessment 52 kontrol', 'DPA readiness', 'Evidence pack untuk procurement klien'],
  },
  {
    segment: 'Post-incident / audit internal',
    title: 'Pemeriksaan menyusul insiden atau temuan audit',
    scenario:
      'Setelah insiden phishing, kebocoran vendor, atau temuan audit internal—perlu baseline kontrol dan rencana perbaikan terukur.',
    outcomes: ['Root cause mapping ke kontrol', 'Playbook insiden diperbarui', 'Tracking penutupan temuan'],
  },
];
