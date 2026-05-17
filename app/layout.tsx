import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import CookieConsent from "./components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://patuhdata.id";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PatuhData — Tata Kelola Data Sektor Keuangan Indonesia",
    template: "%s | PatuhData",
  },
  description:
    "Tata kelola data untuk bank & fintech. Kedalaman UU PDP, kontrol operasional, dan bukti audit untuk institusi keuangan.",
  keywords: [
    "PatuhData",
    "tata kelola data Indonesia",
    "UU PDP regulator",
    "audit log kepatuhan",
    "pemantauan keamanan Wazuh",
    "risiko vendor",
    "kesiapan Badan PDP",
    "kepatuhan operasional",
    "Indonesia",
  ],
  authors: [{ name: "PatuhData" }],
  creator: "PatuhData",
  publisher: "PT PATUHDATA SOLUSI NUSANTARA",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "PatuhData — Tata Kelola Data Sektor Keuangan Indonesia",
    description:
      "UU PDP untuk bank & fintech. Gap assessment, tata kelola vendor, bukti audit operasional.",
    url: siteUrl,
    siteName: "PatuhData",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 985,
        height: 341,
        alt: "PatuhData — Kedalaman regulasi. Kontrol terlindungi.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PatuhData — Tata Kelola Data Sektor Keuangan Indonesia",
    description:
      "UU PDP untuk bank & fintech. Gap assessment, vendor governance, bukti audit.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [{ url: "/logoico.ico", type: "image/x-icon" }],
    shortcut: "/logoico.ico",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "PatuhData",
  legalName: "PT PATUHDATA SOLUSI NUSANTARA",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  sameAs: ["https://www.linkedin.com/company/patuhdata-id"],
  description:
    "Tata kelola data untuk sektor keuangan Indonesia. Kedalaman UU PDP, kontrol operasional, dan bukti audit untuk bank, BPR, dan fintech.",
  founder: {
    "@type": "Person",
    name: "Richard Rusli",
    jobTitle: "Founder",
    url: "https://www.linkedin.com/in/richard-r-b51120129/",
    sameAs: ["https://www.linkedin.com/in/richard-r-b51120129/"],
    description:
      "Tech Lead dengan pengalaman governance dan lingkungan perusahaan bersertifikasi ISO 27001. Fokus gap assessment UU PDP dan tata kelola data sektor keuangan.",
  },
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  serviceType: [
    "Gap Assessment UU PDP",
    "Tata Kelola Data Operasional",
    "Kesiapan Tata Kelola AI",
    "Tinjauan Risiko Vendor",
    "Kesiapan Orkestrasi Risiko",
    "Advisory dan retainer",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "INFINITI OFFICE, Jl. Permata Regency Jl. H. Kelik, Srengseng",
    addressLocality: "Jakarta Barat",
    addressRegion: "DKI Jakarta",
    postalCode: "11630",
    addressCountry: "ID",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+62-851-8306-4580",
    contactType: "customer service",
    areaServed: "ID",
    availableLanguage: ["Indonesian", "English"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
