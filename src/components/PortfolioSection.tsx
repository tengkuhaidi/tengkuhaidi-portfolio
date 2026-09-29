'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { portfolioProjects } from '@/data/portfolio';

export default function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? portfolioProjects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === portfolioProjects.length - 1 ? 0 : prev + 1));
  };

  const activeProject = portfolioProjects[currentIndex];

  return (
    <section id="portfolio" className="relative w-full py-20 lg:py-28 overflow-hidden border-t border-[#dee2de] dark:border-[#24272b] transition-colors">
      
      {/* 1:1 Shadcn Portfolio-12 Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <p className="text-[#41a1cf] text-sm font-medium tracking-wider uppercase font-mono">
            Our portfolio
          </p>

          <h2 className="relative inline-block text-3xl sm:text-4xl lg:text-5xl font-editorial text-[#2c2c2c] dark:text-white leading-tight tracking-[-0.03em]">
            Transforming{' '}
            <span className="relative inline-block">
              Ideas
              <span className="absolute bottom-1 left-0 -z-1 h-1 w-full rounded-full bg-gradient-to-r from-[#41a1cf] to-transparent" aria-hidden="true" />
            </span>{' '}
            into Impact
          </h2>

          <p className="text-[#444141] dark:text-[#d1d5db] text-base sm:text-lg leading-relaxed font-sans">
            Step into our portfolio and discover how we build scalable software systems and automated operations for modern businesses.
          </p>
        </div>
      </div>

      {/* 1:1 Carousel Track (Zero Absolute Overlap: Image on top, Caption naturally flowing below) */}
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3D Sliding Strip */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 py-2">
          {[-1, 0, 1].map((offset) => {
            const projectIdx = (currentIndex + offset + portfolioProjects.length) % portfolioProjects.length;
            const project = portfolioProjects[projectIdx];
            const isCenter = offset === 0;

            return (
              <div
                key={project.id + offset}
                onClick={() => {
                  if (offset === -1) prevSlide();
                  if (offset === 1) nextSlide();
                }}
                className={`relative shrink-0 cursor-pointer transition-all duration-500 ease-out select-none ${
                  isCenter
                    ? 'w-[90vw] max-w-[620px] sm:max-w-[700px] z-20 scale-100 opacity-100'
                    : 'hidden sm:block w-[35vw] max-w-[320px] z-10 scale-90 opacity-35 hover:opacity-70'
                }`}
              >
                {/* Image Card (Zero Badges) */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.6)] border border-[#dee2de] dark:border-[#24272b]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={isCenter}
                    className="object-cover object-top"
                  />
                  {!isCenter && (
                    <div className="absolute inset-0 bg-black/25 hover:bg-black/10 transition-colors" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Dedicated Caption Block Below Center Card (Clean spacing, zero overlap) */}
        <div className="mt-8 text-center space-y-2 max-w-xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-editorial font-semibold text-[#2c2c2c] dark:text-white">
            {activeProject.title}
          </h3>
          <p className="text-sm sm:text-base text-[#444141] dark:text-[#d1d5db] leading-relaxed font-sans">
            {activeProject.description}
          </p>
          {activeProject.url && (
            <div className="pt-2">
              <a
                href={activeProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#41a1cf] hover:underline inline-flex items-center gap-1.5 font-medium"
              >
                <span>Launch Platform</span>
                <span className="text-xs">↗</span>
              </a>
            </div>
          )}
        </div>

        {/* 1:1 Shadcn Portfolio-12 Pagination Dots */}
        <div className="mt-8 flex justify-center items-center space-x-2">
          {portfolioProjects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to project ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? 'w-7 bg-[#41a1cf]'
                  : 'w-2.5 bg-[#dee2de] dark:bg-neutral-800 hover:bg-[#b4b8b4] dark:hover:bg-neutral-700'
              }`}
            />
          ))}
        </div>

        {/* 1:1 Shadcn Portfolio-12 Counter ("1 of 9") */}
        <div className="mt-4 text-center">
          <span className="text-xs sm:text-sm font-mono text-[#646464] dark:text-[#a0a5ad]">
            {currentIndex + 1} of {portfolioProjects.length}
          </span>
        </div>

      </div>

    </section>
  );
}
