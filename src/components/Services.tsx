import React from 'react';

const capabilities = [
  {
    num: '01',
    title: 'Applied AI for Business & Autonomous Agents',
    desc: 'We design and deploy production-grade AI systems: autonomous agentic workflows for legal review, corporate compliance verification, KBLI classification checks, and deterministic administrative bots that eliminate 80% of human overhead without hallucinations.'
  },
  {
    num: '02',
    title: 'Advanced Web Architecture & Edge Systems',
    desc: 'High-throughput full-stack engineering utilizing Next.js 16, TypeScript, and React Server Components. Zero hydration errors, Web Vitals exceeding 95, and precision edge caching architected for extreme scale.'
  },
  {
    num: '03',
    title: 'Custom ERP, HRIS & Financial Engines',
    desc: 'Replacing brittle spreadsheets with sovereign internal platforms: multi-location biometric attendance, automated PPh 21 TER calculations, PSAK asset depreciation, and corporate deed tracking.'
  },
  {
    num: '04',
    title: 'Instant Indexing Pipelines & Technical SEO',
    desc: 'Direct programmatic pipelines linking headless CMS content to Google Search Console and the Indexing API. Silo-structured information architectures, rigorous schema metadata, and content discoverable within minutes.'
  }
];

export default function Services() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 max-w-[1200px] mx-auto border-t border-[#dee2de] dark:border-[#24272b]">
      <div className="max-w-2xl mb-14">
        <div className="text-[13px] font-mono text-[#646464] dark:text-[#a0a5ad] mb-2 tracking-tight">
          Engineering Capabilities Summary
        </div>
        <h2 className="text-3xl sm:text-4xl font-editorial text-[#2c2c2c] dark:text-white leading-tight mb-4">
          Four core disciplines engineered to accelerate modern enterprises.
        </h2>
        <p className="text-[16px] text-[#444141] dark:text-[#d1d5db] leading-relaxed">
          From sovereign autonomous AI workflows to mission-critical ERP backbones, every system is engineered in-house to enterprise security and performance benchmarks.
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {capabilities.map((c, i) => (
          <div
            key={i}
            className="p-8 rounded-[16px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b] shadow-[0_1px_1px_rgba(0,0,0,0.04)] flex flex-col justify-between"
          >
            <div>
              <div className="text-[12px] font-mono text-[#41a1cf] mb-4">
                [{c.num}]
              </div>
              <h3 className="text-xl font-editorial text-[#2c2c2c] dark:text-white mb-3">
                {c.title}
              </h3>
              <p className="text-[15px] text-[#444141] dark:text-[#d1d5db] leading-relaxed">
                {c.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
