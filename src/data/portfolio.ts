export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  category: 'All' | 'Ecosystem' | 'Web & Platform' | 'Custom ERP & Systems' | 'Automation & SEO';
  image: string;
  url?: string;
  year: string;
  client: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'legalizin',
    title: 'Legalizin.com Platform',
    description: 'Corporate legality and business incorporation infrastructure with automated AHU and KBLI compliance.',
    category: 'Ecosystem',
    image: '/portfolio/legalizin-landing.png',
    url: 'https://legalizin.com',
    year: '2024 — Present',
    client: 'Legalizin Indonesia',
  },
  {
    id: 'vms',
    title: 'Visitor Management System (VMS)',
    description: 'Building reception and physical security platform. Self-registration, host notifications, and access logging for commercial towers.',
    category: 'Custom ERP & Systems',
    image: '/portfolio/vms-enterprise.png',
    year: '2024',
    client: 'Commercial Towers',
  },
  {
    id: 'ihg-asset-tracking',
    title: 'IHG Fixed Asset Tracking System',
    description: 'Enterprise asset management and audit platform with barcode verification and depreciation tracking.',
    category: 'Custom ERP & Systems',
    image: '/portfolio/ihg-asset-tracking.png',
    year: '2023',
    client: 'PT Metropolitan Kentjana Tbk',
  },
  {
    id: 'doc-tracking',
    title: 'Corporate Document Tracking System',
    description: 'Internal document workflow management, approval routing, and archival audit trail.',
    category: 'Custom ERP & Systems',
    image: '/portfolio/metropolitan-kentjana-doc-tracking.png',
    year: '2023',
    client: 'PT Metropolitan Kentjana Tbk',
  },
  {
    id: 'kumpul',
    title: 'KUMPUL Ecosystem Platform',
    description: 'National startup ecosystem platform connecting entrepreneurs, corporate partners, and government innovation programs.',
    category: 'Web & Platform',
    image: '/portfolio/kumpul-id.png',
    year: '2023',
    client: 'KUMPUL.ID',
  },
  {
    id: 'global-astra',
    title: 'Global Astra Mandiri Logistics',
    description: 'Freight forwarding and international container logistics platform with service catalog and instant quotes.',
    category: 'Web & Platform',
    image: '/portfolio/global-astra-mandiri.png',
    year: '2023',
    client: 'PT Global Astra Mandiri',
  },
  {
    id: 'mega-advans',
    title: 'Mega Advans Teknologi Maritime',
    description: 'Maritime communications and commercial vessel tracking systems platform.',
    category: 'Web & Platform',
    image: '/portfolio/mega-advans-teknologi.png',
    year: '2023',
    client: 'PT Mega Advans Teknologi',
  },
  {
    id: 'dunia-marine',
    title: 'Dunia Marine Internusa',
    description: 'Marine equipment and industrial vessel navigation technology distribution hub.',
    category: 'Web & Platform',
    image: '/portfolio/dunia-marine-internusa.png',
    year: '2023',
    client: 'PT Dunia Marine Internusa',
  },
  {
    id: 'karcher',
    title: 'Kärcher Official Distributor',
    description: 'E-catalog and enterprise sales portal for commercial and industrial cleaning systems.',
    category: 'Web & Platform',
    image: '/portfolio/karcher-distributor.png',
    year: '2023',
    client: 'Kärcher Indonesia',
  },
  {
    id: 'putra-teknik-mulya',
    title: 'Putra Teknik Mulya Engineering',
    description: 'Corporate portal for commercial elevator, escalator, and vertical transport engineering.',
    category: 'Web & Platform',
    image: '/portfolio/putra-teknik-mulya.png',
    year: '2022',
    client: 'PT Putra Teknik Mulya',
  },
  {
    id: 'gisli',
    title: 'GISLI Maritime Safety Initiative',
    description: 'Public foundation portal promoting maritime safety awareness, life-saving regulations, and search operations.',
    category: 'Web & Platform',
    image: '/portfolio/gisli-maritime.png',
    year: '2023',
    client: 'GISLI Organization',
  },
  {
    id: 'ruang-motor',
    title: 'Ruang Motor Indonesia Fleet',
    description: 'Commercial bus charter and tourism transport booking platform with live fleet directory.',
    category: 'Web & Platform',
    image: '/portfolio/ruang-motor-indonesia.png',
    year: '2023',
    client: 'PT Ruang Motor Indonesia',
  },
  {
    id: 'bia-travel',
    title: 'BIA Travel Haji & Umroh',
    description: 'Pilgrimage booking and departure management platform for Haji & Umroh programs.',
    category: 'Web & Platform',
    image: '/portfolio/bia-travel.png',
    year: '2022',
    client: 'PT BIA Travel',
  },
];
