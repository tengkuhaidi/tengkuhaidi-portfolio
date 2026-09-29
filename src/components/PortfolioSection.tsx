'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { portfolioProjects } from '@/data/portfolio';

export default function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 40;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? portfolioProjects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === portfolioProjects.length - 1 ? 0 : prev + 1));
  };

  // Mobile touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > minSwipeDistance) {
      // Swiped Left -> show Next project
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      // Swiped Right -> show Previous project
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const activeProject = portfolioProjects[currentIndex];

  return (
    <section id="portfolio" className="relative w-full py-20 lg:py-28 overflow-hidden border-t border-[#dee2de] dark:border-[#24272b] transition-colors">
      
      {/* 1:1 Shadcn Portfolio-12 Header with Navigation Arrows */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-5xl mx-auto">
          
          <div className="space-y-3 text-center md:text-left max-w-2xl">
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

            <p className="text-[#444141] dark:text-[#d1d5db] text-sm sm:text-base leading-relaxed font-sans">
              Step into our portfolio and discover how we build scalable software systems and automated operations for modern businesses.
            </p>
          </div>

          {/* Desktop & Tablet Carousel Arrows */}
          <div className="hidden sm:flex items-center justify-center md:justify-end gap-2 pb-1">
            <button
              onClick={prevSlide}
              aria-label="Previous project"
              className="w-10 h-10 rounded-full border border-[#dee2de] dark:border-[#24272b] bg-white dark:bg-[#141517] flex items-center justify-center text-[#2c2c2c] dark:text-white hover:border-[#41a1cf] hover:text-[#41a1cf] active:scale-95 transition-all shadow-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next project"
              className="w-10 h-10 rounded-full border border-[#dee2de] dark:border-[#24272b] bg-white dark:bg-[#141517] flex items-center justify-center text-[#2c2c2c] dark:text-white hover:border-[#41a1cf] hover:text-[#41a1cf] active:scale-95 transition-all shadow-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Interactive Carousel Track with Mobile Swipe Support */}
      <div 
        className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        
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

        {/* Mobile Swipe Hint and Arrow Controls */}
        <div className="flex sm:hidden items-center justify-between px-2 pt-3">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="w-8 h-8 rounded-full border border-[#dee2de] dark:border-[#24272b] bg-white/70 dark:bg-[#141517]/70 backdrop-blur-sm flex items-center justify-center text-[#2c2c2c] dark:text-white active:scale-90 transition-all"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          
          <span className="text-[11px] font-mono text-[#646464] dark:text-[#a0a5ad] flex items-center gap-1">
            <span>Swipe or click arrows</span>
          </span>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="w-8 h-8 rounded-full border border-[#dee2de] dark:border-[#24272b] bg-white/70 dark:bg-[#141517]/70 backdrop-blur-sm flex items-center justify-center text-[#2c2c2c] dark:text-white active:scale-90 transition-all"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Dedicated Caption Block Below Center Card (Clean spacing, zero overlap) */}
        <div className="mt-6 sm:mt-8 text-center space-y-2 max-w-xl mx-auto px-4">
          <div className="text-[12px] font-mono text-[#41a1cf]">
            {activeProject.client} • {activeProject.year}
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-editorial font-semibold text-[#2c2c2c] dark:text-white leading-tight">
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
                className="text-sm text-[#41a1cf] hover:underline inline-flex items-center gap-1 font-medium"
              >
                <span>Launch Platform</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          )}
        </div>

        {/* 1:1 Shadcn Portfolio-12 Pagination Dots (Responsive wrap/scroll) */}
        <div className="mt-8 flex justify-center items-center flex-wrap gap-1.5 sm:gap-2 max-w-xs sm:max-w-none mx-auto px-2">
          {portfolioProjects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to project ${idx + 1}`}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? 'w-6 sm:w-8 bg-[#41a1cf]'
                  : 'w-2 sm:w-2.5 bg-[#dee2de] dark:bg-neutral-800 hover:bg-[#b4b8b4] dark:hover:bg-neutral-700'
              }`}
            />
          ))}
        </div>

        {/* 1:1 Shadcn Portfolio-12 Counter ("1 of 13") */}
        <div className="mt-4 text-center">
          <span className="text-xs sm:text-sm font-mono text-[#646464] dark:text-[#a0a5ad]">
            {currentIndex + 1} of {portfolioProjects.length}
          </span>
        </div>

      </div>

    </section>
  );
}
