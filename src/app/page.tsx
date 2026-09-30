import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Ecosystem from '@/components/Ecosystem';
import CapabilitiesStory from '@/components/CapabilitiesStory';
import Services from '@/components/Services';
import PortfolioSection from '@/components/PortfolioSection';
import AboutCompany from '@/components/AboutCompany';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://tengkuhaidi-portfolio.vercel.app'),
  title: 'Tengku Hidayat Haidi | Independent Systems Consultant, Full-Stack Engineer & Growth Architect',
  description: 'Independent engineering consultant helping companies scale and go digital. Specializing in enterprise full-stack development, cloud DevOps, custom ERPs, and organic search automation pipelines.',
  alternates: {
    canonical: 'https://tengkuhaidi-portfolio.vercel.app',
  },
  openGraph: {
    title: 'Tengku Hidayat Haidi | Independent Systems Consultant & Engineer',
    description: 'Independent engineering consultant helping companies scale and go digital. Specializing in enterprise full-stack development, cloud DevOps, custom ERPs, and organic search automation pipelines.',
    url: 'https://tengkuhaidi-portfolio.vercel.app',
    siteName: 'Tengku Hidayat Haidi',
    locale: 'en_US',
    type: 'profile',
  }
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Tengku Hidayat Haidi',
    url: 'https://tengkuhaidi-portfolio.vercel.app',
    jobTitle: 'Independent Technology Consultant & Systems Architect',
    description: 'Independent technology consultant helping businesses modernize digital platforms, secure cloud infrastructure, and grow customer acquisition through organic search and paid digital marketing.',
    sameAs: [
      'https://github.com/tengkuhaidi',
      'https://www.linkedin.com/in/tengkuhaidi/'
    ],
    knowsAbout: [
      'Modern Digital Platforms & Web Applications',
      'Secure Cloud Infrastructure & Operations',
      'Enterprise Software & Business Automation',
      'Applied AI Workflows & WhatsApp CS Automation',
      'Organic Search Growth, SEM & Digital Marketing',
      'Digital Transformation Consulting for Growing Companies'
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* 
        Solid Main Content Shell (z-10, relative, solid bg)
        Ensures the fixed footer curtain underneath is 100% occluded until the user scrolls to the bottom
      */}
      <main className="relative z-10 w-full bg-[var(--canvas-bg)] text-[var(--text-main)] shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-colors antialiased">
        <Hero />
        <Ecosystem />
        <CapabilitiesStory />
        <Services />
        <PortfolioSection />
        <AboutCompany />
      </main>

      {/* Sticky Curtain Reveal Footer outside main content */}
      <Footer />
    </>
  );
}
