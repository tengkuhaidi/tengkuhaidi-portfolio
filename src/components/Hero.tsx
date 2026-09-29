import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-[96vh] min-h-[680px] max-h-[920px] flex flex-col justify-end p-3 sm:p-6 md:p-8 mb-16">
      {/* Edge-to-Edge Atmospheric Background Illustration with 24px radius */}
      <div className="absolute inset-2 sm:inset-3 md:inset-4 rounded-[24px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.12)] bg-[#1f2937]">
        <Image
          src="/spring-hero.avif"
          alt="Spring Landscape Atmosphere"
          fill
          priority
          className="object-cover object-center brightness-[0.92] dark:brightness-[0.75]"
          sizes="100vw"
        />
        {/* Soft Vignette / Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30 dark:from-black/80 dark:via-black/30 dark:to-black/40" />
      </div>

      {/* Frosted Glassmorphic Overlay Card at Bottom-Left */}
      <div className="relative z-10 max-w-2xl bg-white/85 dark:bg-[#141517]/85 backdrop-blur-xl border border-white/60 dark:border-neutral-700/60 rounded-[24px] p-6 sm:p-10 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.6)] m-2 sm:m-4 md:m-6">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2 mb-4 text-[12px] font-mono tracking-tight text-[#444141] dark:text-[#858c96]">
          <span className="font-semibold text-[#171717] dark:text-[#f3f4f6]">PT Digitas Solusi Indonesia</span>
          <span className="text-[#b4b8b4] dark:text-[#858c96]">—</span>
          <span>Holding &amp; Studio Rekayasa</span>
        </div>

        {/* Display Headline in ppmondwest */}
        <h1 className="text-3xl sm:text-4xl md:text-[46px] lg:text-[50px] font-editorial text-[#171717] dark:text-white leading-[1.1] tracking-[-0.04em] mb-5">
          Membangun perangkat lunak yang menggerakkan bisnis nyata.
        </h1>

        {/* Body Description */}
        <p className="text-[15px] sm:text-[16px] text-[#444141] dark:text-[#c9ccd1] leading-[1.55] mb-8 font-sans">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[8px] border border-[#282834] dark:border-neutral-600 text-[15px] font-medium text-[#282834] dark:text-neutral-200 hover:bg-white/80 dark:hover:bg-neutral-800 transition-all bg-white/30 dark:bg-neutral-900/30"
          >
            <span>Lihat Karya Sistem</span>
          </a>
        </div>
      </div>
    </section>
  );
}
