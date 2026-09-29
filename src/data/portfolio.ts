export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  category: 'ecosystem' | 'system' | 'website';
  categoryLabel: string;
  industry: string;
  image: string;
  gallery?: { src: string; label: string }[];
  technologies: string[];
  url?: string;
  highlight?: boolean;
  metrics?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'legalizin',
    title: 'Legalizin.com',
    description: 'Pilar utama LegalTech ekosistem Digitas. Platform legalitas usaha terpadu dengan headless CMS WordPress, auto-indexing Google, sistem perizinan OSS RBA, dan 1.500+ katalog KBLI interaktif.',
    category: 'ecosystem',
    categoryLabel: 'Holding Ecosystem',
    industry: 'LegalTech & Corporate Services',
    image: '/portfolio/web-legalizin.png',
    technologies: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'WordPress REST API', 'Google Indexing API'],
    url: 'https://legalizin.com',
    highlight: true,
    metrics: '1.600+ URLs Terindeks & Otomasi 8x Harian'
  },
  {
    id: 'hris-enterprise',
    title: 'Enterprise HRIS & Payroll System',
    description: 'Sistem manajemen SDM komprehensif mencakup absensi multi-cabang, kalkulasi PPh 21 TER otomatis, overtime approval, reimbursement slip, dan portal mandiri karyawan.',
    category: 'system',
    categoryLabel: 'Enterprise System',
    industry: 'Human Capital Management',
    image: '/portfolio/hris-dashboard.png',
    gallery: [
      { src: '/portfolio/hris-dashboard.png', label: 'Dashboard Eksekutif' },
      { src: '/portfolio/hris-directory.png', label: 'Direktori Karyawan' },
      { src: '/portfolio/hris-payroll.png', label: 'Sistem Penggajian & PPh 21' },
      { src: '/portfolio/hris-overtime.png', label: 'Alur Lembur (Overtime)' },
      { src: '/portfolio/hris-reimbursement.png', label: 'Reimbursement Klaim' }
    ],
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS'],
    highlight: true,
    metrics: 'Otomasi Penggajian & Kepatuhan Pajak'
  },
  {
    id: 'fixed-asset',
    title: 'Fixed Asset & Depreciation Engine',
    description: 'Sistem pelacakan dan depresiasi aktiva tetap korporasi berdasarkan standar PSAK dan perpajakan fiskal, dilengkapi barcode tracking dan penjadwalan pemeliharaan aset.',
    category: 'system',
    categoryLabel: 'Financial System',
    industry: 'Asset & Wealth Management',
    image: '/portfolio/fixed_asset-cat-system.png',
    technologies: ['Laravel', 'React', 'PostgreSQL', 'Tailwind CSS'],
    highlight: true,
    metrics: 'Audit Aset Terintegrasi PSAK'
  },
  {
    id: 'dokumen-tracking',
    title: 'Corporate Document Tracking System',
    description: 'Platform manajemen alur dokumen hukum dan perizinan instansi dengan audit trail digital, validasi tanda tangan elektronik, dan pelacakan status berkas real-time.',
    category: 'system',
    categoryLabel: 'Workflow Engine',
    industry: 'Enterprise Compliance',
    image: '/portfolio/dokumen_tracking-cat-system.png',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'REST API'],
    metrics: 'Zero Lost Documents Workflow'
  },
  {
    id: 'gisli',
    title: 'GISLI.org Global Initiative',
    description: 'Portal internasional studi global dan inisiatif edukasi dengan infrastruktur multi-bahasa dan navigasi konten akademis modern.',
    category: 'website',
    categoryLabel: 'Global Portal',
    industry: 'Education & Global Non-Profit',
    image: '/portfolio/gisli.org-cat-website.png',
    technologies: ['WordPress Headless', 'PHP', 'MySQL'],
    url: 'https://gisli.org',
    metrics: 'Skalabilitas Audiens Lintas Negara'
  },
  {
    id: 'drakamulia',
    title: 'Draka Mulia Industrial',
    description: 'Website profil korporat produsen dan manufaktur industri cat dengan katalog spesifikasi teknis dan optimasi konversi inquiry B2B.',
    category: 'website',
    categoryLabel: 'Corporate B2B',
    industry: 'Industrial Manufacturing',
    image: '/portfolio/drakamulia-cat-website.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Vercel'],
    metrics: 'Inquiry Lead Generation B2B'
  },
  {
    id: 'kembar-poetri',
    title: 'Kembar Poetri Gemilang',
    description: 'Situs web kontraktor umum dan pengadaan alat berat dengan portofolio proyek konstruksi dan kepatuhan SBUJK terverifikasi.',
    category: 'website',
    categoryLabel: 'Corporate Web',
    industry: 'Construction & Engineering',
    image: '/portfolio/kembar-poetri.png',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    url: 'https://kembarpoetrigemilang.com'
  },
  {
    id: 'echoffice',
    title: 'Echoffice Coworking & Hub',
    description: 'Platform sewa kantor bersama dan virtual office dengan pemetaan zonasi, virtual tour 360, dan reservasi ruang rapat instan.',
    category: 'website',
    categoryLabel: 'Commercial Web',
    industry: 'Commercial Real Estate',
    image: '/portfolio/echoffice-cat-website.png',
    technologies: ['React', 'Node.js', 'Tailwind CSS']
  },
  {
    id: 'biatravel',
    title: 'Bia Tour & Travel',
    description: 'Portal pemesanan paket wisata domestik dan internasional dengan jadwal armada dan sistem reservasi online terintegrasi.',
    category: 'website',
    categoryLabel: 'Booking Engine',
    industry: 'Travel & Hospitality',
    image: '/portfolio/biatravel-cat-website.png',
    technologies: ['PHP', 'MySQL', 'JavaScript'],
    url: 'https://biatravel.com'
  }
];
