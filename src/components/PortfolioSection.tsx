'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { portfolioProjects, categories, ProjectCategory } from '@/data/portfolio';

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects = activeCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-28 px-4 sm:px-6 max-w-[1240px] mx-auto border-t border-[#dee2de] dark:border-[#24272b]">
      {/* Section Header */}
      <div className="max-w-2xl mb-12">
        <div className="text-[13px] font-mono text-[#646464] dark:text-[#a0a5ad] mb-2 tracking-tight">
          03 / Selected Systems &amp; Production Architecture
        </div>
        <h2 className="text-3xl sm:text-4xl font-editorial text-[#2c2c2c] dark:text-white leading-tight mb-4">
          Proprietary platforms and custom enterprise systems in active production.
        </h2>
        <p className="text-[16px] text-[#444141] dark:text-[#d1d5db] leading-relaxed">
          A showcase of mission-critical software architectures engineered, deployed, and stewarded by our in-house engineering team.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-[13px] font-sans transition-all cursor-pointer ${
              activeCategory === cat
                ? 'bg-[#282834] text-white dark:bg-white dark:text-[#171717] font-medium shadow-sm'
                : 'bg-transparent text-[#444141] dark:text-[#d1d5db] border border-[#dee2de] dark:border-[#24272b] hover:border-neutral-400 dark:hover:border-neutral-600'
            }`}
          >
            {cat === 'All' ? 'All Systems' : cat}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group rounded-[18px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.6)] transition-all flex flex-col justify-between"
          >
            <div>
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] w-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden border-b border-[#dee2de] dark:border-[#24272b]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-[#ffffff]/90 dark:bg-[#141517]/90 backdrop-blur-sm border border-[#dee2de] dark:border-[#24272b] text-[#2c2c2c] dark:text-white">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="text-[12px] font-mono text-[#646464] dark:text-[#a0a5ad] mb-1">
                  {project.client} • {project.year}
                </div>
                <h3 className="text-xl font-editorial text-[#2c2c2c] dark:text-white mb-2 group-hover:text-[#41a1cf] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[14px] text-[#444141] dark:text-[#d1d5db] leading-relaxed font-sans line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Clean Card Footer */}
            <div className="p-6 pt-0 flex items-center justify-between">
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-medium text-[#41a1cf] hover:underline inline-flex items-center gap-1"
                >
                  <span>Launch Live Platform</span>
                  <span>↗</span>
                </a>
              ) : (
                <span className="text-[13px] font-mono text-[#646464] dark:text-[#a0a5ad]">
                  Internal Enterprise Deployment
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
