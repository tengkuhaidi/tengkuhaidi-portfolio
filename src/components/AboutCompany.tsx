import React from 'react';

export default function AboutCompany() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 max-w-[1200px] mx-auto border-t border-[#dee2de] dark:border-[#24272b]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-5">
          <div className="text-[13px] font-mono text-[#646464] dark:text-[#a0a5ad] mb-2 tracking-tight">
            04 / Corporate Identity &amp; Governance
          </div>
          <h2 className="text-3xl sm:text-4xl font-editorial text-[#2c2c2c] dark:text-white leading-tight mb-4">
            A software holding built on engineering discipline and long-term durability.
          </h2>
          <p className="text-[15px] text-[#444141] dark:text-[#d1d5db] leading-relaxed mb-6 font-sans">
            We are not a traditional agency that builds and departs. We build, retain, optimize, and steward critical business systems over long arcs of time.
          </p>
        </div>

        {/* Right Column: Key Tenets */}
        <div className="lg:col-span-7 space-y-8">
          <div className="p-6 rounded-[16px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b]">
            <h3 className="text-lg font-editorial text-[#2c2c2c] dark:text-white mb-2">
              Autonomous Systems Over Bloated Headcount
            </h3>
            <p className="text-[14px] text-[#444141] dark:text-[#d1d5db] leading-relaxed font-sans">
              We reject writing throwaway code or solving operational inefficiencies with manual headcount. The best system is an automated architecture that operates quietly in the background with zero maintenance drama.
            </p>
          </div>

          <div className="p-6 rounded-[16px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b]">
            <h3 className="text-lg font-editorial text-[#2c2c2c] dark:text-white mb-2">
              Sovereign Venture Ownership
            </h3>
            <p className="text-[14px] text-[#444141] dark:text-[#d1d5db] leading-relaxed font-sans">
              Through proprietary ventures like Legalizin.com, we dogfood our own software engineering doctrines daily under high transactional intensity, regulatory compliance, and rapid market cycles.
            </p>
          </div>

          <div className="p-6 rounded-[16px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b]">
            <h3 className="text-lg font-editorial text-[#2c2c2c] dark:text-white mb-2">
              Headquartered in South Jakarta
            </h3>
            <p className="text-[14px] text-[#444141] dark:text-[#d1d5db] leading-relaxed font-sans">
              Registered corporate entity: PT Digitas Solusi Indonesia. Located at Alamanda Tower, Jl. TB. Simatupang, Jakarta Selatan. Providing enterprise-grade software capabilities across Indonesia and regional markets.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
