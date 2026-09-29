import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://digitasolusindo.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "PT Digitas Solusi Indonesia | Autonomous Systems & Software Studio",
  description:
    "Engineering holding and software studio in Jakarta Selatan. Architecting sovereign platforms, autonomous AI workflows, and custom enterprise infrastructure. Home of Legalizin.com.",
  keywords: [
    "PT Digitas Solusi Indonesia",
    "Digitas Solusi Indonesia",
    "Software Engineering Studio Jakarta",
    "Venture Studio Indonesia",
    "Custom Enterprise ERP",
    "Autonomous AI Agents Indonesia",
    "Legalizin",
    "Next.js Enterprise Development",
    "Visitor Management System Indonesia"
  ],
  authors: [{ name: "PT Digitas Solusi Indonesia", url: siteUrl }],
  creator: "PT Digitas Solusi Indonesia",
  publisher: "PT Digitas Solusi Indonesia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "PT Digitas Solusi Indonesia | Autonomous Systems & Software Studio",
    description:
      "Engineering holding and software studio in Jakarta Selatan. Architecting sovereign platforms, autonomous AI workflows, and custom enterprise infrastructure.",
    url: siteUrl,
    siteName: "PT Digitas Solusi Indonesia",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PT Digitas Solusi Indonesia — Software systems that run your business",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT Digitas Solusi Indonesia | Autonomous Systems & Software Studio",
    description:
      "Engineering holding and software studio in Jakarta Selatan. Architecting sovereign platforms, autonomous AI workflows, and custom enterprise infrastructure.",
    images: ["/og-image.png"],
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/favicon.png" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Corporation",
      "@id": "https://digitasolusindo.com/#organization",
      name: "PT Digitas Solusi Indonesia",
      legalName: "PT Digitas Solusi Indonesia",
      url: "https://digitasolusindo.com",
      logo: "https://digitasolusindo.com/favicon.png",
      image: "https://digitasolusindo.com/og-image.png",
      description:
        "Engineering holding and software studio in Jakarta Selatan specializing in autonomous systems, custom ERPs, and high-performance digital platforms.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jakarta Selatan",
        addressRegion: "DKI Jakarta",
        addressCountry: "ID",
      },
      areaServed: {
        "@type": "Country",
        name: "Indonesia",
      },
      owns: [
        {
          "@type": "Organization",
          name: "Legalizin",
          url: "https://legalizin.com",
          description: "Digital platform for Indonesian corporate legality and business permits.",
        },
      ],
      knowsAbout: [
        "Software Engineering",
        "Autonomous AI Agents",
        "Enterprise ERP Systems",
        "Headless Architecture",
        "Search Engine Optimization & Indexing",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://digitasolusindo.com/#website",
      url: "https://digitasolusindo.com",
      name: "PT Digitas Solusi Indonesia",
      description: "Official portal of PT Digitas Solusi Indonesia",
      publisher: {
        "@id": "https://digitasolusindo.com/#organization",
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-[#41a1cf]/20 selection:text-[#171717] dark:selection:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
