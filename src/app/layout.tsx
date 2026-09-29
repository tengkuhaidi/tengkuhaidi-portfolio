import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://digitasolusindo.com'),
  title: 'PT Digitas Solusi Indonesia | Studio Rekayasa & Holding Sistem',
  description: 'Studio rekayasa sistem dan holding venture di Jakarta Selatan. Penaung Legalizin.com, arsitektur web modern, dan sistem digital terpercaya.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${newsreader.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-[#fefffc] text-[#2c2c2c] font-sans antialiased selection:bg-[#41a1cf]/20 selection:text-[#171717]">
        {children}
      </body>
    </html>
  );
}
