'use client';

import React from 'react';
import TextReveal, { RevealBlock } from './TextReveal';

export default function Ecosystem() {
  return (
    <section id="case-study" className="py-20 md:py-28 px-4 sm:px-6 max-w-[1240px] mx-auto border-t border-[#dee2de] dark:border-[#24272b] transition-colors">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-14">
        <RevealBlock delay={0.05} yOffset={10}>
          <p className="text-[13px] font-mono text-[#41a1cf] tracking-wider uppercase mb-3">
            01 / Flagship Case Study
          </p>
        </RevealBlock>

        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-editorial text-[#2c2c2c] dark:text-white leading-[1.15] mb-4">
          <TextReveal delay={0.1} stagger={0.045} duration={0.55}>
            Legalizin.com — End-to-End Modern Tech &amp; AI Implementation.
          </TextReveal>
        </h2>

        <RevealBlock delay={0.25} duration={0.65} yOffset={14}>
          <p className="text-[15px] sm:text-[16px] text-[#444141] dark:text-[#d1d5db] font-sans leading-relaxed max-w-2xl">
            Co-founding and engineering Indonesia&apos;s corporate legality platform from day one: programmatic SEO/SEM pipelines, autonomous multi-agent systems, and 24/7 AI-driven customer support on WhatsApp.
          </p>
        </RevealBlock>
      </div>

      {/* Grid: 3 Pillars of Legalizin Case Study */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-8">
        
        {/* Pillar 1: Full-Stack Architecture & Cloud Infra */}
        <RevealBlock delay={0.3} duration={0.65} yOffset={20} className="flex">
          <div className="w-full rounded-[22px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b] p-7 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] flex flex-col justify-between">
            <div>
              <div className="text-[12px] font-mono text-[#41a1cf] mb-3">
                [PILLAR 01]
              </div>
              <h3 className="text-xl sm:text-2xl font-editorial text-[#171717] dark:text-white mb-3">
                Headless Architecture &amp; Cloud Infra
              </h3>
              <p className="text-[14px] text-[#444141] dark:text-[#c9ccd1] leading-relaxed font-sans mb-6">
                Engineered with Next.js App Router decoupled from a headless WordPress content hub, containerized on Linux with Nginx reverse proxy, automated SSL, and sub-second edge cache delivery.
              </p>
              <ul className="space-y-2 text-[13px] text-[#646464] dark:text-[#a0a5ad] font-sans">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf] shrink-0" />
                  <span>Next.js Server Components for Core Web Vitals (95+)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf] shrink-0" />
                  <span>Containerized Linux stack &amp; zero-downtime CI/CD</span>
                </li>
              </ul>
            </div>
            <div className="pt-5 mt-6 border-t border-[#dee2de] dark:border-[#24272b] text-[12px] font-mono text-[#646464] dark:text-[#a0a5ad]">
              Sovereign Platform
            </div>
          </div>
        </RevealBlock>

        {/* Pillar 2: Technical SEO, SEM & Programmatic Indexing */}
        <RevealBlock delay={0.38} duration={0.65} yOffset={20} className="flex">
          <div className="w-full rounded-[22px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b] p-7 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] flex flex-col justify-between">
            <div>
              <div className="text-[12px] font-mono text-[#41a1cf] mb-3">
                [PILLAR 02]
              </div>
              <h3 className="text-xl sm:text-2xl font-editorial text-[#171717] dark:text-white mb-3">
                SEO, SEM &amp; Programmatic Indexing
              </h3>
              <p className="text-[14px] text-[#444141] dark:text-[#c9ccd1] leading-relaxed font-sans mb-6">
                Automated high-intent KBLI and company establishment search pipelines directly integrated into Google Instant Indexing API, achieving rapid ranking for 100+ high-value commercial keywords.
              </p>
              <ul className="space-y-2 text-[13px] text-[#646464] dark:text-[#a0a5ad] font-sans">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf] shrink-0" />
                  <span>Automated Google Indexing API push within seconds</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf] shrink-0" />
                  <span>Interactive KBLI 2025 lookup tool driving organic leads</span>
                </li>
              </ul>
            </div>
            <div className="pt-5 mt-6 border-t border-[#dee2de] dark:border-[#24272b] text-[12px] font-mono text-[#646464] dark:text-[#a0a5ad]">
              High-Intent Traffic
            </div>
          </div>
        </RevealBlock>

        {/* Pillar 3: Autonomous AI & 24/7 WhatsApp CS Bot */}
        <RevealBlock delay={0.46} duration={0.65} yOffset={20} className="flex">
          <div className="w-full rounded-[22px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b] p-7 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] flex flex-col justify-between">
            <div>
              <div className="text-[12px] font-mono text-[#41a1cf] mb-3">
                [PILLAR 03]
              </div>
              <h3 className="text-xl sm:text-2xl font-editorial text-[#171717] dark:text-white mb-3">
                Autonomous AI &amp; 24/7 WhatsApp CS
              </h3>
              <p className="text-[14px] text-[#444141] dark:text-[#c9ccd1] leading-relaxed font-sans mb-6">
                Deployed autonomous LLM agent infrastructure (&ldquo;Putra&rdquo;) handling 24/7 inbound legal inquiries on WhatsApp, understanding complex perizinan/OSS RBA nuances and outbound lead prospecting.
              </p>
              <ul className="space-y-2 text-[13px] text-[#646464] dark:text-[#a0a5ad] font-sans">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf] shrink-0" />
                  <span>24/7 natural conversational legal CS on WhatsApp</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf] shrink-0" />
                  <span>Scheduled outbound prospecting engine (10 B2B leads/day)</span>
                </li>
              </ul>
            </div>
            <div className="pt-5 mt-6 border-t border-[#dee2de] dark:border-[#24272b] text-[12px] font-mono text-[#646464] dark:text-[#a0a5ad]">
              Autonomous Operations
            </div>
          </div>
        </RevealBlock>

      </div>

      {/* Featured Banner / Metric Bar */}
      <RevealBlock delay={0.52} duration={0.7} yOffset={20}>
        <div className="rounded-[22px] bg-gradient-to-r from-[#081d3d] to-[#0c0d0e] border border-[#dee2de]/20 p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_12px_40px_rgba(0,0,0,0.2)]">
          <div className="max-w-xl text-center md:text-left">
            <span className="text-[12px] font-mono text-[#41a1cf] uppercase tracking-wider block mb-2">
              Case Study Result
            </span>
            <h4 className="text-xl sm:text-2xl font-editorial text-white mb-2">
              From zero to an automated corporate legality machine.
            </h4>
            <p className="text-[14px] text-white/80 font-sans leading-relaxed">
              Legalizin proves how combining modern software architecture, programmatic organic visibility, and autonomous AI agents can scale a business without linear headcount growth.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://legalizin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-[10px] bg-[#41a1cf] text-white text-[13px] font-sans font-medium hover:bg-[#3490bc] transition-all flex items-center gap-2 shadow-md active:scale-95"
            >
              <span>Visit Live Platform</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
      </RevealBlock>

    </section>
  );
}
