'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-between overflow-hidden bg-[#171717]">
      
      {/* 
        Full-Bleed Edge-to-Edge Parallax Canvas Background
      */}
      <div 
        className="absolute inset-0 w-full h-[125%] -top-[12%] pointer-events-none will-change-transform z-0"
        style={{
          transform: `translate3d(0, ${scrollY * 0.35}px, 0)`,
        }}
      >
        <Image
          src="/images/spring-hero.avif"
          alt="Digitas Solusi Indonesia Atmospheric Landscape"
          fill
          priority
          className="object-cover object-center w-full h-full"
        />
        {/* Soft gradient wash that lets the painting shine through */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent via-60% to-[var(--canvas-bg)] opacity-90 transition-colors" />
      </div>

      {/* Top Spacer for Floating Navbar */}
      <div className="pt-28 sm:pt-32" />

      {/* Center Floating Editorial Card */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-6 my-auto">
        <div className="max-w-[760px] p-6 sm:p-10 md:p-12 rounded-[20px] sm:rounded-[24px] bg-[#ffffff]/90 dark:bg-[#141517]/90 backdrop-blur-md border border-[#dee2de]/90 dark:border-[#24272b] shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all">
          
          {/* Eyebrow / Category */}
          <div className="flex items-center gap-2 text-[12px] sm:text-[13px] font-mono text-[#646464] dark:text-[#a0a5ad] mb-4 tracking-tight">
            <span>Jakarta Selatan, Indonesia</span>
            <span>•</span>
            <span className="text-[#41a1cf]">Venture Studio &amp; Engineering Holding</span>
          </div>

          {/* Display Headline in ppmondwest */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-editorial text-[#2c2c2c] dark:text-white leading-[1.08] tracking-[-0.035em] mb-6">
            We build and run autonomous software systems for businesses.
          </h1>

          {/* Lead Body in af / Inter */}
          <p className="text-[15px] sm:text-[17px] text-[#444141] dark:text-[#d1d5db] leading-[1.5] mb-8 font-sans">
            PT Digitas Solusi Indonesia is an applied software studio and technology holding. We originate proprietary platforms like{' '}
            <a
              href="https://legalizin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#41a1cf] hover:underline font-medium"
            >
              Legalizin.com
            </a>
            , engineer autonomous multi-agent workflows, and build mission-critical enterprise systems that eliminate human operational friction.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="#capabilities"
              className="px-5 py-2.5 rounded-[8px] border border-[#41a1cf] text-[#41a1cf] dark:text-[#52b4e5] text-[14px] font-sans font-medium hover:bg-[#41a1cf] hover:text-white transition-all flex items-center gap-2"
            >
              <span>Explore Capabilities</span>
              <span>→</span>
            </Link>
            <Link
              href="#portfolio"
              className="px-5 py-2.5 rounded-[8px] border border-[#dee2de] dark:border-[#24272b] text-[#282834] dark:text-white text-[14px] font-sans font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              Selected Systems
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Horizon Indicator */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-6 pb-8 pt-12 flex items-center justify-between text-[12px] font-mono text-white/90">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#41a1cf] animate-pulse" />
          <span>Autonomous Systems: Online</span>
        </div>
        <span className="hidden sm:inline text-white/70">Scroll to read the blueprint ↓</span>
      </div>

    </section>
  );
}
