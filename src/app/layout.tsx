import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import { StructuredData } from "./structured-data";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bykorp.com"),
  title: {
    default: "Bykorp — Digital Agency | Web Development, AI Automation & Marketing",
    template: "%s | Bykorp",
  },
  description: "Bykorp is a full-service digital agency specializing in web development, AI automation, SEO, and digital marketing. We build high-converting websites and intelligent systems that drive enterprise-level growth.",
  keywords: [
    "Bykorp", "bykorp", "bykorp agency", "bykorp digital agency",
    "web development agency", "AI automation", "digital marketing",
    "SEO agency", "Next.js development", "Bangladesh digital agency",
  ],
  alternates: {
    canonical: "https://www.bykorp.com",
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "Bykorp — Digital Agency | Web Development, AI Automation & Marketing",
    description: "Bykorp is a full-service digital agency specializing in web development, AI automation, SEO, and digital marketing for enterprise-level growth.",
    url: "https://www.bykorp.com",
    siteName: "Bykorp",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/bykorp_logo.png",
        width: 512,
        height: 512,
        alt: "Bykorp Digital Agency Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bykorp — Digital Agency | Web Development, AI Automation & Marketing",
    description: "Bykorp is a full-service digital agency specializing in web development, AI automation, SEO, and digital marketing.",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${space.variable} antialiased overflow-x-hidden`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
