import React from 'react';

const capabilities = [
  {
    num: '01',
    title: 'Autonomous AI Workflows',
    desc: 'Production AI systems connected to internal APIs: automated legal document review, KBLI compliance checks, and deterministic administrative bots that cut manual work.'
  },
  {
    num: '02',
    title: 'Web Architecture & Platforms',
    desc: 'High-performance engineering with Next.js 16, TypeScript, and React Server Components. Fast edge caching, high Core Web Vitals, and strict type safety.'
  },
  {
    num: '03',
    title: 'Custom ERP & Financial Systems',
    desc: 'Structured internal platforms replacing spreadsheets: multi-branch biometric attendance, automated PPh 21 TER taxes, asset depreciation, and corporate deed tracking.'
  },
  {
    num: '04',
    title: 'Indexing & Search Automation',
    desc: 'Programmatic pipelines linking headless CMS directly to Google Search Console and Indexing API. Content crawls and indexes within minutes.'
  }
];

export default function Services() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 max-w-[1200px] mx-auto border-t border-[#dee2de] dark:border-[#24272b]">
      <div className="max-w-2xl mb-12">
        <div className="text-[13px] font-mono text-[#646464] dark:text-[#a0a5ad] mb-2 tracking-tight">
          03 / Services
        </div>
        <h2 className="text-3xl sm:text-4xl font-editorial text-[#2c2c2c] dark:text-white leading-tight mb-3">
          Engineering disciplines.
        </h2>
        <p className="text-[16px] text-[#444141] dark:text-[#d1d5db] leading-relaxed">
          From autonomous agents to core ERP engines, built with enterprise security standards.
        </p>
      </div>

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
              <h3 className="text-xl font-editorial text-[#2c2c2c] dark:text-white mb-2">
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
