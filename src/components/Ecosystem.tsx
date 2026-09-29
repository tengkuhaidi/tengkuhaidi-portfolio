import React from 'react';
import Image from 'next/image';

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-20 md:py-28 px-4 sm:px-6 max-w-[1200px] mx-auto border-t border-[#dee2de]">
      {/* Editorial Header */}
      <div className="max-w-2xl mb-14">
        <div className="text-[13px] font-mono text-[#646464] mb-2 tracking-tight">
          01 / Ekosistem Holding
        </div>
        <h2 className="text-3xl sm:text-4xl font-editorial text-[#2c2c2c] leading-tight mb-4">
          Bukan sekadar agensi software, kami membangun dan memiliki platform sendiri.
        </h2>
        <p className="text-[16px] text-[#444141] leading-relaxed">
          PT Digitas Solusi Indonesia menggabungkan keahlian rekayasa kode dengan pemahaman mendalam tentang kepatuhan hukum dan transaksi korporasi di Indonesia.
        </p>
      </div>

      {/* Two-Column Literary Split: 6 + 6 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left: Explanatory Context */}
        <div className="md:col-span-5 space-y-6">
          <div className="p-6 rounded-[16px] bg-[#ffffff] border border-[#dee2de] shadow-[0_1px_1px_rgba(0,0,0,0.04)]">
            <h3 className="text-xl font-editorial text-[#2c2c2c] mb-2">Legalizin (Legal-Tech)</h3>
            <p className="text-[14px] text-[#444141] leading-relaxed mb-4">
              Layanan legalitas dan perizinan berusaha OSS RBA untuk PT, CV, PMA, hingga pendaftaran Hak Merek. Dirancang untuk memberikan transparansi total kepada para founder di Jabodetabek dan seluruh Indonesia.
            </p>
            <div className="text-[12px] font-mono text-[#646464] space-y-1">
              <div>Domain: legalizin.com</div>
              <div>Arsitektur: Next.js + Headless REST CMS</div>
              <div>Cakupan: Seluruh Indonesia</div>
            </div>
          </div>

          <div className="p-6 rounded-[16px] bg-[#ffffff] border border-[#dee2de] shadow-[0_1px_1px_rgba(0,0,0,0.04)]">
            <h3 className="text-xl font-editorial text-[#2c2c2c] mb-2">Internal Automation Engines</h3>
            <p className="text-[14px] text-[#444141] leading-relaxed">
              Kami mengembangkan otomasi bot internal, pipeline pengindeksan instan Google Search Console, serta integrasi sistem penagihan mandiri untuk operasional tanpa friksi.
            </p>
          </div>
        </div>

        {/* Right: Visual Proof / Showcase in Mist bordered card */}
        <div className="md:col-span-7 rounded-[16px] bg-[#ffffff] border border-[#dee2de] p-3 shadow-[0_1px_1px_rgba(0,0,0,0.04)]">
          <div className="rounded-[12px] overflow-hidden border border-[#dee2de] bg-[#f9faf7] aspect-[16/10] relative">
            <Image
              src="/portfolio/web-legalizin.png"
              alt="Platform Legalizin.com"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>
          <div className="px-3 pt-3 pb-1 flex items-center justify-between text-[12px] font-mono text-[#646464]">
            <span>Fig. 1 Tampilan Antarmuka Legalizin.com</span>
            <a
              href="https://legalizin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#41a1cf] hover:underline flex items-center gap-1"
            >
              <span>Buka Platform</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
