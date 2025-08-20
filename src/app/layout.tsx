import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ghana First Company Limited - Leading Sanitation Management Across Africa",
  description: "Ghana First Company Limited is a leading Ghanaian sanitation company specializing in modern sanitary facilities, bio-digester installation, waste-to-energy technology, and sustainable sanitation solutions across Africa.",
  keywords: "sanitation, Ghana, Africa, waste management, bio-digester, sustainable development, public health, East Legon, Accra",
  authors: [{ name: "Ghana First Company Limited" }],
  creator: "Ghana First Company Limited",
  publisher: "Ghana First Company Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ghanafirst.com'),
  openGraph: {
    title: "Ghana First Company Limited - Leading Sanitation Management Across Africa",
    description: "Leading provider of modern sanitary facilities, bio-digester installation, and sustainable sanitation solutions across Africa.",
    url: 'https://ghanafirst.com',
    siteName: 'Ghana First Company Limited',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ghana First Company Limited',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ghana First Company Limited - Leading Sanitation Management Across Africa",
    description: "Leading provider of modern sanitary facilities, bio-digester installation, and sustainable sanitation solutions across Africa.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
