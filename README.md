# Patuh Data Website

Website profesional untuk konsultan kepatuhan Undang-Undang Perlindungan Data Pribadi (UU PDP) Indonesia.

## Fitur

- **Desain Modern & Profesional** - Menggunakan skema warna hitam, putih, dan emas
- **Responsive Design** - Tampil optimal di semua perangkat (desktop, tablet, mobile)
- **Gap Assessment Gratis** - Form konsultasi dengan penawaran gap assessment gratis untuk konsultasi pertama
- **SEO Optimized** - Metadata yang dioptimalkan untuk mesin pencari
- **Fast Performance** - Dibangun dengan Next.js 15 untuk performa optimal

## Teknologi

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- React 19

## Instalasi

### Prasyarat

- Node.js 18.17 atau lebih tinggi
- npm atau yarn

### Langkah Instalasi

1. **Perbaiki npm cache permissions (jika diperlukan)**
   ```bash
   sudo chown -R $(id -u):$(id -g) "$HOME/.npm"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

   atau jika menggunakan yarn:
   ```bash
   yarn install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   ```

   atau:
   ```bash
   yarn dev
   ```

4. **Buka browser**

   Buka [http://localhost:3000](http://localhost:3000) untuk melihat website

## Struktur Proyek

```
├── app/
│   ├── components/
│   │   ├── Navigation.tsx      # Navigasi header
│   │   ├── Hero.tsx           # Hero section
│   │   ├── Services.tsx       # Layanan section
│   │   ├── About.tsx          # Tentang kami section
│   │   ├── ConsultationForm.tsx  # Form konsultasi
│   │   └── Footer.tsx         # Footer
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Homepage
├── public/                    # Static assets
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── next.config.ts            # Next.js configuration
```

## Kustomisasi

### Warna

Warna utama dapat diubah di `tailwind.config.ts`:
- Gold: `#d4a855` dan `#c89333`
- Black: `#000000`
- White: `#ffffff`

### Konten

Semua konten dalam Bahasa Indonesia dapat dimodifikasi di masing-masing komponen di folder `app/components/`.

### Metadata

Edit metadata di `app/layout.tsx` untuk SEO.

## Build untuk Production

```bash
npm run build
npm start
```

atau:

```bash
yarn build
yarn start
```

## Deployment

Website ini dapat di-deploy ke:
- Vercel (recommended)
- Netlify
- AWS
- Google Cloud Platform
- Atau hosting lainnya yang mendukung Next.js

### Deploy ke Vercel

```bash
npm i -g vercel
vercel
```

## Form Submission

Saat ini, form konsultasi menggunakan simulasi submission. Untuk production, Anda perlu:

1. Mengintegrasikan dengan service seperti:
   - Formspree
   - EmailJS
   - SendGrid
   - Atau backend API Anda sendiri

2. Update handler di `app/components/ConsultationForm.tsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Lisensi

Hak Cipta © 2024 Patuh Data. Seluruh hak cipta dilindungi.

## Kontak

Untuk pertanyaan atau dukungan:
- Email: info@patuhdata.id
- Phone: +62 851 8306 4580
- WhatsApp: +62 851 8306 4580
- Location: Jakarta, Indonesia
