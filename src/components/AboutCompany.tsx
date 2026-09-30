import React from 'react';

export default function AboutCompany() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 max-w-[1200px] mx-auto border-t border-[#dee2de] dark:border-[#24272b]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <div className="lg:col-span-5">
          <div className="text-[13px] font-mono text-[#41a1cf] mb-2 tracking-tight">
            04 / Background &amp; Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-editorial text-[#2c2c2c] dark:text-white leading-tight mb-4">
            Full-stack engineering with real commercial acumen.
          </h2>
          <p className="text-[15px] text-[#444141] dark:text-[#d1d5db] leading-relaxed font-sans">
            I work directly with founders, directors, and corporate teams as an independent technical partner — bringing deep understanding from low-level Linux infra to top-of-funnel customer acquisition.
          </p>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 rounded-[16px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b]">
            <h3 className="text-lg font-editorial text-[#2c2c2c] dark:text-white mb-2">
              From Infrastructure to Front-Facing Growth
            </h3>
            <p className="text-[14px] text-[#444141] dark:text-[#d1d5db] leading-relaxed font-sans">
              Unlike traditional developers who stop at writing code, or marketers who cannot inspect server logs, I cover the entire stack: containerized servers, API gateways, database optimization, Next.js web applications, and automated programmatic SEO pipelines that convert organic traffic.
            </p>
          </div>

          <div className="p-6 rounded-[16px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b]">
            <h3 className="text-lg font-editorial text-[#2c2c2c] dark:text-white mb-2">
              Battle-Tested Production Experience
            </h3>
            <p className="text-[14px] text-[#444141] dark:text-[#d1d5db] leading-relaxed font-sans">
              Beyond consulting for enterprise clients, I actively build and run high-traffic software platforms like Legalizin.com under daily regulatory compliance and strict operational SLAs. I don&apos;t just advise on architecture — I build systems that work under real-world pressure.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
