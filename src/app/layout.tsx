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
  title: "Tengku Hidayat Haidi | Independent Systems Engineer & Technology Consultant",
  description:
    "Personal engineering portfolio of Tengku Hidayat Haidi. Consulting software engineer and full-stack systems architect helping companies go digital, automate operations, and scale search visibility.",
  keywords: [
    "Tengku Hidayat Haidi",
    "Independent Software Consultant Jakarta",
    "Full-Stack Systems Engineer",
    "Digital Transformation Freelance",
    "Next.js Systems Architecture",
    "DevOps and Cloud Infrastructure",
    "Technical SEO and SEM Automation",
    "Custom Enterprise Systems"
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
    title: "Tengku Hidayat Haidi | Independent Systems Engineer & Technology Consultant",
    description:
      "Consulting software engineer and full-stack systems architect helping companies go digital, automate operations, and scale search visibility.",
    url: siteUrl,
    siteName: "Tengku Hidayat Haidi",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tengku Hidayat Haidi — Software systems, infrastructure & digital transformation",
      },
    ],
    locale: "id_ID",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tengku Hidayat Haidi | Independent Systems Engineer & Technology Consultant",
    description:
      "Consulting software engineer and full-stack systems architect helping companies go digital, automate operations, and scale search visibility.",
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
      jobTitle: "Independent Systems Engineer & Growth Consultant",
      email: "tengkuhaidi@gmail.com",
      telephone: "+6287825174624",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jakarta",
        addressCountry: "Indonesia"
      },
      description:
        "Full-stack software consultant and systems engineer based in Jakarta, Indonesia. Helping companies go digital, build custom software ecosystems, and execute technical SEO / SEM.",
      sameAs: [
        "https://github.com/tengkuhaidi",
        "https://www.linkedin.com/in/tengkuhaidi/"
      ],
      knowsAbout: [
        "Full-Stack Web Engineering",
        "Cloud Infrastructure & DevOps",
        "Autonomous AI Workflows",
        "Enterprise ERP & VMS Systems",
        "Technical SEO Architecture"
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
