import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import CookieConsent from "./components/CookieConsent";

export const metadata: Metadata = {
  title: "Patuh Data - Konsultan Profesional Kepatuhan UU PDP Indonesia",
  description: "Layanan konsultasi profesional untuk kepatuhan Undang-Undang Perlindungan Data Pribadi (UU PDP) di Indonesia. Tim ahli bersertifikat siap membantu bisnis Anda mencapai kepatuhan penuh.",
  keywords: ["Patuh Data", "PDP", "perlindungan data pribadi", "kepatuhan", "konsultan profesional", "Indonesia", "UU PDP", "gap assessment", "audit kepatuhan"],
  openGraph: {
    title: "Patuh Data - Konsultan Profesional Kepatuhan UU PDP Indonesia",
    description: "Layanan konsultasi profesional untuk kepatuhan Undang-Undang Perlindungan Data Pribadi (UU PDP) di Indonesia.",
    url: "https://patuhdata.id",
    siteName: "Patuh Data",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patuh Data - Konsultan Profesional Kepatuhan UU PDP Indonesia",
    description: "Layanan konsultasi profesional untuk kepatuhan Undang-Undang Perlindungan Data Pribadi (UU PDP) di Indonesia.",
  },
  alternates: {
    canonical: "https://patuhdata.id",
  },
  icons: {
    icon: "/iconpatuhdata.ico",
    shortcut: "/iconpatuhdata.ico",
    apple: "/iconpatuhdata.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
