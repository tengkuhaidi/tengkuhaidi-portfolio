'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { portfolioProjects } from '@/data/portfolio';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

export default function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? portfolioProjects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === portfolioProjects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = portfolioProjects[currentIndex];

  return (
    <section id="portfolio" className="py-20 md:py-28 px-4 sm:px-6 max-w-[1240px] mx-auto border-t border-[#dee2de] dark:border-[#24272b] transition-colors">
      
      {/* Top Header Row (Portfolio 12 Layout: Category Pill, Big Title with Underline, Summary & Actions) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <p className="text-[13px] font-mono text-[#41a1cf] tracking-wider uppercase mb-2">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial text-[#2c2c2c] dark:text-white leading-[1.1] tracking-[-0.035em]">
            Transforming systems into{' '}
            <span className="relative inline-block text-[#41a1cf]">
              impact
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#41a1cf]" aria-hidden="true" />
            </span>
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#444141] dark:text-[#d1d5db] font-sans leading-relaxed mt-3">
            Proprietary platforms, automated multi-agent architectures, and mission-critical enterprise systems in active production.
          </p>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={prevSlide}
            aria-label="Previous Project"
            className="w-11 h-11 rounded-full border border-[#dee2de] dark:border-[#24272b] bg-[#ffffff] dark:bg-[#141517] text-[#2c2c2c] dark:text-white flex items-center justify-center hover:border-[#41a1cf] hover:text-[#41a1cf] transition-all cursor-pointer shadow-sm"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Project"
            className="w-11 h-11 rounded-full border border-[#dee2de] dark:border-[#24272b] bg-[#ffffff] dark:bg-[#141517] text-[#2c2c2c] dark:text-white flex items-center justify-center hover:border-[#41a1cf] hover:text-[#41a1cf] transition-all cursor-pointer shadow-sm"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Focus Showcase Card (Shadcn Portfolio-12 Active Item) */}
      <div className="relative rounded-[24px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b] p-6 sm:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all overflow-hidden mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Center Featured Image */}
          <div className="lg:col-span-7 relative aspect-[16/10] w-full rounded-[16px] overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-[#dee2de] dark:border-[#24272b]">
            <Image
              src={currentProject.image}
              alt={currentProject.title}
              fill
              priority
              className="object-cover object-top transition-transform duration-700 ease-out"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-[12px] font-mono bg-[#ffffff]/90 dark:bg-[#141517]/90 backdrop-blur-md border border-[#dee2de] dark:border-[#24272b] text-[#2c2c2c] dark:text-white">
                {currentProject.category}
              </span>
            </div>
          </div>

          {/* Right Narrative Information */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="text-[13px] font-mono text-[#646464] dark:text-[#a0a5ad] mb-2">
                {currentProject.client} • {currentProject.year}
              </div>
              <h3 className="text-2xl sm:text-3xl font-editorial text-[#2c2c2c] dark:text-white leading-tight mb-4">
                {currentProject.title}
              </h3>
              <p className="text-[15px] sm:text-[16px] text-[#444141] dark:text-[#d1d5db] font-sans leading-relaxed">
                {currentProject.description}
              </p>
            </div>

            <div className="pt-6 border-t border-[#dee2de] dark:border-[#24272b] flex items-center justify-between">
              {currentProject.url ? (
                <a
                  href={currentProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-[8px] border border-[#41a1cf] text-[#41a1cf] dark:text-[#52b4e5] text-[14px] font-sans font-medium hover:bg-[#41a1cf] hover:text-white transition-all inline-flex items-center gap-2"
                >
                  <span>Launch Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-[13px] font-mono text-[#646464] dark:text-[#a0a5ad]">
                  Internal Enterprise Deployment
                </span>
              )}

              <span className="text-[13px] font-mono text-[#646464] dark:text-[#a0a5ad]">
                {currentIndex + 1} of {portfolioProjects.length}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Thumbnail Navigation Strip (Portfolio 12 Carousel Items Preview) */}
      <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 gap-3">
        {portfolioProjects.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => setCurrentIndex(idx)}
            className={`relative aspect-[16/10] rounded-[10px] overflow-hidden border transition-all cursor-pointer ${
              idx === currentIndex
                ? 'border-[#41a1cf] ring-2 ring-[#41a1cf]/30 scale-105 z-10'
                : 'border-[#dee2de] dark:border-[#24272b] opacity-60 hover:opacity-100 hover:border-neutral-400 dark:hover:border-neutral-600'
            }`}
          >
            <Image
              src={p.image}
              alt={p.title}
              fill
              className="object-cover object-top"
            />
          </button>
        ))}
      </div>

      {/* Pagination Dot Indicators */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {portfolioProjects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              idx === currentIndex
                ? 'w-8 bg-[#41a1cf]'
                : 'w-2 bg-[#dee2de] dark:bg-neutral-800 hover:bg-[#b4b8b4]'
            }`}
          />
        ))}
      </div>

    </section>
  );
}
