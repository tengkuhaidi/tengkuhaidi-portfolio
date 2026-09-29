import React from 'react';

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-20 md:py-28 px-4 sm:px-6 max-w-[1200px] mx-auto border-t border-[#dee2de] dark:border-[#24272b]">
      <div className="max-w-2xl mb-12">
        <div className="text-[13px] font-mono text-[#646464] dark:text-[#a0a5ad] mb-2 tracking-tight">
          01 / Ecosystem
        </div>
        <h2 className="text-3xl sm:text-4xl font-editorial text-[#2c2c2c] dark:text-white leading-tight mb-3">
          Ventures and internal software engines.
        </h2>
        <p className="text-[16px] text-[#444141] dark:text-[#d1d5db] leading-relaxed">
          We build and operate software that powers high-volume corporate and legal workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Main: Legalizin */}
        <div className="lg:col-span-7 rounded-[20px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b] p-8 md:p-10 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 rounded-full text-[12px] font-mono border border-[#41a1cf] text-[#41a1cf]">
                Core Venture
              </span>
              <span className="text-[13px] font-mono text-[#646464] dark:text-[#a0a5ad]">
                2024 — Present
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-editorial text-[#2c2c2c] dark:text-white mb-3">
              Legalizin
            </h3>

            <p className="text-[15px] text-[#444141] dark:text-[#d1d5db] leading-relaxed mb-6 font-sans">
              Digital platform for Indonesian corporate legality, notary deeds, PT PMA incorporation, and business licensing. Built with a headless architecture that handles high-traffic legal operations without manual bottlenecks.
            </p>
          </div>

          <div className="pt-6 border-t border-[#dee2de] dark:border-[#24272b] flex items-center justify-between">
            <span className="text-[13px] text-[#646464] dark:text-[#a0a5ad] font-mono">
              Status: Active
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

        {/* Supporting: Internal Tooling */}
        <div className="lg:col-span-5 rounded-[20px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b] p-8 md:p-10 shadow-[0_1px_2px_rgba(0,0,0,0.04)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 rounded-full text-[12px] font-mono border border-neutral-300 dark:border-neutral-700 text-[#444141] dark:text-[#a0a5ad]">
                Tooling
              </span>
              <span className="text-[13px] font-mono text-[#646464] dark:text-[#a0a5ad]">
                Continuous
              </span>
            </div>

            <h3 className="text-2xl font-editorial text-[#2c2c2c] dark:text-white mb-3">
              Internal Micro-Apps
            </h3>

            <p className="text-[15px] text-[#444141] dark:text-[#d1d5db] leading-relaxed font-sans mb-6">
              Dedicated automation tools: KBLI 2025 search engines, real-time Google Indexing push scripts, SEO content syndication, and automated invoicing dispatch.
            </p>
          </div>

          <div className="pt-6 border-t border-[#dee2de] dark:border-[#24272b] flex items-center justify-between text-[13px] font-mono text-[#646464] dark:text-[#a0a5ad]">
            <span>Orchestrated</span>
            <span>24/7</span>
          </div>
        </div>

      </div>
    </section>
  );
}
