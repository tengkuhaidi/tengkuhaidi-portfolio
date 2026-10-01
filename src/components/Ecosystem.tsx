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
    label: 'Organic Search Visibility & Inbound Leads',
    metric: '100+',
    sub: 'Commercial Keywords in Top Google Positions',
    detail: 'Built an automated organic distribution engine that gets corporate services indexed within hours instead of weeks, capturing business owners searching for company formation.',
    barPct: 92,
  },
  {
    label: 'Customer Support Response Time',
    metric: '< 5s',
    sub: 'Instant 24/7 Consultation on WhatsApp',
    detail: 'Deployed an automated customer service assistant that answers licensing inquiries, explains government regulations, and qualifies leads around the clock.',
    barPct: 98,
  },
  {
    label: 'Operational Administrative Overhead',
    metric: '-65%',
    sub: 'Reduction in Manual Data Work',
    detail: 'Automated legal document preparation, regulatory compliance checks, and client billing, replacing repetitive spreadsheet coordination across the team.',
    barPct: 85,
  },
  {
    label: 'Platform Speed & Uptime',
    metric: '99.9%',
    sub: 'High Availability & Fast Page Loads',
    detail: 'Modern decoupled web architecture that loads in milliseconds nationwide, ensuring visitors never hit a broken page or slow checkout.',
    barPct: 96,
  }
];

export default function Ecosystem() {
  const [activeMetric, setActiveMetric] = useState(0);

  return (
    <section id="case-study" className="relative w-full py-24 md:py-32 px-4 sm:px-6 overflow-hidden border-t border-[#dee2de] dark:border-[#24272b] transition-colors">
      
      {/* Modern Next.js Ambient Gradients & Subtle Tech Mesh */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Primary Radiant Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#006699]/15 via-[#41a1cf]/10 to-indigo-500/10 dark:from-[#41a1cf]/12 dark:via-blue-600/8 dark:to-cyan-400/8 rounded-full blur-[120px] opacity-75" />
        
        {/* Secondary Warm / Indigo Corner Accent */}
        <div className="absolute bottom-10 right-[-10%] w-[500px] h-[450px] bg-gradient-to-bl from-purple-500/10 via-sky-500/10 to-transparent dark:from-indigo-600/10 dark:via-sky-400/5 rounded-full blur-[100px] opacity-60" />

        {/* Minimal Grid Pattern for Modern Tech Depth */}
        <div 
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-14">
        <RevealBlock delay={0.05} yOffset={10}>
          <p className="text-[13px] font-mono text-[#006699] dark:text-[#41a1cf] tracking-wider uppercase mb-3 font-medium">
            01 / Flagship Case Study
          </p>
        </RevealBlock>

        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-editorial text-[#171717] dark:text-white leading-[1.15] mb-4">
          <TextReveal delay={0.1} stagger={0.045} duration={0.55}>
            How we turn digital presence into real-world connections.
          </TextReveal>
        </h2>

        <RevealBlock delay={0.25} duration={0.65} yOffset={14}>
          <p className="text-[15px] sm:text-[16px] text-[#374151] dark:text-[#c9ccd1] font-sans leading-relaxed max-w-2xl font-normal">
            How I helped launch and scale Legalizin from day one: building a high-speed web portal, driving customer acquisition through organic search, and automating operations with AI customer support.
          </p>
        </RevealBlock>
      </div>

      {/* Grid: 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-12">
        
        {/* Pillar 1: Modern Platform */}
        <RevealBlock delay={0.3} duration={0.65} yOffset={20} className="flex">
          <div className="w-full rounded-[22px] bg-[#ffffff]/80 dark:bg-[#141517]/80 backdrop-blur-md border border-[#dee2de]/80 dark:border-[#24272b]/80 p-7 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-[#41a1cf]/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="text-[12px] font-mono text-[#41a1cf] mb-3 font-semibold">
                [PILLAR 01]
              </div>
              <h3 className="text-xl sm:text-2xl font-editorial text-[#171717] dark:text-white mb-3">
                Modern Web Platform &amp; Cloud Infra
              </h3>
              <p className="text-[14px] text-[#4b5563] dark:text-[#9ca3af] leading-relaxed font-sans mb-6">
                Built a high-performance web platform on modern cloud infrastructure. Designed for lightning-fast browsing on any mobile device and rock-solid uptime during traffic spikes.
              </p>
              <ul className="space-y-2 text-[13px] text-[#646464] dark:text-[#a0a5ad] font-sans">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf] shrink-0" />
                  <span>Sub-second page speeds across mobile networks</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf] shrink-0" />
                  <span>Automated backups, monitoring, and cloud security</span>
                </li>
              </ul>
            </div>
            <div className="pt-5 mt-6 border-t border-[#dee2de] dark:border-[#24272b] text-[12px] font-mono text-[#646464] dark:text-[#a0a5ad]">
              Platform Architecture
            </div>
          </div>
        </RevealBlock>

        {/* Pillar 2: Digital Marketing & Organic SEO */}
        <RevealBlock delay={0.38} duration={0.65} yOffset={20} className="flex">
          <div className="w-full rounded-[22px] bg-[#ffffff]/80 dark:bg-[#141517]/80 backdrop-blur-md border border-[#dee2de]/80 dark:border-[#24272b]/80 p-7 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-[#41a1cf]/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="text-[12px] font-mono text-[#41a1cf] mb-3 font-semibold">
                [PILLAR 02]
              </div>
              <h3 className="text-xl sm:text-2xl font-editorial text-[#171717] dark:text-white mb-3">
                Organic Search &amp; Digital Acquisition
              </h3>
              <p className="text-[14px] text-[#4b5563] dark:text-[#9ca3af] leading-relaxed font-sans mb-6">
                Engineered an automated organic search engine covering corporate business codes and establishment rules. Generates steady inbound inquiries every day without relying solely on paid ads.
              </p>
              <ul className="space-y-2 text-[13px] text-[#646464] dark:text-[#a0a5ad] font-sans">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf] shrink-0" />
                  <span>Automated search engine indexing and ranking updates</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf] shrink-0" />
                  <span>Interactive online tools that turn visitors into leads</span>
                </li>
              </ul>
            </div>
            <div className="pt-5 mt-6 border-t border-[#dee2de] dark:border-[#24272b] text-[12px] font-mono text-[#646464] dark:text-[#a0a5ad]">
              Customer Growth
            </div>
          </div>
        </RevealBlock>

        {/* Pillar 3: Automated WhatsApp Operations */}
        <RevealBlock delay={0.46} duration={0.65} yOffset={20} className="flex">
          <div className="w-full rounded-[22px] bg-[#ffffff]/80 dark:bg-[#141517]/80 backdrop-blur-md border border-[#dee2de]/80 dark:border-[#24272b]/80 p-7 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-[#41a1cf]/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="text-[12px] font-mono text-[#41a1cf] mb-3 font-semibold">
                [PILLAR 03]
              </div>
              <h3 className="text-xl sm:text-2xl font-editorial text-[#171717] dark:text-white mb-3">
                24/7 AI Customer Support &amp; Follow-up
              </h3>
              <p className="text-[14px] text-[#4b5563] dark:text-[#9ca3af] leading-relaxed font-sans mb-6">
                Implemented an automated customer service assistant on WhatsApp that provides instant consultation, explains complex legal requirements, and conducts automated business outreach.
              </p>
              <ul className="space-y-2 text-[13px] text-[#646464] dark:text-[#a0a5ad] font-sans">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf] shrink-0" />
                  <span>Instant responses on WhatsApp even outside work hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf] shrink-0" />
                  <span>Automated follow-ups that increase deal closing rates</span>
                </li>
              </ul>
            </div>
            <div className="pt-5 mt-6 border-t border-[#dee2de] dark:border-[#24272b] text-[12px] font-mono text-[#646464] dark:text-[#a0a5ad]">
              Automated Support
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
                Tangible business results from replacing manual work with modern software.
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
                <span>Manual Baseline</span>
                <span>Automated Scale</span>
              </div>
            </div>
          </div>

        </div>
      </RevealBlock>

      </div>
    </section>
  );
}
