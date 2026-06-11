import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import CookieConsent from "./components/CookieConsent";
import JsonLd from "./components/JsonLd";
import {
  SITE_URL,
  DEFAULT_OG_IMAGE,
  defaultOgImages,
  getRootJsonLd,
} from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Patuhdata — Tata Kelola Data Sektor Keuangan Indonesia",
    template: "%s | Patuhdata",
  },
  description:
    "Tata kelola data untuk bank, fintech, & multifinance. Kedalaman UU PDP, kontrol operasional, dan bukti audit untuk institusi keuangan.",
  keywords: [
    "Patuhdata",
    "tata kelola data Indonesia",
    "UU PDP regulator",
    "audit log kepatuhan",
    "pemantauan keamanan Wazuh",
    "risiko vendor",
    "kesiapan Badan PDP",
    "kepatuhan operasional",
    "Indonesia",
  ],
  authors: [{ name: "Patuhdata" }],
  creator: "Patuhdata",
  publisher: "PT Patuhdata Solusi Nusantara",
  verification: {
    google: "BkUwKbP9OX2t2WvsL_excE_cTSQkoTuEQKALtDtv7hQ",
  },
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
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Patuhdata — Tata Kelola Data Sektor Keuangan Indonesia",
    description:
      "UU PDP untuk bank, fintech, & multifinance. Gap assessment, tata kelola vendor, bukti audit operasional.",
    url: SITE_URL,
    siteName: "Patuhdata",
    locale: "id_ID",
    type: "website",
    images: defaultOgImages,
  },
  twitter: {
    card: "summary_large_image",
    title: "Patuhdata — Tata Kelola Data Sektor Keuangan Indonesia",
    description:
      "UU PDP untuk bank, fintech, & multifinance. Gap assessment, vendor governance, bukti audit.",
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/monogram-pd-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <JsonLd data={getRootJsonLd()} />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
