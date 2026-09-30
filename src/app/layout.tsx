import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://tengkuhaidi-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tengku Hidayat Haidi | Independent Technology Consultant & Systems Architect",
  description:
    "Personal portfolio of Tengku Hidayat Haidi. Independent technology consultant helping companies modernize their digital platforms, secure cloud infrastructure, and grow customer acquisition through organic search and paid digital marketing.",
  keywords: [
    "Tengku Hidayat Haidi",
    "Independent Technology Consultant Jakarta",
    "Digital Transformation Consultant",
    "Modern Digital Platforms",
    "Cloud Infrastructure Consulting",
    "Organic Search and Digital Marketing",
    "Business Automation"
  ],
  authors: [{ name: "Tengku Hidayat Haidi", url: siteUrl }],
  creator: "Tengku Hidayat Haidi",
  publisher: "Tengku Hidayat Haidi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Tengku Hidayat Haidi | Independent Technology Consultant & Systems Architect",
    description:
      "Independent technology consultant helping companies modernize their digital platforms, secure cloud infrastructure, and grow customer acquisition through organic search and paid digital marketing.",
    url: siteUrl,
    siteName: "Tengku Hidayat Haidi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tengku Hidayat Haidi — Modern digital platforms, cloud infrastructure & organic search growth",
      },
    ],
    locale: "id_ID",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tengku Hidayat Haidi | Independent Technology Consultant & Systems Architect",
    description:
      "Independent technology consultant helping companies modernize their digital platforms, secure cloud infrastructure, and grow customer acquisition through organic search and paid digital marketing.",
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
      "@type": "Person",
      "@id": "https://tengkuhaidi-portfolio.vercel.app/#person",
      name: "Tengku Hidayat Haidi",
      url: "https://tengkuhaidi-portfolio.vercel.app",
      jobTitle: "Independent Technology Consultant & Systems Architect",
      email: "tengkuhaidi@gmail.com",
      telephone: "+628****4624",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jakarta",
        addressCountry: "Indonesia"
      },
      description:
        "Independent technology consultant based in Jakarta, Indonesia. Helping companies modernize their digital platforms, secure cloud infrastructure, and grow customer acquisition through organic search and paid digital marketing.",
      sameAs: [
        "https://github.com/tengkuhaidi",
        "https://www.linkedin.com/in/tengkuhaidi/"
      ],
      knowsAbout: [
        "Modern Digital Platforms",
        "Cloud Infrastructure & Security",
        "Organic Search Growth & Digital Marketing",
        "Business Process Automation",
        "Applied AI Workflows"
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://tengkuhaidi-portfolio.vercel.app/#website",
      url: "https://tengkuhaidi-portfolio.vercel.app",
      name: "Tengku Hidayat Haidi — Portfolio",
      description: "Official portfolio and engineering showcase of Tengku Hidayat Haidi — Jakarta, Indonesia",
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
