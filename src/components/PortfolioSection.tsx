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

  return (
    <section id="portfolio" className="relative w-full py-20 lg:py-28 overflow-hidden border-t border-[#dee2de] dark:border-[#24272b] transition-colors">
      
      {/* 1:1 Shadcn Portfolio-12 Header: Center-aligned, uppercase tracker, Underlined keyword, clean button */}
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

          <div className="pt-2">
            <a
              href="https://wa.me/6281235247820"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-[#282834] dark:bg-white text-white dark:text-[#171717] text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Start Discussion
            </a>
          </div>
        </div>
      </div>

      {/* 1:1 Shadcn Portfolio-12 3D Horizontal Carousel Track */}
      <div className="relative w-full">
        <div className="w-full overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 sm:gap-6 py-4">
            
            {/* Show surrounding slides around currentIndex */}
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
                      ? 'w-[85vw] max-w-[560px] sm:max-w-[640px] z-20 scale-100 opacity-100'
                      : 'hidden sm:block w-[40vw] max-w-[340px] z-10 scale-90 opacity-40 hover:opacity-75 blur-[0.5px]'
                  }`}
                >
                  {/* Card with image and caption underneath */}
                  <div className="relative pb-28 sm:pb-24">
                    
                    {/* Clean Rounded Image (Zero Badges) */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800 shadow-[0_4px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.6)] border border-[#dee2de] dark:border-[#24272b]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        priority={isCenter}
                        className="object-cover object-top"
                      />
                      {!isCenter && (
                        <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors" />
                      )}
                    </div>

                    {/* Clean Centered Text Caption underneath the active item (1:1 with Portfolio-12) */}
                    {isCenter && (
                      <div className="absolute bottom-0 left-0 w-full space-y-1.5 text-center px-4 pt-4">
                        <h3 className="text-xl sm:text-2xl font-editorial font-semibold text-[#2c2c2c] dark:text-white">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#646464] dark:text-[#a0a5ad] max-w-md mx-auto leading-relaxed font-sans line-clamp-2">
                          {project.description}
                        </p>
                        {project.url && (
                          <div className="pt-1">
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-[#41a1cf] hover:underline inline-flex items-center gap-1 font-medium"
                            >
                              <span>Launch Platform</span>
                              <span>↗</span>
                            </a>
                          </div>
                        )}
                      </div>
                    )}

                  </div>
                </div>
              );
            })}

          </div>
        </div>

        {/* 1:1 Shadcn Portfolio-12 Pagination Dots */}
        <div className="mt-8 flex justify-center space-x-2">
          {portfolioProjects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to project ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? 'w-6 bg-[#41a1cf] scale-110'
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
