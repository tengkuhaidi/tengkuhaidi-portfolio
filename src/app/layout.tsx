import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://digitasolusindo.com'),
  title: 'PT Digitas Solusi Indonesia | Studio Rekayasa & Holding Sistem',
  description: 'Studio rekayasa sistem dan holding teknologi di Jakarta Selatan. Penaung Legalizin.com, arsitektur web modern, dan sistem digital terpercaya.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-[#fefffc] text-[#2c2c2c] antialiased selection:bg-[#41a1cf]/20 selection:text-[#171717]">
        {children}
      </body>
    </html>
  );
}
