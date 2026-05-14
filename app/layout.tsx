import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import CookieConsent from "./components/CookieConsent";

const siteUrl = "https://patuhdata.id";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PatuhData - Operational Data Governance untuk Bisnis Modern",
    template: "%s | PatuhData",
  },
  description:
    "PatuhData membantu organisasi mengelola risiko data, kesiapan UU PDP, tata kelola AI, vendor risk, dan operational compliance menjadi proses operasional yang praktis.",
  keywords: [
    "PatuhData",
    "operational data governance",
    "UU PDP",
    "konsultan UU PDP",
    "PDP readiness assessment",
    "AI governance",
    "vendor risk review",
    "operational compliance",
    "tata kelola data",
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
    title: "PatuhData - Operational Data Governance untuk Bisnis Modern",
    description:
      "Mengelola risiko data, kesiapan UU PDP, dan tata kelola AI menjadi proses operasional yang praktis dan scalable.",
    url: siteUrl,
    siteName: "PatuhData",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/patuhdata.png",
        width: 1200,
        height: 630,
        alt: "PatuhData - Operational Data Governance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PatuhData - Operational Data Governance",
    description: "Tata kelola data dan operational compliance untuk bisnis modern di Indonesia.",
    images: ["/patuhdata.png"],
  },
  icons: {
    icon: "/iconpatuhdata.ico",
    shortcut: "/iconpatuhdata.ico",
    apple: "/iconpatuhdata.ico",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "PatuhData",
  legalName: "PT PATUHDATA SOLUSI NUSANTARA",
  url: siteUrl,
  logo: `${siteUrl}/patuhdata.png`,
  description:
    "Partner tata kelola data dan operational compliance untuk bisnis modern di Indonesia.",
  founder: {
    "@type": "Person",
    name: "Richard Rusli",
  },
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  serviceType: [
    "PDP Readiness Assessment",
    "Operational Data Governance",
    "AI Governance Readiness",
    "Vendor Risk Review",
    "Advisory and Retainer",
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
    <html lang="id">
      <body className="antialiased">
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
