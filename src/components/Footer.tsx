'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WA_URL = "https://wa.me/6281235247820?text=Halo%20Digitas%2C%20saya%20ingin%20berdiskusi%20mengenai%20pengembangan%20software%20dan%20implementasi%20sistem%20otomasi%20untuk%20perusahaan.";

export default function Footer() {
  return (
    <>
      <footer className="relative w-full bg-[#ffffff] dark:bg-[#141517] border-t border-[#dee2de] dark:border-[#24272b] z-10 mb-[280px] sm:mb-[360px] md:mb-[460px] xl:mb-[500px] transition-colors">
        <div className="w-full mx-auto max-w-[1240px] px-4 sm:px-6 pt-16 sm:pt-20 pb-12 sm:pb-16">
          <div className="flex flex-col items-center text-center max-w-[640px] mx-auto">
            
            {/* Top Icon Box */}
            <div className="mb-6 sm:mb-8">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-[#dee2de] dark:border-neutral-700 flex items-center justify-center text-[#41a1cf]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <path d="M7 12h10" />
                  <path d="M12 7v10" />
                </svg>
              </div>
            </div>

            {/* Headline */}
            <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-[46px] text-[#2c2c2c] dark:text-white leading-[1.2] sm:leading-[1.15] tracking-tight mb-4">
              Building software systems that run themselves.
            </h2>

            {/* Subtext with SVG Arrow Link */}
            <p className="text-[14px] sm:text-[15px] text-[#444141] dark:text-[#d1d5db] font-sans leading-relaxed mb-8 max-w-[500px]">
              Ready to automate operations with custom software and autonomous agents?{' '}
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#171717] dark:text-white font-medium border-b border-neutral-400 dark:border-neutral-500 hover:border-[#41a1cf] hover:text-[#41a1cf] transition-colors whitespace-nowrap"
              >
                <span>Talk with us</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </p>

            {/* Action Buttons: Full-width stacked on mobile, inline on tablet/desktop */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-[380px] sm:max-w-none">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 sm:py-2.5 rounded-[10px] bg-[#282834] dark:bg-[#ffffff] text-white dark:text-[#171717] text-[14px] font-sans font-medium hover:opacity-90 active:scale-95 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Start Discussion</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                href="mailto:info@digitasolusindo.com"
                className="px-6 py-3 sm:py-2.5 rounded-[10px] border border-[#dee2de] dark:border-[#24272b] text-[#282834] dark:text-white text-[14px] font-sans font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 active:scale-95 transition-all text-center flex items-center justify-center gap-2"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>info@digitasolusindo.com</span>
              </a>
            </div>

          </div>

          {/* Links & Attribution */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 pt-12 sm:pt-16 mt-12 sm:mt-16 border-t border-[#dee2de] dark:border-[#24272b] text-[13px] text-[#646464] dark:text-[#a0a5ad] font-sans">
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
              <Link href="#ecosystem" className="hover:text-black dark:hover:text-white transition-colors">
                Ecosystem
              </Link>
              <Link href="#capabilities" className="hover:text-black dark:hover:text-white transition-colors">
                Capabilities
              </Link>
              <Link href="#portfolio" className="hover:text-black dark:hover:text-white transition-colors">
                Work
              </Link>
              <Link href="#about" className="hover:text-black dark:hover:text-white transition-colors">
                About
              </Link>
              <a
                href="https://legalizin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#41a1cf] hover:underline inline-flex items-center gap-1 font-medium"
              >
                <span>Legalizin.com</span>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>

            <div className="flex items-center gap-2 text-center">
              <span>PT Digitas Solusi Indonesia</span>
            </div>

          </div>
        </div>

        {/* 3-Stripes Signal Blue Ribbon */}
        <div className="w-full">
          <div className="w-full h-[2px] sm:h-[3px] bg-[#41a1cf]/30" />
          <div className="w-full h-[2px] sm:h-[3px] bg-[#41a1cf]/60" />
          <div className="w-full h-[2px] sm:h-[3px] bg-[#41a1cf]" />
        </div>
      </footer>

      {/* Fixed Parallax Curtain Reveal Background */}
      <div className="fixed bottom-0 left-0 right-0 -z-10 h-[280px] sm:h-[360px] md:h-[460px] xl:h-[500px] overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-10" />

        <div className="relative w-full h-full">
          <Image
            src="/images/footer-2.png"
            alt="Digitas Solusi Indonesia Landscape"
            fill
            className="object-cover object-top scale-105"
            priority
          />
        </div>

        {/* Bottom Floating Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 max-w-[1240px] mx-auto px-4 sm:px-6 pb-4 sm:pb-6 flex flex-col sm:flex-row items-center justify-between text-white/90 text-[11px] sm:text-[13px] font-mono gap-1 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} PT Digitas Solusi Indonesia
          </div>
          <div className="text-white/60 text-[11px] sm:text-[12px]">
            Autonomous Systems
          </div>
        </div>
      </div>
    </>
  );
}
