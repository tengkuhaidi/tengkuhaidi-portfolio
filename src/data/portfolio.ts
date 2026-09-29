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
    description: 'Corporate legality and licensing portal. Handles company incorporation, AHU annual filings, KBLI tools, and automated search indexing.',
    category: 'Ecosystem',
    categoryLabel: 'Holding Ecosystem',
    industry: 'LegalTech',
    image: '/portfolio/web-legalizin.png',
    client: 'PT Digitas Solusi Indonesia',
    year: '2024 — Present',
    url: 'https://legalizin.com',
    highlight: true,
  },
  {
    id: 'vms-enterprise',
    title: 'Visitor Management System (VMS)',
    description: 'Building reception and physical security platform. Self-registration, host notifications, and access logging for commercial towers.',
    category: 'Enterprise Systems',
    categoryLabel: 'Enterprise System',
    industry: 'Facility Management',
    image: '/portfolio/vms-login.png',
    client: 'Commercial Towers',
    year: '2024',
    highlight: true,
  },
  {
    id: 'fixed-asset',
    title: 'Fixed Asset & Depreciation Engine',
    description: 'Corporate asset tracking platform. Calculates depreciation under PSAK standards with barcode scanning and audit histories.',
    category: 'Enterprise Systems',
    categoryLabel: 'Financial System',
    industry: 'Asset Management',
    image: '/portfolio/fixed_asset-cat-system.png',
    client: 'Holding Enterprise',
    year: '2023',
    highlight: true,
  },
  {
    id: 'dokumen-tracking',
    title: 'Corporate Legal Document Tracking',
    description: 'Workflow software for corporate files. Features audit logs, digital signatures, and live ministry submission status.',
    category: 'Enterprise Systems',
    categoryLabel: 'Workflow Engine',
    industry: 'Compliance',
    image: '/portfolio/dokumen_tracking-cat-system.png',
    client: 'Partner Network',
    year: '2024',
  },
  {
    id: 'gisli',
    title: 'GISLI.org Global Initiative',
    description: 'International research and education portal with multi-language publishing and regional content caching.',
    category: 'Corporate Web',
    categoryLabel: 'Global Portal',
    industry: 'Education & Non-Profit',
    image: '/portfolio/gisli.org-cat-website.png',
    client: 'GISLI Initiative',
    year: '2023',
    url: 'https://gisli.org',
  },
  {
    id: 'drakamulia',
    title: 'Draka Mulia Industrial',
    description: 'Industrial coatings manufacturer website with technical specifications, lab test sheets, and B2B inquiry routing.',
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
    description: 'Contractor and heavy equipment company site displaying civil project records and verified building licenses.',
    category: 'Corporate Web',
    categoryLabel: 'Corporate Web',
    industry: 'Construction',
    image: '/portfolio/kembar-poetri.png',
    client: 'PT Kembar Poetri Gemilang',
    year: '2023',
    url: 'https://kembarpoetrigemilang.com'
  },
  {
    id: 'echoffice',
    title: 'Echoffice Coworking & Hub',
    description: 'Workspace and virtual office portal with building zoning checks, 360-degree room tours, and room bookings.',
    category: 'Corporate Web',
    categoryLabel: 'Commercial Web',
    industry: 'Real Estate',
    image: '/portfolio/echoffice-cat-website.png',
    client: 'Echoffice Indonesia',
    year: '2023',
  },
  {
    id: 'biatravel',
    title: 'Bia Tour & Travel',
    description: 'Tour booking website with fleet schedules, itinerary builders, and automated booking invoices.',
    category: 'Corporate Web',
    categoryLabel: 'Booking Engine',
    industry: 'Hospitality',
    image: '/portfolio/biatravel-cat-website.png',
    client: 'PT Bia Tour & Travel',
    year: '2022',
    url: 'https://biatravel.com'
  }
];
