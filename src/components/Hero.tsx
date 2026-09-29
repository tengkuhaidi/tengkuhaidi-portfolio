import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-4 sm:px-6 max-w-[1200px] mx-auto">
      {/* Subdued Editorial Eyebrow */}
      <div className="mb-6 flex items-center gap-2">
        <span className="text-[13px] font-mono text-[#646464] tracking-tight">
          PT Digitas Solusi Indonesia
        </span>
        <span className="text-[#b4b8b4]">—</span>
        <span className="text-[13px] text-[#444141]">
          Jakarta Selatan
        </span>
      </div>

      {/* Literary Display Headline (ppmondwest/serif style, 48-54px, weight 400, tight tracking) */}
      <h1 className="text-4xl sm:text-5xl md:text-[54px] font-editorial text-[#2c2c2c] leading-[1.12] tracking-[-0.035em] max-w-4xl mb-8">
        Kami merancang perangkat lunak dan sistem operasional yang menopang pertumbuhan bisnis nyata.
      </h1>

      {/* Editorial Body (af / sans, 16-18px, Charcoal #444141, leading 1.5) */}
      <p className="text-[17px] sm:text-[18px] text-[#444141] leading-[1.55] max-w-2xl mb-10">
        Digitas Solusi Indonesia adalah studio rekayasa teknologi independen sekaligus entitas penaung platform LegalTech terintegrasi <a href="https://legalizin.com" target="_blank" rel="noopener noreferrer" className="underline decoration-[#41a1cf] underline-offset-4 text-[#171717] hover:text-[#41a1cf] transition-colors">Legalizin.com</a>. Kami tidak membuat prototipe dekoratif; kami membangun infrastruktur digital yang bekerja setiap hari tanpa henti.
      </p>

      {/* Buttons: Outlined Signal Blue Primary + Outlined Neutral Secondary */}
      <div className="flex flex-wrap items-center gap-3.5 mb-20">
        <a
          href="https://wa.me/6281235247820"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-[8px] border border-[#41a1cf] text-[15px] font-medium text-[#41a1cf] hover:bg-[#41a1cf]/5 transition-all group"
        >
          <span>Konsultasi Proyek</span>
          <span className="inline-flex items-center justify-center size-4 rounded-full border border-[#41a1cf]/50 text-[10px] group-hover:translate-x-0.5 transition-transform">
            →
          </span>
        </a>

        <a
          href="#portfolio"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-[8px] border border-[#282834] text-[15px] font-medium text-[#282834] hover:bg-[#f9faf7] transition-all"
        >
          <span>Lihat Portofolio Sistem</span>
        </a>
      </div>

      {/* Atmospheric Accent Card (Cerulean #0081c0 accent surface as punctuation) */}
      <div className="rounded-[24px] bg-[#0081c0] text-white p-8 sm:p-12 md:p-14 relative overflow-hidden shadow-[0_2px_2px_rgba(0,0,0,0.06)]">
        <div className="max-w-2xl relative z-10">
          <div className="text-[12px] font-mono tracking-widest uppercase text-white/75 mb-3">
            Inisiatif Utama • Flagship Ecosystem
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-editorial text-white leading-tight mb-4">
            Legalizin.com: Menghubungkan kepatuhan hukum dan perizinan bisnis dalam satu arsitektur modern.
          </h2>
          <p className="text-[15px] sm:text-[16px] text-white/90 leading-relaxed mb-6 font-sans">
            Lebih dari 1.500 kode KBLI 2025, integrasi otomatis ke Google Indexing API, dan ratusan transaksi pendirian badan usaha PT &amp; CV yang diproses secara terstruktur tanpa kekacauan dokumen fisik.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-[13px] font-mono text-white/80 pt-4 border-t border-white/20">
            <span>• Next.js 16 App Router</span>
            <span>• Headless WordPress Engine</span>
            <span>• OSS RBA Verified</span>
          </div>
        </div>

        {/* Subtle decorative background ring */}
        <div className="absolute -right-20 -bottom-20 size-80 rounded-full border border-white/10 pointer-events-none" />
      </div>
    </section>
  );
}
