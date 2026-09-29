import React from 'react';
import Image from 'next/image';

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-20 md:py-28 px-4 sm:px-6 max-w-[1200px] mx-auto border-t border-[#dee2de] dark:border-[#24272b]">
      {/* Editorial Section Header */}
      <div className="max-w-2xl mb-12">
        <div className="text-[13px] font-mono text-[#646464] dark:text-[#a0a5ad] mb-2 tracking-tight">
          01 / Corporate Ecosystem &amp; Holdings
        </div>
        <h2 className="text-3xl sm:text-4xl font-editorial text-[#2c2c2c] dark:text-white leading-tight mb-4">
          More than an agency: an incubator of autonomous operational ventures.
        </h2>
        <p className="text-[16px] text-[#444141] dark:text-[#d1d5db] leading-relaxed">
          Digitas Solusi Indonesia develops, funds, and operates proprietary software engines that serve nationwide corporate workflows and high-volume legal ecosystems.
        </p>
      </div>

      {/* Featured Ecosystem Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Main Pillar: Legalizin */}
        <div className="lg:col-span-7 rounded-[20px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b] p-8 md:p-10 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 rounded-full text-[12px] font-mono border border-[#41a1cf] text-[#41a1cf]">
                Core Venture Flagship
              </span>
              <span className="text-[13px] font-mono text-[#646464] dark:text-[#a0a5ad]">
                2024 — Present
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-editorial text-[#2c2c2c] dark:text-white mb-4">
              Legalizin
            </h3>

            <p className="text-[15px] text-[#444141] dark:text-[#d1d5db] leading-relaxed mb-6 font-sans">
              Indonesia&apos;s leading digital platform for corporate legality, notary deeds, PT PMA incorporation, and automated licensing. Designed as a headless microservices architecture that handles high-traffic legal operations without manual friction.
            </p>
          </div>

          <div className="pt-6 border-t border-[#dee2de] dark:border-[#24272b] flex items-center justify-between">
            <span className="text-[13px] text-[#646464] dark:text-[#a0a5ad] font-mono">
              Status: Active • Scaling
            </span>
            <a
              href="https://legalizin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-[#41a1cf] font-medium hover:underline inline-flex items-center gap-1"
            >
              <span>Visit Platform</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Supporting Pillar: Internal R&D Engines */}
        <div className="lg:col-span-5 rounded-[20px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b] p-8 md:p-10 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 rounded-full text-[12px] font-mono border border-neutral-300 dark:border-neutral-700 text-[#444141] dark:text-[#a0a5ad]">
                Proprietary Tooling
              </span>
              <span className="text-[13px] font-mono text-[#646464] dark:text-[#a0a5ad]">
                Continuous Integration
              </span>
            </div>

            <h3 className="text-2xl font-editorial text-[#2c2c2c] dark:text-white mb-4">
              Autonomous Systems &amp; Micro-Apps
            </h3>

            <p className="text-[15px] text-[#444141] dark:text-[#d1d5db] leading-relaxed font-sans mb-6">
              A private network of purpose-built micro-applications: KBLI 2025 cross-reference search, real-time Google Indexing push workers, autonomous SEO syndication, and self-hosted automated financial dispatch.
            </p>
          </div>

          <div className="pt-6 border-t border-[#dee2de] dark:border-[#24272b] flex items-center justify-between text-[13px] font-mono text-[#646464] dark:text-[#a0a5ad]">
            <span>Fully Orchestrated</span>
            <span>24/7 Uptime</span>
          </div>
        </div>

      </div>
    </section>
  );
}
