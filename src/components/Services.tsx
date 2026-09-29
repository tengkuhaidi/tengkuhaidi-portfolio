import React from 'react';

const capabilities = [
  {
    num: '01',
    title: 'Business AI & Workflow Automation',
    desc: 'Automating high-friction administrative tasks with intelligent agents. From verifying legal documents to handling compliance checks, eliminating manual overhead with complete accuracy.'
  },
  {
    num: '02',
    title: 'Modern Web & Platform Engineering',
    desc: 'Building reliable digital platforms and high-speed web portals designed for heavy traffic, zero downtime, and intuitive user experiences.'
  },
  {
    num: '03',
    title: 'Custom Corporate Management Systems',
    desc: 'Replacing fragile spreadsheets with unified internal platforms for payroll, tax reporting, corporate asset tracking, and multi-branch operations.'
  },
  {
    num: '04',
    title: 'Organic Search & Digital Visibility',
    desc: 'Systematic content distribution and direct search engine indexing pipelines, ensuring critical company offerings and regulatory services reach audiences instantly.'
  }
];

export default function Services() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 max-w-[1240px] mx-auto border-t border-[#dee2de] dark:border-[#24272b] transition-colors">
      <div className="max-w-2xl mb-12">
        <p className="text-[13px] font-mono text-[#41a1cf] tracking-wider uppercase mb-2">
          03 / Services
        </p>
        <h2 className="text-3xl sm:text-4xl font-editorial text-[#2c2c2c] dark:text-white leading-tight mb-3">
          How we help enterprises scale.
        </h2>
        <p className="text-[15px] sm:text-[16px] text-[#444141] dark:text-[#d1d5db] font-sans leading-relaxed">
          Practical software solutions designed to remove operational bottlenecks, improve internal control, and accelerate growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {capabilities.map((c, i) => (
          <div
            key={i}
            className="p-8 rounded-[20px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b] shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] flex flex-col justify-between"
          >
            <div>
              <div className="text-[12px] font-mono text-[#41a1cf] mb-4">
                [{c.num}]
              </div>
              <h3 className="text-xl font-editorial text-[#2c2c2c] dark:text-white mb-3">
                {c.title}
              </h3>
              <p className="text-[14px] sm:text-[15px] text-[#444141] dark:text-[#d1d5db] leading-relaxed font-sans">
                {c.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
