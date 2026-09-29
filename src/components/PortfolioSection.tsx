'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { portfolioProjects, PortfolioProject } from '@/data/portfolio';
import { ExternalLink, Layers, CheckCircle2 } from 'lucide-react';

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'ecosystem' | 'system' | 'website'>('all');

  const filtered = activeTab === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-sky-400 bg-sky-950/40 border border-sky-800/60 mb-4">
              <Layers className="size-3.5" />
              <span>PORTOFOLIO &amp; KARYA REKAYASA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Sistem Nyata yang Sedang Beroperasi
            </h2>
            <p className="text-neutral-400 text-base leading-relaxed">
              Bukan prototipe di atas kertas. Jelajahi platform live, sistem ERP internal, dan aplikasi web yang telah dibangun dan dioperasikan oleh tim Digitas.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-neutral-900 border border-neutral-800 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-white text-neutral-950 shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Semua ({portfolioProjects.length})
            </button>
            <button
              onClick={() => setActiveTab('ecosystem')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'ecosystem'
                  ? 'bg-white text-neutral-950 shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Holding Venture
            </button>
            <button
              onClick={() => setActiveTab('system')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'system'
                  ? 'bg-white text-neutral-950 shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Sistem Kustom / ERP
            </button>
            <button
              onClick={() => setActiveTab('website')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'website'
                  ? 'bg-white text-neutral-950 shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Platform Web Korporat
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-neutral-900/30 border border-neutral-800/80 overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-all group"
            >
              <div>
                {/* Thumbnail */}
                <div className="aspect-[16/10] bg-neutral-950 relative overflow-hidden border-b border-neutral-800/60">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {item.metrics && (
                    <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-lg bg-neutral-950/85 backdrop-blur-md border border-neutral-800 text-[11px] font-mono font-medium text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="size-3.5 shrink-0" />
                      <span className="truncate">{item.metrics}</span>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-medium text-sky-400 uppercase tracking-wide">
                      {item.categoryLabel}
                    </span>
                    <span className="text-xs text-neutral-500 font-medium">
                      {item.industry}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-xs leading-relaxed mb-6 line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Technologies & Footer Action */}
              <div className="px-6 pb-6 pt-2 border-t border-neutral-800/40 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5 max-w-[75%]">
                  {item.technologies.slice(0, 3).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-950 border border-neutral-800 text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {item.technologies.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-neutral-500">
                      +{item.technologies.length - 3}
                    </span>
                  )}
                </div>

                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="size-8 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 flex items-center justify-center transition-all"
                    aria-label={`Buka website ${item.title}`}
                  >
                    <ExternalLink className="size-4" />
                  </a>
                ) : (
                  <span className="text-[10px] font-mono text-neutral-600">Internal</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
