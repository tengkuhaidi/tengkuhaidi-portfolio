'use client';

import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-between overflow-hidden bg-[#171717]">
      
      {/* Static Background with Natural Gradient Falloff */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <img
          src="/images/spring-hero.avif"
          alt="Landscape"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 via-55% to-[var(--canvas-bg)] opacity-95 transition-colors" />
      </div>

      {/* Top Spacer */}
      <div className="pt-24 sm:pt-36" />

      {/* Floating Card */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-6 my-auto">
        <div className="max-w-[680px] p-6 sm:p-10 rounded-[20px] sm:rounded-[24px] bg-[#ffffff]/95 dark:bg-[#141517]/95 backdrop-blur-md border border-[#dee2de] dark:border-[#24272b] shadow-[0_12px_40px_rgba(0,0,0,0.18)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)] transition-all">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#41a1cf]/10 border border-[#41a1cf]/30 text-[12px] font-mono text-[#006699] dark:text-[#41a1cf] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf]" />
            <span>Tengku Hidayat Haidi — Jakarta, ID</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-editorial text-[#171717] dark:text-white leading-[1.1] tracking-[-0.03em] mb-4">
            Helping companies modernize their tech and grow customer acquisition.
          </h1>

          <p className="text-[15px] sm:text-[17px] text-[#374151] dark:text-[#c9ccd1] leading-relaxed mb-8 font-sans">
            Independent technology consultant for growing businesses: building modern digital platforms, setting up secure cloud infrastructure, and running organic and paid digital marketing that brings in real revenue.
          </p>

          <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:items-center sm:gap-3">
            <Link
              href="#case-study"
              className="w-full sm:w-auto px-3.5 sm:px-5 py-2.5 rounded-[8px] bg-[#171717] dark:bg-white text-white dark:text-[#171717] text-[13px] sm:text-[14px] font-sans font-medium hover:opacity-90 transition-all flex items-center justify-center gap-1.5 sm:gap-2 active:scale-95 text-center whitespace-nowrap"
            >
              <span>Case Study</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="#portfolio"
              className="w-full sm:w-auto px-3.5 sm:px-5 py-2.5 rounded-[8px] border border-[#dee2de] dark:border-[#24272b] text-[#171717] dark:text-white text-[13px] sm:text-[14px] font-sans font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-center flex items-center justify-center whitespace-nowrap"
            >
              <span>Projects</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-6 pb-6 pt-4 flex items-center justify-between text-[12px] font-mono text-white/90">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#3fb950]" />
          <span>Available for Technology Consulting &amp; Advisory</span>
        </div>
        <span className="text-white/70">Scroll ↓</span>
      </div>

    </section>
  );
}
