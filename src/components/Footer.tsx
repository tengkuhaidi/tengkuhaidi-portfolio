'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      {/* 
        Revealing Curtain Footer (1:1 with General Intelligence Company)
        The content sits on top with a bottom margin that equals the height of the fixed footer landscape image beneath it.
      */}
      <footer className="relative w-full bg-[#ffffff] dark:bg-[#141517] border-t border-[#dee2de] dark:border-[#24272b] z-10 mb-[380px] md:mb-[460px] xl:mb-[520px] transition-colors">
        <div className="w-full mx-auto max-w-[1240px] px-5 pt-20 pb-16">
          <div className="flex flex-col items-center text-center max-w-[640px] mx-auto">
            
            {/* Top Minimal Brand Mark */}
            <div className="mb-8">
              <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-[#dee2de] dark:border-neutral-700 flex items-center justify-center text-[#41a1cf]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <path d="M7 12h10" />
                  <path d="M12 7v10" />
                </svg>
              </div>
            </div>

            {/* Display Editorial Headline */}
            <h2 className="font-editorial text-[32px] sm:text-[40px] lg:text-[48px] text-[#2c2c2c] dark:text-white leading-[1.15] tracking-[-0.035em] mb-6">
              Engineering the foundation for autonomous, resilient enterprises.
            </h2>

            {/* Body Copy with Interactive Link */}
            <p className="text-[15px] text-[#444141] dark:text-[#d1d5db] font-sans leading-relaxed mb-8">
              If your company is ready to eliminate operational drag with autonomous AI workflows and custom software systems,{' '}
              <a
                href="https://wa.me/6281235247820"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#171717] dark:text-white font-medium border-b border-neutral-400 dark:border-neutral-500 hover:border-[#41a1cf] hover:text-[#41a1cf] transition-colors"
              >
                <span>start a conversation</span>
                <span className="text-[12px]">↗</span>
              </a>
            </p>

            {/* Direct Contact Button */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/6281235247820"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-[8px] bg-[#282834] dark:bg-[#ffffff] text-white dark:text-[#171717] text-[14px] font-sans font-medium hover:opacity-90 transition-opacity"
              >
                Contact Engineering Desk
              </a>
              <a
                href="mailto:info@digitasolusindo.com"
                className="px-6 py-2.5 rounded-[8px] border border-[#dee2de] dark:border-[#24272b] text-[#282834] dark:text-white text-[14px] font-sans font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
              >
                info@digitasolusindo.com
              </a>
            </div>
          </div>

          {/* Sub Navigation & Socials Bar */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 pt-16 mt-16 border-t border-[#dee2de] dark:border-[#24272b] text-[13px] text-[#646464] dark:text-[#a0a5ad] font-sans">
            <div className="flex flex-wrap items-center gap-6">
              <Link href="#ecosystem" className="hover:text-black dark:hover:text-white transition-colors">
                Ecosystem
              </Link>
              <Link href="#capabilities" className="hover:text-black dark:hover:text-white transition-colors">
                Capabilities
              </Link>
              <Link href="#portfolio" className="hover:text-black dark:hover:text-white transition-colors">
                Work &amp; Systems
              </Link>
              <Link href="#about" className="hover:text-black dark:hover:text-white transition-colors">
                About Company
              </Link>
              <a
                href="https://legalizin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#41a1cf] hover:underline"
              >
                Legalizin.com ↗
              </a>
            </div>

            <div className="flex items-center gap-4">
              <span>Jakarta Selatan, Indonesia</span>
              <span>•</span>
              <span>PT Digitas Solusi Indonesia</span>
            </div>
          </div>
        </div>

        {/* 3-Color Gradient Ribbons (Signature GIC motif) */}
        <div className="w-full">
          <div className="w-full h-[3px] bg-[#41a1cf]/30" />
          <div className="w-full h-[3px] bg-[#41a1cf]/60" />
          <div className="w-full h-[3px] bg-[#41a1cf]" />
        </div>
      </footer>

      {/* 
        Fixed Parallax Reveal Background (Behind the curtain)
        Fixed to the bottom of the viewport with z-[-1]. As the user scrolls past the footer content,
        this illustrated landscape is revealed with deep atmospheric parallax.
      */}
      <div className="fixed bottom-0 left-0 right-0 -z-10 h-[380px] md:h-[460px] xl:h-[520px] overflow-hidden pointer-events-none">
        
        {/* Subtle dark gradient overlay for typography readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-10" />

        {/* Parallax Landscape Illustration */}
        <div className="relative w-full h-full">
          <Image
            src="/images/footer-2.png"
            alt="Digitas Solusi Indonesia Landscape Horizon"
            fill
            className="object-cover object-top scale-105"
            priority
          />
        </div>

        {/* Floating Copyright & Trademark Bar inside the revealed window */}
        <div className="absolute bottom-0 left-0 right-0 z-20 max-w-[1240px] mx-auto px-5 pb-6 flex flex-col sm:flex-row items-center justify-between text-white/90 text-[13px] font-mono">
          <div>
            © {new Date().getFullYear()} PT Digitas Solusi Indonesia. All rights reserved.
          </div>
          <div className="text-white/60 text-[12px] mt-2 sm:mt-0">
            Jakarta Selatan • Applied AI &amp; Software Systems Holding
          </div>
        </div>
      </div>
    </>
  );
}
