'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-end p-4 sm:p-8 md:p-14 mb-16 overflow-hidden">
      {/* 100% Full-Bleed Parallax Background */}
      <div
        className="absolute inset-0 w-full h-[120%] -top-[10%] bg-[#1f2937] pointer-events-none will-change-transform transition-transform duration-75 ease-out"
        style={{ transform: `translate3d(0, ${offsetY * 0.35}px, 0)` }}
      >
        <Image
          src="/spring-hero.avif"
          alt="Spring Landscape Atmosphere"
          fill
          priority
          className="object-cover object-center brightness-[0.94] dark:brightness-[0.72]"
          sizes="100vw"
        />
        {/* Soft Vignette / Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/30 dark:from-[#0c0d0e] dark:via-black/40 dark:to-black/60" />
      </div>

      {/* Frosted Glassmorphic Overlay Card at Bottom-Left */}
      <div className="relative z-10 max-w-2xl bg-white/85 dark:bg-[#141517]/90 backdrop-blur-xl border border-white/60 dark:border-neutral-700/70 rounded-[24px] p-6 sm:p-10 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.7)]">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2 mb-4 text-[12px] font-mono tracking-tight text-[#444141] dark:text-[#a0a5ad]">
          <span className="font-semibold text-[#171717] dark:text-white">PT Digitas Solusi Indonesia</span>
          <span className="text-[#b4b8b4] dark:text-[#646464]">—</span>
          <span>Holding &amp; Studio Rekayasa</span>
        </div>

        {/* Display Headline in ppmondwest */}
        <h1 className="text-3xl sm:text-4xl md:text-[46px] lg:text-[50px] font-editorial text-[#171717] dark:text-white leading-[1.1] tracking-[-0.04em] mb-5">
          Membangun perangkat lunak yang menggerakkan bisnis nyata.
        </h1>

        {/* Body Description */}
        <p className="text-[15px] sm:text-[16px] text-[#444141] dark:text-[#e2e4e9] leading-[1.55] mb-8 font-sans">
          Studio rekayasa sistem di Jakarta Selatan dan penaung platform <a href="https://legalizin.com" target="_blank" rel="noopener noreferrer" className="underline decoration-[#41a1cf] underline-offset-4 text-[#171717] dark:text-white hover:text-[#41a1cf] font-medium">Legalizin.com</a>. Kami merancang arsitektur web modern, otomasi proses, dan sistem operasional bisnis yang tangguh.
        </p>

        {/* Outlined Action Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://wa.me/6281235247820"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[8px] border border-[#41a1cf] text-[15px] font-medium text-[#41a1cf] hover:bg-[#41a1cf]/10 transition-all group bg-white/50 dark:bg-neutral-900/50"
          >
            <span>Mulai Konsultasi</span>
            <span className="inline-flex items-center justify-center size-4 rounded-full border border-[#41a1cf]/60 text-[10px] group-hover:translate-x-0.5 transition-transform">
              →
            </span>
          </a>

          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[8px] border border-[#282834] dark:border-neutral-500 text-[15px] font-medium text-[#282834] dark:text-white hover:bg-white/80 dark:hover:bg-neutral-800 transition-all bg-white/30 dark:bg-neutral-900/30"
          >
            <span>Lihat Karya Sistem</span>
          </a>
        </div>
      </div>
    </section>
  );
}
