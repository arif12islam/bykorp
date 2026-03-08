import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
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
  title: "Bykorp | Architects of Digital Infrastructure",
  description: "Bridging the gap between traditional digital marketing and cutting-edge AI automation for enterprise-level growth.",
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
    title: "Bykorp | Architects of Digital Infrastructure",
    description: "Bridging the gap between traditional digital marketing and cutting-edge AI automation for enterprise-level growth.",
    url: "https://www.bykorp.com",
    siteName: "Bykorp",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bykorp | Architects of Digital Infrastructure",
    description: "Bridging the gap between traditional digital marketing and cutting-edge AI automation for enterprise-level growth.",
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
        {children}
      </body>
    </html>
  );
}
