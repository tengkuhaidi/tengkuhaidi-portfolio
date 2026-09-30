'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WA_URL = "https://wa.me/6287825174624?text=Halo%20Tengku%2C%20saya%20ingin%20berdiskusi%20mengenai%20kebutuhan%20teknologi%2C%20sistem%20software%2C%20dan%20growth%20digital%20untuk%20perusahaan.";

export default function Footer() {
  return (
    <>
      <footer className="relative w-full bg-[#ffffff] dark:bg-[#141517] border-t border-[#dee2de] dark:border-[#24272b] z-10 mb-[280px] sm:mb-[360px] md:mb-[460px] xl:mb-[500px] transition-colors">
        <div className="w-full mx-auto max-w-[1240px] px-4 sm:px-6 pt-16 sm:pt-20 pb-12 sm:pb-16">
          <div className="flex flex-col items-center text-center max-w-[640px] mx-auto">
            
            {/* Headline */}
            <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-[#171717] dark:text-white leading-[1.18] tracking-tight mb-4">
              Need technical systems that actually run your business?
            </h2>

            {/* Subtext */}
            <p className="text-[14px] sm:text-[16px] text-[#4b5563] dark:text-[#9ca3af] font-sans leading-relaxed mb-8 max-w-[500px]">
              Whether you need to build a custom web portal, automate operations with AI, or set up organic search lead pipelines, let&apos;s talk directly.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full max-w-[380px] sm:max-w-none">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 sm:py-2.5 rounded-[10px] bg-[#171717] dark:bg-[#ffffff] text-white dark:text-[#171717] text-[14px] font-sans font-medium hover:opacity-90 active:scale-95 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>WhatsApp: 0878-2517-4624</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                href="mailto:tengkuhaidi@gmail.com"
                className="px-6 py-3 sm:py-2.5 rounded-[10px] border border-[#dee2de] dark:border-[#24272b] text-[#171717] dark:text-white text-[14px] font-sans font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 active:scale-95 transition-all text-center flex items-center justify-center gap-2"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>tengkuhaidi@gmail.com</span>
              </a>
              <a
                href="https://github.com/tengkuhaidi"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 sm:py-2.5 rounded-[10px] border border-[#dee2de] dark:border-[#24272b] text-[#171717] dark:text-white text-[14px] font-sans font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 active:scale-95 transition-all text-center flex items-center justify-center gap-2"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Links & Attribution */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 pt-12 sm:pt-16 mt-12 sm:mt-16 border-t border-[#dee2de] dark:border-[#24272b] text-[13px] text-[#646464] dark:text-[#a0a5ad] font-sans">
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
              <Link href="#case-study" className="hover:text-black dark:hover:text-white transition-colors">
                Case Study
              </Link>
              <Link href="#capabilities" className="hover:text-black dark:hover:text-white transition-colors">
                Roadmap
              </Link>
              <Link href="#services" className="hover:text-black dark:hover:text-white transition-colors">
                Services
              </Link>
              <Link href="#portfolio" className="hover:text-black dark:hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="#about" className="hover:text-black dark:hover:text-white transition-colors">
                About
              </Link>
            </div>

            <div className="flex items-center gap-2 text-center">
              <span>Tengku Hidayat Haidi — Software Systems &amp; Growth Consultant</span>
            </div>

          </div>
        </div>

        {/* 3-Stripes Signal Ribbon */}
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
            alt="Engineering Landscape"
            fill
            className="object-cover object-top scale-105"
            priority
          />
        </div>

        {/* Bottom Floating Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 max-w-[1240px] mx-auto px-4 sm:px-6 pb-4 sm:pb-6 flex flex-col sm:flex-row items-center justify-between text-white/90 text-[11px] sm:text-[13px] font-mono gap-1 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Tengku Hidayat Haidi — Jakarta, Indonesia
          </div>
          <div className="text-white/60 text-[11px] sm:text-[12px]">
            Systems Architecture &amp; Growth Consulting
          </div>
        </div>
      </div>
    </>
  );
}
