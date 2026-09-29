import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Ecosystem from '@/components/Ecosystem';
import Services from '@/components/Services';
import PortfolioSection from '@/components/PortfolioSection';
import AboutCompany from '@/components/AboutCompany';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://digitasolusindo.com'),
  title: 'PT Digitas Solusi Indonesia | Technology Venture & Systems Holding',
  description: 'Studio rekayasa perangkat lunak dan holding venture di Jakarta Selatan. Menghadirkan ekosistem LegalTech Legalizin.com, arsitektur Next.js modern, dan sistem ERP internal terintegrasi.',
  alternates: {
    canonical: 'https://digitasolusindo.com',
  },
  openGraph: {
    title: 'PT Digitas Solusi Indonesia | Systems Holding & Technology Studio',
    description: 'Studio rekayasa perangkat lunak dan holding teknologi terpadu di Indonesia. Mengoperasikan ekosistem LegalTech Legalizin.com dan sistem enterprise handal.',
    url: 'https://digitasolusindo.com',
    siteName: 'PT Digitas Solusi Indonesia',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PT Digitas Solusi Indonesia'
      }
    ],
    locale: 'id_ID',
    type: 'website',
  }
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PT Digitas Solusi Indonesia',
    url: 'https://digitasolusindo.com',
    logo: 'https://digitasolusindo.com/logo-digitas.png',
    description: 'Technology venture and systems engineering holding in South Jakarta, Indonesia.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Alamanda Tower Lt. 2 Unit H 1, Jl. TB. Simatupang No. 23-24, Cilandak Barat',
      addressLocality: 'Jakarta Selatan',
      addressRegion: 'DKI Jakarta',
      postalCode: '12430',
      addressCountry: 'ID'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+62-812-3524-7820',
      contactType: 'customer service',
      email: 'info@digitasolusindo.com',
      availableLanguage: ['Indonesian', 'English']
    },
    subOrganization: [
      {
        '@type': 'Organization',
        name: 'Legalizin',
        url: 'https://legalizin.com'
      }
    ]
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-blue-500 selection:text-white antialiased">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />
      <Hero />
      <Ecosystem />
      <Services />
      <PortfolioSection />
      <AboutCompany />
      <Footer />
    </main>
  );
}
