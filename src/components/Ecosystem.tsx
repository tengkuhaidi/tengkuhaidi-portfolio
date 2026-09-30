'use client';

import React, { useState } from 'react';
import TextReveal, { RevealBlock } from './TextReveal';

interface MetricImpact {
  label: string;
  metric: string;
  sub: string;
  detail: string;
  barPct: number;
}

const metrics: MetricImpact[] = [
  {
    label: 'Organic Traffic & Instant Indexing',
    metric: '100+',
    sub: 'Commercial Keywords in Top 5',
    detail: 'Automated publishing engine pushes directly to Google Indexing API within seconds of release, beating traditional 3-week crawl delays.',
    barPct: 92,
  },
  {
    label: 'WhatsApp CS Response Latency',
    metric: '< 5s',
    sub: '24/7 Automated Response Time',
    detail: 'Autonomous LLM agent parses complex OSS RBA perizinan rules instantly on WhatsApp, eliminating missed inquiries outside business hours.',
    barPct: 98,
  },
  {
    label: 'Operational Back-Office Overhead',
    metric: '-65%',
    sub: 'Reduction in Administrative Drag',
    detail: 'Automated notary deed generation, KBLI 2025 cross-checking, and automatic invoice provisioning replaced 3 manual admin spreadsheets.',
    barPct: 85,
  },
  {
    label: 'Web Performance & Core Web Vitals',
    metric: '98/100',
    sub: 'PageSpeed Performance Score',
    detail: 'Headless Next.js App Router decoupled from WordPress backend with sub-500ms TTFB across Indonesian commercial ISPs.',
    barPct: 96,
  }
];

export default function Ecosystem() {
  const [activeMetric, setActiveMetric] = useState(0);

  return (
    <section id="case-study" className="py-20 md:py-28 px-4 sm:px-6 max-w-[1240px] mx-auto border-t border-[#dee2de] dark:border-[#24272b] transition-colors">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-14">
        <RevealBlock delay={0.05} yOffset={10}>
          <p className="text-[13px] font-mono text-[#006699] dark:text-[#41a1cf] tracking-wider uppercase mb-3 font-medium">
            01 / Flagship Case Study
          </p>
        </RevealBlock>

        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-editorial text-[#171717] dark:text-white leading-[1.15] mb-4">
          <TextReveal delay={0.1} stagger={0.045} duration={0.55}>
            Legalizin.com — Co-Founding &amp; Engineering Indonesia&apos;s Corporate Legality Platform.
          </TextReveal>
        </h2>

        <RevealBlock delay={0.25} duration={0.65} yOffset={14}>
          <p className="text-[15px] sm:text-[16px] text-[#374151] dark:text-[#c9ccd1] font-sans leading-relaxed max-w-2xl font-normal">
            How I architected the technology from day one: Next.js headless architecture, automated search ranking pipelines, and autonomous AI agents handling customer sales conversations around the clock.
          </p>
        </RevealBlock>
      </div>

      {/* Grid: 3 Real Delivery Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-12">
        
        {/* Pillar 1: Full-Stack Architecture */}
        <RevealBlock delay={0.3} duration={0.65} yOffset={20} className="flex">
          <div className="w-full rounded-[22px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b] p-7 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] flex flex-col justify-between">
            <div>
              <div className="text-[12px] font-mono text-[#41a1cf] mb-3 font-semibold">
                [PILLAR 01]
              </div>
              <h3 className="text-xl sm:text-2xl font-editorial text-[#171717] dark:text-white mb-3">
                Decoupled Headless Stack &amp; Linux Cloud
              </h3>
              <p className="text-[14px] text-[#4b5563] dark:text-[#9ca3af] leading-relaxed font-sans mb-6">
                Next.js App Router front-end consuming headless WordPress REST endpoints. Containerized with Docker and Nginx reverse proxy on bare-metal Linux with sub-500ms edge caching.
              </p>
              <ul className="space-y-2 text-[13px] text-[#646464] dark:text-[#a0a5ad] font-sans">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf] shrink-0" />
                  <span>Next.js 16 Server Components &amp; dynamic SSR</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf] shrink-0" />
                  <span>Automated GitHub Actions CI/CD to Vercel and VPS</span>
                </li>
              </ul>
            </div>
            <div className="pt-5 mt-6 border-t border-[#dee2de] dark:border-[#24272b] text-[12px] font-mono text-[#646464] dark:text-[#a0a5ad]">
              Platform Architecture
            </div>
          </div>
        </RevealBlock>

        {/* Pillar 2: Search Growth */}
        <RevealBlock delay={0.38} duration={0.65} yOffset={20} className="flex">
          <div className="w-full rounded-[22px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b] p-7 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] flex flex-col justify-between">
            <div>
              <div className="text-[12px] font-mono text-[#41a1cf] mb-3 font-semibold">
                [PILLAR 02]
              </div>
              <h3 className="text-xl sm:text-2xl font-editorial text-[#171717] dark:text-white mb-3">
                Automated Programmatic SEO Engine
              </h3>
              <p className="text-[14px] text-[#4b5563] dark:text-[#9ca3af] leading-relaxed font-sans mb-6">
                Built an automated publishing pipeline with Google Instant Indexing API integration. Systematic KBLI 2025 regulatory breakdowns that capture high-intent founders searching for incorporation rules.
              </p>
              <ul className="space-y-2 text-[13px] text-[#646464] dark:text-[#a0a5ad] font-sans">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf] shrink-0" />
                  <span>Direct Google Indexing API push on every publish</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf] shrink-0" />
                  <span>Custom interactive KBLI directory driving organic leads</span>
                </li>
              </ul>
            </div>
            <div className="pt-5 mt-6 border-t border-[#dee2de] dark:border-[#24272b] text-[12px] font-mono text-[#646464] dark:text-[#a0a5ad]">
              Customer Acquisition
            </div>
          </div>
        </RevealBlock>

        {/* Pillar 3: AI CS Bot */}
        <RevealBlock delay={0.46} duration={0.65} yOffset={20} className="flex">
          <div className="w-full rounded-[22px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b] p-7 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] flex flex-col justify-between">
            <div>
              <div className="text-[12px] font-mono text-[#41a1cf] mb-3 font-semibold">
                [PILLAR 03]
              </div>
              <h3 className="text-xl sm:text-2xl font-editorial text-[#171717] dark:text-white mb-3">
                Autonomous WhatsApp CS &amp; Outreach
              </h3>
              <p className="text-[14px] text-[#4b5563] dark:text-[#9ca3af] leading-relaxed font-sans mb-6">
                Autonomous agent (&ldquo;Putra&rdquo;) operating on WhatsApp. Answers legal questions, explains OSS RBA requirements, quotes prices accurately, and handles outbound B2B lead follow-ups daily.
              </p>
              <ul className="space-y-2 text-[13px] text-[#646464] dark:text-[#a0a5ad] font-sans">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf] shrink-0" />
                  <span>Zero-delay WhatsApp customer service 24/7</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf] shrink-0" />
                  <span>Integrated local business prospecting engine</span>
                </li>
              </ul>
            </div>
            <div className="pt-5 mt-6 border-t border-[#dee2de] dark:border-[#24272b] text-[12px] font-mono text-[#646464] dark:text-[#a0a5ad]">
              Automated Operations
            </div>
          </div>
        </RevealBlock>

      </div>

      {/* Interactive Business Impact Chart & Operational Metrics */}
      <RevealBlock delay={0.52} duration={0.7} yOffset={20}>
        <div className="rounded-[24px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b] p-8 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-[#dee2de] dark:border-[#24272b]">
            <div>
              <span className="text-[12px] font-mono text-[#006699] dark:text-[#41a1cf] uppercase tracking-wider block mb-2 font-semibold">
                Business Impact &amp; Measurement
              </span>
              <h3 className="text-2xl sm:text-3xl font-editorial text-[#171717] dark:text-white">
                Concrete results from replacing manual work with software.
              </h3>
            </div>
            <p className="text-[13px] font-mono text-[#646464] dark:text-[#a0a5ad]">
              Verified in Production • 2024–2026
            </p>
          </div>

          {/* Metric Selector Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {metrics.map((m, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMetric(idx)}
                className={`p-4 rounded-xl text-left transition-all border ${
                  activeMetric === idx
                    ? 'bg-[#f4f7f6] dark:bg-neutral-800/80 border-[#41a1cf] shadow-sm'
                    : 'bg-transparent border-[#dee2de]/70 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600'
                }`}
              >
                <div className="text-2xl sm:text-3xl font-editorial font-bold text-[#171717] dark:text-white mb-1">
                  {m.metric}
                </div>
                <div className="text-[12px] font-sans font-medium text-[#006699] dark:text-[#41a1cf] line-clamp-1">
                  {m.sub}
                </div>
              </button>
            ))}
          </div>

          {/* Animated Growth Bar & Deep Dive Details */}
          <div className="p-6 rounded-2xl bg-[#fefffc] dark:bg-[#0c0d0e] border border-[#dee2de] dark:border-[#24272b] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="text-[12px] font-mono text-[#646464] dark:text-[#a0a5ad] uppercase tracking-wider mb-1">
                Metric in Detail
              </div>
              <div className="text-lg font-editorial text-[#171717] dark:text-white mb-2 font-semibold">
                {metrics[activeMetric].label}
              </div>
              <p className="text-[14px] text-[#4b5563] dark:text-[#9ca3af] font-sans leading-relaxed">
                {metrics[activeMetric].detail}
              </p>
            </div>

            {/* Visual SVG Progress Bar / Growth Gauge */}
            <div className="w-full lg:w-72 shrink-0">
              <div className="flex items-center justify-between text-[12px] font-mono mb-2">
                <span className="text-[#646464] dark:text-[#a0a5ad]">Benchmark Realization</span>
                <span className="text-[#41a1cf] font-semibold">{metrics[activeMetric].barPct}% Target</span>
              </div>
              
              <div className="w-full h-3 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden relative">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#006699] to-[#41a1cf] transition-all duration-700 ease-out"
                  style={{ width: `${metrics[activeMetric].barPct}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-[#9ca3af] mt-2">
                <span>Legacy Manual Baseline</span>
                <span>Automated Scale</span>
              </div>
            </div>
          </div>

        </div>
      </RevealBlock>

    </section>
  );
}
