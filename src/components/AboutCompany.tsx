import React from 'react';

export default function AboutCompany() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 max-w-[1200px] mx-auto border-t border-[#dee2de] dark:border-[#24272b]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        {/* Left: Manifesto / Story */}
        <div className="md:col-span-7">
          <div className="text-[13px] font-mono text-[#646464] dark:text-[#858c96] mb-2 tracking-tight">
            04 / Tentang Perusahaan
          </div>
          <h2 className="text-3xl sm:text-4xl font-editorial text-[#2c2c2c] dark:text-[#f3f4f6] leading-tight mb-6">
            Membangun teknologi dengan integritas dan ketenangan.
          </h2>
          <div className="space-y-4 text-[16px] text-[#444141] dark:text-[#c9ccd1] leading-relaxed">
            <p>
              PT Digitas Solusi Indonesia beroperasi dari Jakarta Selatan. Kami melihat terlalu banyak proyek digital gagal karena terjebak dalam jargon berlebihan, janji fiktif kecerdasan buatan, dan arsitektur yang tidak siap dipelihara dalam jangka panjang.
            </p>
            <p>
              Pendekatan kami sederhana: kami memulai dari proses bisnis nyata, menyederhanakan alur kerja, dan menulis sistem yang cepat, ringan, serta stabil. Bukti paling nyata dari prinsip ini tercermin pada anak perusahaan kami, <a href="https://legalizin.com" target="_blank" rel="noopener noreferrer" className="underline decoration-[#41a1cf] underline-offset-4 text-[#171717] dark:text-white hover:text-[#41a1cf]">Legalizin.com</a>, yang kini melayani ribuan badan usaha di seluruh wilayah Indonesia.
            </p>
          </div>
        </div>

        {/* Right: Clean White / Dark Card for Legal Entity */}
        <div className="md:col-span-5 p-7 rounded-[16px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b] shadow-[0_1px_1px_rgba(0,0,0,0.04)] space-y-5">
          <div className="text-[12px] font-mono tracking-wider text-[#646464] dark:text-[#858c96] uppercase border-b border-[#dee2de] dark:border-[#24272b] pb-3">
            Identitas Resmi Entitas
          </div>

          <div>
            <div className="text-[11px] font-mono text-[#646464] dark:text-[#858c96]">BADAN HUKUM</div>
            <div className="text-[15px] font-medium text-[#171717] dark:text-[#f3f4f6]">PT DIGITAS SOLUSI INDONESIA</div>
            <div className="text-[12px] text-[#646464] dark:text-[#858c96]">SK Kemenkumham RI Terdaftar</div>
          </div>

          <div>
            <div className="text-[11px] font-mono text-[#646464] dark:text-[#858c96]">KANTOR OPERASIONAL</div>
            <div className="text-[13px] text-[#444141] dark:text-[#c9ccd1] leading-relaxed">
              Alamanda Tower Lantai 2 Unit H 1, Jl. TB. Simatupang No. 23–24, Cilandak Barat, Cilandak, Jakarta Selatan, DKI Jakarta 12430
            </div>
          </div>

          <div className="pt-2 border-t border-[#dee2de] dark:border-[#24272b] flex flex-col gap-2 text-[13px]">
            <div>
              <span className="text-[#646464] dark:text-[#858c96]">Surel: </span>
              <a href="mailto:info@digitasolusindo.com" className="text-[#171717] dark:text-[#f3f4f6] hover:underline">
                info@digitasolusindo.com
              </a>
            </div>
            <div>
              <span className="text-[#646464] dark:text-[#858c96]">WhatsApp: </span>
              <a href="https://wa.me/6281235247820" target="_blank" rel="noopener noreferrer" className="text-[#41a1cf] hover:underline">
                +62 812-3524-7820
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
