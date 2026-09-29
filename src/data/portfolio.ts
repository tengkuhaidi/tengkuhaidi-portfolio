export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  category: 'All' | 'Ecosystem' | 'Enterprise Systems' | 'Corporate Web';
  categoryLabel: string;
  industry: string;
  image: string;
  client: string;
  year: string;
  url?: string;
  highlight?: boolean;
}

export type ProjectCategory = 'All' | 'Ecosystem' | 'Enterprise Systems' | 'Corporate Web';

export const categories: ProjectCategory[] = ['All', 'Ecosystem', 'Enterprise Systems', 'Corporate Web'];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'legalizin',
    title: 'Legalizin.com Platform',
    description: 'Flagship legal technology platform handling nationwide corporate incorporation, AHU SABH annual reporting, KBLI cross-reference tools, and instant programmatic Google search indexing.',
    category: 'Ecosystem',
    categoryLabel: 'Holding Ecosystem',
    industry: 'LegalTech & Corporate Services',
    image: '/portfolio/web-legalizin.png',
    client: 'PT Digitas Solusi Indonesia',
    year: '2024 — Present',
    url: 'https://legalizin.com',
    highlight: true,
  },
  {
    id: 'hris-enterprise',
    title: 'Enterprise HRIS & Biometric Payroll',
    description: 'Comprehensive human capital management engine: multi-branch biometric attendance synchronization, automated PPh 21 TER tax calculations, overtime workflows, and employee self-service portals.',
    category: 'Enterprise Systems',
    categoryLabel: 'Enterprise System',
    industry: 'Human Capital Management',
    image: '/portfolio/hris-dashboard.png',
    client: 'Corporate Client',
    year: '2024',
    highlight: true,
  },
  {
    id: 'fixed-asset',
    title: 'Fixed Asset & Depreciation Engine',
    description: 'Sovereign asset valuation platform calculating asset depreciation under Indonesian PSAK financial standards and tax fiscal laws, featuring barcode physical tracking and audit lifecycles.',
    category: 'Enterprise Systems',
    categoryLabel: 'Financial System',
    industry: 'Asset & Wealth Management',
    image: '/portfolio/fixed_asset-cat-system.png',
    client: 'Holding Enterprise',
    year: '2023',
    highlight: true,
  },
  {
    id: 'dokumen-tracking',
    title: 'Corporate Legal Document Tracking',
    description: 'End-to-end legal workflow engine with granular cryptographic audit trails, digital sign-off validations, and real-time ministry submission status tracking.',
    category: 'Enterprise Systems',
    categoryLabel: 'Workflow Engine',
    industry: 'Enterprise Compliance',
    image: '/portfolio/dokumen_tracking-cat-system.png',
    client: 'Legalizin Partner Network',
    year: '2024',
  },
  {
    id: 'gisli',
    title: 'GISLI.org Global Initiative',
    description: 'International global studies portal and research publication platform architected with headless CMS infrastructure and regional content delivery caching.',
    category: 'Corporate Web',
    categoryLabel: 'Global Portal',
    industry: 'Education & Global Non-Profit',
    image: '/portfolio/gisli.org-cat-website.png',
    client: 'GISLI Initiative',
    year: '2023',
    url: 'https://gisli.org',
  },
  {
    id: 'drakamulia',
    title: 'Draka Mulia Industrial',
    description: 'Industrial paint manufacturing corporate portal featuring technical product specifications, laboratory safety data sheets, and high-conversion B2B inquiry routing.',
    category: 'Corporate Web',
    categoryLabel: 'Corporate B2B',
    industry: 'Industrial Manufacturing',
    image: '/portfolio/drakamulia-cat-website.png',
    client: 'PT Draka Mulia Mandiri',
    year: '2023',
  },
  {
    id: 'kembar-poetri',
    title: 'Kembar Poetri Gemilang',
    description: 'General contractor and heavy machinery procurement infrastructure portal showcasing verified civil engineering projects and corporate construction credentials.',
    category: 'Corporate Web',
    categoryLabel: 'Corporate Web',
    industry: 'Construction & Engineering',
    image: '/portfolio/kembar-poetri.png',
    client: 'PT Kembar Poetri Gemilang',
    year: '2023',
    url: 'https://kembarpoetrigemilang.com'
  },
  {
    id: 'echoffice',
    title: 'Echoffice Coworking & Hub',
    description: 'Commercial real estate and virtual office booking portal featuring interactive zoning maps, 360-degree virtual space tours, and instant meeting room reservations.',
    category: 'Corporate Web',
    categoryLabel: 'Commercial Web',
    industry: 'Commercial Real Estate',
    image: '/portfolio/echoffice-cat-website.png',
    client: 'Echoffice Indonesia',
    year: '2023',
  },
  {
    id: 'biatravel',
    title: 'Bia Tour & Travel',
    description: 'Hospitality and international tour booking engine with live fleet management schedules, automated itinerary generation, and digital invoicing.',
    category: 'Corporate Web',
    categoryLabel: 'Booking Engine',
    industry: 'Travel & Hospitality',
    image: '/portfolio/biatravel-cat-website.png',
    client: 'PT Bia Tour & Travel',
    year: '2022',
    url: 'https://biatravel.com'
  }
];
