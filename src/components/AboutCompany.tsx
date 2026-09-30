import React from 'react';

export default function AboutCompany() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 max-w-[1200px] mx-auto border-t border-[#dee2de] dark:border-[#24272b]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <div className="lg:col-span-5">
          <div className="text-[13px] font-mono text-[#006699] dark:text-[#41a1cf] mb-2 tracking-tight font-medium">
            04 / Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-editorial text-[#171717] dark:text-white leading-tight mb-4">
            Engineering background with direct commercial focus.
          </h2>
          <p className="text-[15px] text-[#374151] dark:text-[#c9ccd1] leading-relaxed font-sans">
            I work directly with founders and business owners. No middlemen, no account managers, and no junior staff handling your production code.
          </p>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 rounded-[16px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b]">
            <h3 className="text-lg font-editorial text-[#171717] dark:text-white mb-2">
              From bare metal servers to customer acquisition
            </h3>
            <p className="text-[14px] text-[#4b5563] dark:text-[#9ca3af] leading-relaxed font-sans">
              Most developers don&apos;t care how your company makes money, and most growth marketers don&apos;t know what a reverse proxy does. I bridge both sides: configuring reliable Linux servers and databases, building fast Next.js platforms, and setting up programmatic SEO pipelines that generate real sales leads.
            </p>
          </div>

          <div className="p-6 rounded-[16px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b]">
            <h3 className="text-lg font-editorial text-[#171717] dark:text-white mb-2">
              Tested under real operating pressure
            </h3>
            <p className="text-[14px] text-[#4b5563] dark:text-[#9ca3af] leading-relaxed font-sans">
              I don&apos;t just consult on slides. As co-founder and tech lead at Legalizin.com, I maintain real-time government compliance connections, 24/7 WhatsApp AI customer bots, and daily automated search indexing. Everything I recommend to clients is software I already run and monitor in production.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
