'use client';

import React from 'react';
import TextReveal, { RevealBlock } from './TextReveal';

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-20 md:py-28 px-4 sm:px-6 max-w-[1240px] mx-auto border-t border-[#dee2de] dark:border-[#24272b] transition-colors">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-14">
        <RevealBlock delay={0.05} yOffset={10}>
          <p className="text-[13px] font-mono text-[#41a1cf] tracking-wider uppercase mb-3">
            01 / Ecosystem &amp; Enterprise Solutions
          </p>
        </RevealBlock>

        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-editorial text-[#2c2c2c] dark:text-white leading-[1.15] mb-4">
          <TextReveal delay={0.1} stagger={0.045} duration={0.55}>
            What we research, build, and deploy.
          </TextReveal>
        </h2>

        <RevealBlock delay={0.25} duration={0.65} yOffset={14}>
          <p className="text-[15px] sm:text-[16px] text-[#444141] dark:text-[#d1d5db] font-sans leading-relaxed max-w-2xl">
            From sovereign platforms to custom enterprise infrastructure, we engineer production systems that automate complex corporate operations.
          </p>
        </RevealBlock>
      </div>

      {/* Grid: Flagship Venture vs Custom Enterprise Deployments */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Card 1: Proven Track Record (Legalizin) */}
        <RevealBlock delay={0.3} duration={0.7} yOffset={24} className="lg:col-span-6 flex">
          <div className="w-full rounded-[22px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b] p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 text-[12px] font-mono text-[#646464] dark:text-[#a0a5ad]">
                <span className="text-[#41a1cf]">Proven Venture Flagship</span>
                <span>Proprietary Ecosystem</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-editorial text-[#2c2c2c] dark:text-white mb-3">
                <TextReveal delay={0.35} stagger={0.05}>
                  Legalizin
                </TextReveal>
              </h3>

              <p className="text-[15px] text-[#444141] dark:text-[#d1d5db] leading-relaxed mb-6 font-sans">
                Our flagship corporate legality and business permit platform. Built with a high-throughput headless architecture, real-time government regulatory integrations, and programmatic search indexing serving enterprise clients nationwide.
              </p>

              <ul className="space-y-2.5 text-[14px] text-[#646464] dark:text-[#a0a5ad] font-sans mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf] shrink-0" />
                  <span>Automated corporate incorporation &amp; notary deed workflows</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf] shrink-0" />
                  <span>Instant KBLI 2025 regulatory compliance mapping</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf] shrink-0" />
                  <span>Direct API pipelines with zero manual administrative drag</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-[#dee2de] dark:border-[#24272b] flex items-center justify-between">
              <span className="text-[13px] font-mono text-[#646464] dark:text-[#a0a5ad]">
                Nationwide Scale
              </span>
              <a
                href="https://legalizin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-[#41a1cf] font-medium hover:underline inline-flex items-center gap-1"
              >
                <span>Explore Platform</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>
        </RevealBlock>

        {/* Card 2: Enterprise Systems, AI & Applied Research */}
        <RevealBlock delay={0.4} duration={0.7} yOffset={24} className="lg:col-span-6 flex">
          <div className="w-full rounded-[22px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b] p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 text-[12px] font-mono text-[#646464] dark:text-[#a0a5ad]">
                <span className="text-[#41a1cf]">Enterprise Implementation</span>
                <span>Applied R&amp;D</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-editorial text-[#2c2c2c] dark:text-white mb-3">
                <TextReveal delay={0.45} stagger={0.04}>
                  Custom Enterprise Systems &amp; AI
                </TextReveal>
              </h3>

              <p className="text-[15px] text-[#444141] dark:text-[#d1d5db] leading-relaxed mb-6 font-sans">
                We research, architect, and deploy dedicated software ecosystems for growing corporations looking to replace disconnected third-party tools with high-security, custom digital assets.
              </p>

              <ul className="space-y-2.5 text-[14px] text-[#646464] dark:text-[#a0a5ad] font-sans mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf] shrink-0" />
                  <span>Autonomous AI agents for document verification &amp; operational routing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf] shrink-0" />
                  <span>Custom ERPs, financial tracking, and PSAK asset depreciation engines</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf] shrink-0" />
                  <span>Physical security &amp; visitor management integrations (VMS)</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-[#dee2de] dark:border-[#24272b] flex items-center justify-between">
              <span className="text-[13px] font-mono text-[#646464] dark:text-[#a0a5ad]">
                Tailored Architecture
              </span>
              <a
                href="https://wa.me/6281235247820?text=Halo%20Digitas%2C%20saya%20ingin%20berdiskusi%20mengenai%20pengembangan%20software%20dan%20implementasi%20sistem%20otomasi%20untuk%20perusahaan."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-[#41a1cf] font-medium hover:underline inline-flex items-center gap-1"
              >
                <span>Consult Engineering</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>
        </RevealBlock>

      </div>
    </section>
  );
}
