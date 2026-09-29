import React from 'react';

export default function AboutCompany() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 max-w-[1200px] mx-auto border-t border-[#dee2de] dark:border-[#24272b]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <div className="lg:col-span-5">
          <div className="text-[13px] font-mono text-[#646464] dark:text-[#a0a5ad] mb-2 tracking-tight">
            04 / About
          </div>
          <h2 className="text-3xl sm:text-4xl font-editorial text-[#2c2c2c] dark:text-white leading-tight mb-4">
            Disciplined software engineering for long-term reliability.
          </h2>
          <p className="text-[15px] text-[#444141] dark:text-[#d1d5db] leading-relaxed font-sans">
            We build, operate, and maintain business systems for the long run.
          </p>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 rounded-[16px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b]">
            <h3 className="text-lg font-editorial text-[#2c2c2c] dark:text-white mb-2">
              Autonomous Systems
            </h3>
            <p className="text-[14px] text-[#444141] dark:text-[#d1d5db] leading-relaxed font-sans">
              We eliminate manual operational drag. Code runs quietly in the background with minimal dependencies and low maintenance.
            </p>
          </div>

          <div className="p-6 rounded-[16px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b]">
            <h3 className="text-lg font-editorial text-[#2c2c2c] dark:text-white mb-2">
              Proprietary Ventures
            </h3>
            <p className="text-[14px] text-[#444141] dark:text-[#d1d5db] leading-relaxed font-sans">
              Through platforms like Legalizin.com, we run our own production software under daily regulatory requirements and real transaction volumes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
