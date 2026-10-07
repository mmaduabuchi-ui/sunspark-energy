import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  OrganizationJsonLd,
  WebSiteJsonLd,
  LocalBusinessJsonLd,
} from "@/components/StructuredData";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default: `${SITE.name} | Solar Installation in Nigeria`,
    template: `%s | ${SITE.name}`,
  },

  description: SITE.longDescription,

  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,

  keywords: [
    "solar installation Nigeria",
    "solar panels Port Harcourt",
    "solar company Nigeria",
    "residential solar Nigeria",
    "commercial solar Nigeria",
    "industrial solar Nigeria",
    "battery storage Nigeria",
    "inverter installation Port Harcourt",
    "bifacial solar panels Nigeria",
    "solar maintenance Nigeria",
    "SunSpark Energy",
  ],

  alternates: { canonical: "/" },

  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Solar Installation in Nigeria`,
    description: SITE.shortDescription,
    images: [
      {
        url: "/images/photo_2026-08-26_01-06-45.jpg",
        width: 1200,
        height: 630,
        alt: "SunSpark Energy solar installation in Nigeria",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Solar Installation in Nigeria`,
    description: SITE.shortDescription,
    images: ["/images/photo_2026-08-26_01-06-45.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  category: "Solar Energy",
};

export const viewport: Viewport = {
  themeColor: "#0B1B3D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={SITE.lang} data-scroll-behavior="smooth">
      <body>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <LocalBusinessJsonLd />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}