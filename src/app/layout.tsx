import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
    <html lang="id" suppressHydrationWarning className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-[#41a1cf]/20 selection:text-[#171717] dark:selection:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
