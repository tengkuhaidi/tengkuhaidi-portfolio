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
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#171717]">
      
      {/* Full-Bleed Parallax Background */}
      <div 
        className="absolute inset-0 w-full h-[125%] -top-[12%] pointer-events-none will-change-transform z-0"
        style={{
          transform: `translate3d(0, ${scrollY * 0.35}px, 0)`,
        }}
      >
        <Image
          src="/images/spring-hero.avif"
          alt="Digitas Solusi Indonesia Landscape"
          fill
          priority
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent via-60% to-[var(--canvas-bg)] opacity-95 transition-colors" />
      </div>

      {/* Top Spacer */}
      <div className="pt-20 sm:pt-32" />

      {/* Mobile Top Header (1:1 General Intelligence Company skyline headline) */}
      <div className="relative z-10 w-full px-6 flex flex-col items-center text-center md:hidden my-auto pt-4 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white/90 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf] animate-pulse" />
          <span>Autonomous Systems Active</span>
        </div>
        <h1 className="text-3xl font-editorial text-white leading-[1.15] tracking-tight max-w-[18ch] drop-shadow-md">
          Software systems that run your business.
        </h1>
      </div>

      {/* Floating Card: Desktop (Left aligned) & Mobile (Frosted Glass Bottom Card) */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-6 mb-4 sm:my-auto">
        <div className="max-w-[700px] p-5 sm:p-10 rounded-[20px] sm:rounded-[24px] bg-black/40 md:bg-[#ffffff]/90 dark:md:bg-[#141517]/90 backdrop-blur-[16px] md:backdrop-blur-md border border-white/20 md:border-[#dee2de]/90 dark:md:border-[#24272b] shadow-[0_8px_32px_rgba(0,0,0,0.25)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all">
          
          <h2 className="hidden md:block text-3xl sm:text-5xl md:text-6xl font-editorial text-[#2c2c2c] dark:text-white leading-[1.08] tracking-[-0.035em] mb-5">
            Software systems that run your business.
          </h2>

          <h2 className="block md:hidden text-xl font-editorial text-white leading-tight mb-2.5">
            Autonomous software for modern enterprises.
          </h2>

          <p className="text-[14px] sm:text-[17px] text-white/90 md:text-[#444141] dark:md:text-[#d1d5db] leading-[1.5] mb-6 sm:mb-8 font-sans">
            We build platforms like{' '}
            <a
              href="https://legalizin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#41a1cf] hover:underline font-medium"
            >
              Legalizin.com
            </a>
            , autonomous multi-agent workflows, and internal software systems that remove operational friction.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#capabilities"
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-[8px] bg-[#41a1cf] md:bg-transparent border border-[#41a1cf] text-white md:text-[#41a1cf] dark:md:text-[#52b4e5] text-[13px] sm:text-[14px] font-sans font-medium hover:bg-[#41a1cf] hover:text-white transition-all flex items-center gap-2"
            >
              <span>Explore Capabilities</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="#portfolio"
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-[8px] border border-white/30 md:border-[#dee2de] dark:md:border-[#24272b] text-white md:text-[#282834] dark:md:text-white text-[13px] sm:text-[14px] font-sans font-medium hover:bg-white/10 dark:hover:bg-neutral-800 transition-colors"
            >
              Selected Systems
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Indicator */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-6 pb-6 pt-2 flex items-center justify-between text-[12px] font-mono text-white/80">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#41a1cf] animate-pulse" />
          <span>Status: Online</span>
        </div>
        <span className="text-white/70">Scroll ↓</span>
      </div>

    </section>
  );
}
