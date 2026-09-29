import React from 'react';
import { Code2, Server, LayoutDashboard, SearchCheck, ShieldAlert, Cpu, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Code2,
    tag: 'Engineering',
    title: 'Custom Web & Platform Development',
    description: 'Kami membangun aplikasi web berkinerja tinggi menggunakan Next.js, React, dan TypeScript. Mengutamakan Core Web Vitals optimal, zero hydration error, dan skalabilitas edge computing.',
    deliverables: ['Web Apps & Portals', 'Company Architecture', 'E-Commerce Skala Lanjut']
  },
  {
    icon: Server,
    tag: 'Enterprise Systems',
    title: 'Custom ERP, HRIS & Internal Tools',
    description: 'Menghilangkan kekacauan spreadsheet manual. Kami mendesain modul enterprise terintegrasi: kalkulasi payroll & PPh 21, inventaris multi-gudang, tracking depresiasi aset, dan approval alur bertingkat.',
    deliverables: ['Sistem Penggajian & HRIS', 'Audit Aktiva Tetap (Fixed Asset)', 'Workflow Approval Dokumen']
  },
  {
    icon: LayoutDashboard,
    tag: 'Product Design',
    title: 'UI/UX Design Systems (Anti-Slop)',
    description: 'Desain antarmuka bisnis modern dengan sistem token warna terstruktur, hierarki tipografi tegas, dan micro-interactions presisi. Tidak ada placeholder atau template pasaran murahan.',
    deliverables: ['Figma Design System', 'Tailwind Component Libraries', 'User Journey & Wireframing']
  },
  {
    icon: SearchCheck,
    tag: 'Growth Infrastructure',
    title: 'Technical SEO & API Indexing Pipeline',
    description: 'Infrastruktur perayapan instan yang menghubungkan CMS dengan Google Search Console dan Indexing API. Struktur silo (Hub-and-Spoke), schema markup valid, dan optimasi kecepatan ekstrem.',
    deliverables: ['Instant Google Indexing Engine', 'Programmatic SEO Setup', 'Core Web Vitals 95+ Audit']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-blue-400 bg-blue-950/40 border border-blue-800/60 mb-4">
            <Cpu className="size-3.5" />
            <span>KAPABILITAS INTI REKAYASA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Spesialisasi Rekayasa Perangkat Lunak untuk Kebutuhan Riil Bisnis
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            Kami menolak kode bertele-tele dan fitur mubazir. Setiap baris kode yang ditulis dirancang untuk menjawab hambatan operasional dan efisiensi finansial perusahaan.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-neutral-900/30 border border-neutral-800/80 hover:border-neutral-700 transition-all flex flex-col justify-between group hover:bg-neutral-900/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="size-12 rounded-xl bg-neutral-800/80 text-blue-400 flex items-center justify-center group-hover:scale-110 group-hover:text-blue-300 transition-all">
                      <Icon className="size-6" />
                    </div>
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                      {svc.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                    {svc.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-neutral-800/60">
                  <div className="text-xs font-mono text-neutral-500 mb-2">OUTPUT DELIVERABLE:</div>
                  <div className="flex flex-wrap gap-2">
                    {svc.deliverables.map((item, dIdx) => (
                      <span
                        key={dIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-950 border border-neutral-800 text-neutral-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
