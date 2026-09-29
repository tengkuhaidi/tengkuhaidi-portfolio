import React from 'react';

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-20 md:py-28 px-4 sm:px-6 max-w-[1240px] mx-auto border-t border-[#dee2de] dark:border-[#24272b] transition-colors">
      
      {/* Section Header */}
      <div className="max-w-2xl mb-12">
        <p className="text-[13px] font-mono text-[#41a1cf] tracking-wider uppercase mb-2">
          01 / Ecosystem &amp; Enterprise Solutions
        </p>
        <h2 className="text-3xl sm:text-4xl font-editorial text-[#2c2c2c] dark:text-white leading-tight mb-3">
          What we research, build, and deploy.
        </h2>
        <p className="text-[15px] sm:text-[16px] text-[#444141] dark:text-[#d1d5db] font-sans leading-relaxed">
          From sovereign platforms to custom enterprise infrastructure, we engineer production systems that automate complex corporate operations.
        </p>
      </div>

      {/* Grid: Flagship Venture vs Custom Enterprise Deployments */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Card 1: Proven Track Record (Legalizin) */}
        <div className="lg:col-span-6 rounded-[22px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b] p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6 text-[12px] font-mono text-[#646464] dark:text-[#a0a5ad]">
              <span className="text-[#41a1cf]">Proven Venture Flagship</span>
              <span>Proprietary Ecosystem</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-editorial text-[#2c2c2c] dark:text-white mb-3">
              Legalizin
            </h3>

            <p className="text-[15px] text-[#444141] dark:text-[#d1d5db] leading-relaxed mb-6 font-sans">
              Our flagship corporate legality and business permit platform. Built with a high-throughput headless architecture, real-time government regulatory integrations, and programmatic search indexing serving enterprise clients nationwide.
            </p>

            <ul className="space-y-2 text-[14px] text-[#646464] dark:text-[#a0a5ad] font-sans mb-8">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf]" />
                Automated corporate incorporation &amp; notary deed workflows
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf]" />
                Instant KBLI 2025 regulatory compliance mapping
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf]" />
                Direct API pipelines with zero manual administrative drag
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
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Card 2: Enterprise Systems, AI & Applied Research */}
        <div className="lg:col-span-6 rounded-[22px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b] p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6 text-[12px] font-mono text-[#646464] dark:text-[#a0a5ad]">
              <span className="text-[#41a1cf]">Enterprise Implementation</span>
              <span>Applied R&amp;D</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-editorial text-[#2c2c2c] dark:text-white mb-3">
              Custom Enterprise Systems &amp; AI
            </h3>

            <p className="text-[15px] text-[#444141] dark:text-[#d1d5db] leading-relaxed mb-6 font-sans">
              We research, architect, and deploy dedicated software ecosystems for growing corporations looking to replace disconnected third-party tools with high-security, custom digital assets.
            </p>

            <ul className="space-y-2 text-[14px] text-[#646464] dark:text-[#a0a5ad] font-sans mb-8">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf]" />
                Autonomous AI agents for document verification &amp; operational routing
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf]" />
                Custom ERPs, financial tracking, and PSAK asset depreciation engines
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#41a1cf]" />
                Physical security &amp; visitor management integrations (VMS)
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
              <span>→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
