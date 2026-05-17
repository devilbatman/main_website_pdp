export type BreachStatus =
  | 'dibantah'
  | 'diselidiki'
  | 'klaim-belum-verifikasi'
  | 'terkonfirmasi-sebagian';

export interface BreachSource {
  name: string;
  url: string;
}

export interface DataBreachIncident {
  id: string;
  reportedAt: string;
  title: string;
  summary: string;
  sector: string;
  estimatedRecords?: string;
  dataTypes: string[];
  status: BreachStatus;
  statusNote: string;
  sources: BreachSource[];
  relevanceForFinance: string;
}

export const dataBreachTrackerMeta = {
  lastUpdated: '2026-05-17',
  lastUpdatedLabel: '17 Mei 2026',
  disclaimer:
    'PatuhData mengkurasi insiden Indonesia dari media, pemerintah, dan threat intelligence—dipadukan dengan insiden terverifikasi Have I Been Pwned untuk layanan relevan. Status dapat berubah. Bukan daftar resmi regulator; bukan opini hukum.',
};

export const breachStatusLabels: Record<BreachStatus, string> = {
  dibantah: 'Dibantah instansi terkait',
  diselidiki: 'Sedang diselidiki',
  'klaim-belum-verifikasi': 'Klaim belum diverifikasi',
  'terkonfirmasi-sebagian': 'Terkonfirmasi sebagian',
};

export const dataBreachIncidents: DataBreachIncident[] = [
  {
    id: 'imigrasi-darkweb-apr-2026',
    reportedAt: '2026-04-30',
    title: 'Klaim kebocoran data imigrasi / eVisa di dark web',
    summary:
      'Beredar klaim peretasan sistem eVisa dan penjualan data paspor/visa. Ditjen Imigrasi menyatakan informasi hoaks dan mengusut penyebar klaim.',
    sector: 'Pemerintah · Imigrasi',
    estimatedRecords: 'Klaim ~3 juta',
    dataTypes: ['Paspor', 'Visa', 'Identitas perjalanan'],
    status: 'dibantah',
    statusNote: 'Ditjen Imigrasi membantah kebocoran; penyelidikan penyebar hoaks berjalan.',
    sources: [
      {
        name: 'Kompas',
        url: 'https://nasional.kompas.com/read/2026/04/30/14551531/imigrasi-usut-penyebar-hoaks-3-juta-data-bocor-di-dark-web',
      },
    ],
    relevanceForFinance:
      'Mengingatkan institusi keuangan untuk memverifikasi klaim breach sebelum komunikasi publik, dan menguji apakah data KYC/perjalanan nasabah terpapar.',
  },
  {
    id: 'instagram-global-2026',
    reportedAt: '2026-03-15',
    title: 'Data pengguna Instagram diduga bocor (skala global)',
    summary:
      'Laporan media tentang dataset besar pengguna Instagram yang disalahgunakan untuk doxxing dan pemerasan. Dampak langsung ke pengguna Indonesia yang memakai platform yang sama.',
    sector: 'Platform digital · Sosial media',
    estimatedRecords: 'Klaim ~17,5 juta akun',
    dataTypes: ['Username', 'Profil', 'Metadata akun'],
    status: 'klaim-belum-verifikasi',
    statusNote: 'Klaim dari laporan keamanan/media; verifikasi resmi platform bervariasi.',
    sources: [
      {
        name: 'Kompas.id',
        url: 'https://www.kompas.id/artikel/data-175-juta-pengguna-instagram-diduga-bocor',
      },
      {
        name: 'Have I Been Pwned (Instagram)',
        url: 'https://haveibeenpwned.com/PwnedWebsites#Instagram',
      },
    ],
    relevanceForFinance:
      'Risiko credential stuffing, social engineering, dan pemulihan akun nasabah yang memakai email/telepon terhubung Instagram.',
  },
  {
    id: 'bandung-warga-mar-2026',
    reportedAt: '2026-03-12',
    title: 'Diduga kebocoran database penduduk Kota Bandung',
    summary:
      'Komunitas keamanan siber melaporkan dataset warga Kota Bandung di forum underground. Pihak daerah dan aparat menyelidiki validitas klaim.',
    sector: 'Pemerintah daerah',
    estimatedRecords: 'Klaim >1 juta',
    dataTypes: ['NIK', 'Nama', 'Alamat', 'Kontak'],
    status: 'diselidiki',
    statusNote: 'Laporan VECERT / media keamanan; investigasi pemerintah daerah berlangsung.',
    sources: [
      {
        name: 'detikInet',
        url: 'https://inet.detik.com/security/d-8431228/waduh-jutaan-data-warga-kota-bandung-diduga-dibobol-hacker',
      },
    ],
    relevanceForFinance:
      'Data identitas daerah sering dipakai untuk verifikasi alamat/KYC tiruan—perkuat deteksi fraud onboarding.',
  },
  {
    id: 'database-nasional-mar-2026',
    reportedAt: '2026-03-05',
    title: 'Klaim database nasional warga Indonesia di underground',
    summary:
      'Intelligence keamanan siber melaporkan paket data besar berisi identitas dan kontak warga. Belum ada konfirmasi resmi terpusat; investigasi lintas instansi.',
    sector: 'Nasional · Multi-sektor',
    estimatedRecords: 'Tidak diverifikasi',
    dataTypes: ['NIK', 'NPWP', 'Nama', 'Alamat', 'Tanggal lahir', 'Telepon'],
    status: 'diselidiki',
    statusNote: 'Klaim dari komunitas threat intelligence; instansi pusat menyelidiki.',
    sources: [
      {
        name: 'Brinztech',
        url: 'https://www.brinztech.com/breach-alerts/brinztech-alert-alleged-database-of-indonesia-leaked/',
      },
    ],
    relevanceForFinance:
      'Jika terbukti, memperbesar risiko penipuan identitas, pembukaan rekening palsu, dan social engineering terhadap nasabah.',
  },
  {
    id: 'data-siswa-feb-2026',
    reportedAt: '2026-02-18',
    title: 'Klaim kebocoran data siswa skala nasional',
    summary:
      'Viral di dark web mengenai data siswa Indonesia. Pemerintah membantah indikasi kebocoran; Kemendikbud, BSSN, dan Kemkomdigi melakukan investigasi.',
    sector: 'Pendidikan · Pemerintah',
    estimatedRecords: 'Klaim ~58 juta',
    dataTypes: ['Identitas siswa', 'Data pendidikan'],
    status: 'dibantah',
    statusNote: 'Menko PMK dan kementerian terkait membantah; investigasi teknis berlanjut.',
    sources: [
      {
        name: 'BeritaSatu',
        url: 'https://www.beritasatu.com/nasional/2966433/menko-pmk-bantah-ada-kebocoran-data-58-juta-siswa-indonesia',
      },
    ],
    relevanceForFinance:
      'Menunjukkan sensitivitas publik terhadap data anak/remaja—relevan untuk produk finansial remaja dan verifikasi usia.',
  },
];

export function getSortedBreaches(): DataBreachIncident[] {
  return [...dataBreachIncidents].sort(
    (a, b) => new Date(b.reportedAt).getTime() - new Date(a.reportedAt).getTime()
  );
}

export function countByStatus(status: BreachStatus): number {
  return dataBreachIncidents.filter((i) => i.status === status).length;
}
