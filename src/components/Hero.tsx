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
          alt="Engineering Landscape"
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
            I build software systems and run search growth for companies.
          </h1>

          <p className="text-[15px] sm:text-[17px] text-[#374151] dark:text-[#c9ccd1] leading-relaxed mb-8 font-sans">
            Independent contractor handling end-to-end delivery: Next.js web applications, Linux server infrastructure, custom ERP tools, and programmatic SEO pipelines that bring in paying customers.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#case-study"
              className="px-5 py-2.5 rounded-[8px] bg-[#171717] dark:bg-white text-white dark:text-[#171717] text-[14px] font-sans font-medium hover:opacity-90 transition-all flex items-center gap-2 active:scale-95"
            >
              <span>View Case Study</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="#portfolio"
              className="px-5 py-2.5 rounded-[8px] border border-[#dee2de] dark:border-[#24272b] text-[#171717] dark:text-white text-[14px] font-sans font-medium hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              Shipped Projects
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-4 sm:px-6 pb-6 pt-4 flex items-center justify-between text-[12px] font-mono text-white/90">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#3fb950]" />
          <span>Open for client projects &amp; technical contracts</span>
        </div>
        <span className="text-white/70">Scroll ↓</span>
      </div>

    </section>
  );
}
