'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { portfolioProjects } from '@/data/portfolio';

export default function PortfolioSection() {
  const [filter, setFilter] = useState<'all' | 'ecosystem' | 'system' | 'website'>('all');

  const items = filter === 'all'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-20 md:py-28 px-4 sm:px-6 max-w-[1200px] mx-auto border-t border-[#dee2de]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <div className="text-[13px] font-mono text-[#646464] mb-2 tracking-tight">
            03 / Portofolio &amp; Sistem
          </div>
          <h2 className="text-3xl sm:text-4xl font-editorial text-[#2c2c2c] leading-tight mb-3">
            Dokumentasi sistem dan karya yang telah selesai dibangun.
          </h2>
          <p className="text-[16px] text-[#444141] leading-relaxed">
            Arsip karya terpilih yang mencakup platform internal perusahaan, sistem penggajian, dan website korporat berkinerja tinggi.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 self-start md:self-auto">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-[8px] text-[13px] font-medium transition-all ${
              filter === 'all'
                ? 'bg-[#1f1f29] text-white'
                : 'bg-white border border-[#dee2de] text-[#444141] hover:text-[#171717]'
            }`}
          >
            Semua ({portfolioProjects.length})
          </button>
          <button
            onClick={() => setFilter('ecosystem')}
            className={`px-3 py-1.5 rounded-[8px] text-[13px] font-medium transition-all ${
              filter === 'ecosystem'
                ? 'bg-[#1f1f29] text-white'
                : 'bg-white border border-[#dee2de] text-[#444141] hover:text-[#171717]'
            }`}
          >
            Ekosistem
          </button>
          <button
            onClick={() => setFilter('system')}
            className={`px-3 py-1.5 rounded-[8px] text-[13px] font-medium transition-all ${
              filter === 'system'
                ? 'bg-[#1f1f29] text-white'
                : 'bg-white border border-[#dee2de] text-[#444141] hover:text-[#171717]'
            }`}
          >
            Sistem Kustom / ERP
          </button>
          <button
            onClick={() => setFilter('website')}
            className={`px-3 py-1.5 rounded-[8px] text-[13px] font-medium transition-all ${
              filter === 'website'
                ? 'bg-[#1f1f29] text-white'
                : 'bg-white border border-[#dee2de] text-[#444141] hover:text-[#171717]'
            }`}
          >
            Platform Web
          </button>
        </div>
      </div>

      {/* Grid: Mist borders, Paper surfaces, subtle shadows */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-[16px] bg-[#ffffff] border border-[#dee2de] overflow-hidden flex flex-col justify-between shadow-[0_1px_1px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.06)] transition-all"
          >
            <div>
              {/* Media Container */}
              <div className="aspect-[16/10] bg-[#f9faf7] relative border-b border-[#dee2de]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Text Meta */}
              <div className="p-5">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#646464] mb-2 uppercase">
                  <span>{item.categoryLabel}</span>
                  <span>{item.industry}</span>
                </div>
                <h3 className="text-lg font-editorial text-[#2c2c2c] mb-2">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#444141] leading-relaxed line-clamp-3 mb-4">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Footer Tech List & Link */}
            <div className="px-5 pb-5 pt-2 border-t border-[#dee2de] flex items-center justify-between text-[11px] font-mono text-[#646464]">
              <div className="truncate max-w-[70%]">
                {item.technologies.slice(0, 3).join(' • ')}
              </div>
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#41a1cf] hover:underline flex items-center gap-1 font-medium"
                >
                  <span>Buka</span>
                  <span>↗</span>
                </a>
              ) : (
                <span className="text-[#b4b8b4]">Internal</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
