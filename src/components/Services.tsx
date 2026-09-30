'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import TextReveal, { RevealBlock } from './TextReveal';

const capabilities = [
  {
    num: '01',
    title: 'Web Platform & Portal Engineering',
    desc: 'High-speed Next.js web applications, client dashboards, and secure API backends. Built with TypeScript and Tailwind, optimized for sub-second page loads and zero server crashes.'
  },
  {
    num: '02',
    title: 'Programmatic SEO & Organic Lead Acquisition',
    desc: 'Automated search publishing engines hooked directly to Google Indexing API. Targeting hundreds of high-intent commercial keywords that drive daily inquiries without burning ad budget.'
  },
  {
    num: '03',
    title: 'Linux Infrastructure & DevOps',
    desc: 'Dockerized microservices, Nginx reverse proxies, automated SSL certificates, and CI/CD pipelines on bare-metal or cloud servers. Kept secure, backed up, and monitored.'
  },
  {
    num: '04',
    title: 'Custom ERP, AI Agents & Internal Tools',
    desc: 'Replacing clunky spreadsheets with tailored operational software: automated WhatsApp CS bots, document parsing engines, physical visitor logs (VMS), and accounting trackers.'
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ticking = false;

    const updateParallax = () => {
      if (sectionRef.current && bgRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.bottom > -250 && rect.top < window.innerHeight + 250) {
          const offset = (window.innerHeight - rect.top) * 0.14;
          bgRef.current.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
        }
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateParallax();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 px-4 sm:px-6 overflow-hidden border-t border-[#dee2de] dark:border-[#24272b] transition-colors"
    >
      {/* Parallax Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-[135%] -top-[18%] pointer-events-none will-change-transform z-0"
        style={{
          transform: 'translate3d(0, 0px, 0)',
        }}
      >
        <Image
          src="/images/services-sunflower-pixel.webp"
          alt="Engineering Landscape"
          fill
          priority={false}
          className="object-cover object-center w-full h-full scale-105 filter contrast-[1.08] saturate-[1.1] brightness-[0.98] dark:brightness-[0.72]"
          style={{
            imageRendering: 'pixelated',
          }}
        />

        {/* Ambient Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8faf9]/75 via-[#f8faf9]/60 to-[#f8faf9]/80 dark:from-[#0c0d0e]/75 dark:via-[#0c0d0e]/60 dark:to-[#0c0d0e]/80 transition-colors" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1240px] mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <RevealBlock delay={0.05} yOffset={10}>
            <p className="text-[13px] font-mono text-[#006699] dark:text-[#41a1cf] font-semibold tracking-wider uppercase mb-3 drop-shadow-sm">
              03 / Services &amp; Delivery
            </p>
          </RevealBlock>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-editorial text-[#171717] dark:text-white leading-[1.15] mb-4">
            <TextReveal delay={0.1} stagger={0.045} duration={0.55}>
              Technical execution for growing businesses.
            </TextReveal>
          </h2>

          <RevealBlock delay={0.25} duration={0.65} yOffset={14}>
            <p className="text-[15px] sm:text-[16px] text-[#374151] dark:text-[#d1d5db] font-sans leading-relaxed max-w-2xl font-medium">
              I handle the entire technical delivery personally: no junior subcontractors, no endless scoping meetings, and no unmaintainable code.
            </p>
          </RevealBlock>
        </div>

        {/* 2x2 Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {capabilities.map((c, i) => (
            <RevealBlock
              key={i}
              delay={0.3 + i * 0.08}
              duration={0.65}
              yOffset={20}
              className="flex"
            >
              <div className="w-full p-8 rounded-[22px] bg-[#ffffff]/92 dark:bg-[#141517]/92 backdrop-blur-md border border-[#ffffff]/60 dark:border-[#24272b]/90 shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-[#41a1cf]/60 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[12px] font-mono text-[#41a1cf] font-semibold tracking-wider">
                      [{c.num}]
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf]/60 group-hover:scale-125 transition-transform" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-editorial text-[#171717] dark:text-white mb-3 leading-snug">
                    <TextReveal delay={0.35 + i * 0.08} stagger={0.035}>
                      {c.title}
                    </TextReveal>
                  </h3>

                  <p className="text-[14px] sm:text-[15px] text-[#374151] dark:text-[#c9ccd1] leading-relaxed font-sans">
                    {c.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#dee2de]/60 dark:border-[#24272b]/60 flex items-center justify-between text-[12px] font-mono text-[#646464] dark:text-[#a0a5ad]">
                  <span>Scope of Work</span>
                  <span className="text-[#41a1cf] opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1 font-medium">
                    Discuss Project
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>

      </div>
    </section>
  );
}
