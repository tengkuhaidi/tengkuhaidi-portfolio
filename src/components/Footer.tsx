import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#ffffff] border-t border-[#dee2de] py-20 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Large Editorial Statement (Colophon style) */}
        <div className="pb-16 border-b border-[#dee2de] mb-12">
          <p className="text-2xl sm:text-3xl md:text-4xl font-editorial text-[#2c2c2c] max-w-3xl leading-snug">
            Teknologi yang andal tidak berteriak; ia bekerja dengan tenang di balik layar untuk menggerakkan bisnis Anda.
          </p>
        </div>

        {/* Multi-column Footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-[14px]">
          <div className="md:col-span-5 space-y-3">
            <Image
              src="/logo-digitas.png"
              alt="PT Digitas Solusi Indonesia"
              width={130}
              height={28}
              className="h-6 w-auto object-contain"
            />
            <p className="text-[13px] text-[#646464] leading-relaxed max-w-sm">
              PT Digitas Solusi Indonesia adalah studio rekayasa teknologi dan perusahaan induk yang mengoperasikan ekosistem Legalizin.com di Jakarta Selatan.
            </p>
          </div>

          <div className="md:col-span-3 space-y-2">
            <div className="text-[12px] font-mono text-[#646464] uppercase tracking-wider mb-3">Navigasi</div>
            <div><Link href="#ecosystem" className="text-[#444141] hover:text-[#171717]">Ekosistem Legalizin</Link></div>
            <div><Link href="#capabilities" className="text-[#444141] hover:text-[#171717]">Kapabilitas Teknis</Link></div>
            <div><Link href="#portfolio" className="text-[#444141] hover:text-[#171717]">Portofolio Sistem</Link></div>
            <div><Link href="#about" className="text-[#444141] hover:text-[#171717]">Profil Perusahaan</Link></div>
          </div>

          <div className="md:col-span-4 space-y-2">
            <div className="text-[12px] font-mono text-[#646464] uppercase tracking-wider mb-3">Unit &amp; Kontak</div>
            <div>
              <a href="https://legalizin.com" target="_blank" rel="noopener noreferrer" className="text-[#444141] hover:text-[#41a1cf]">
                Legalizin.com (Layanan Legalitas) ↗
              </a>
            </div>
            <div>
              <a href="https://legalizin.com/tools" target="_blank" rel="noopener noreferrer" className="text-[#444141] hover:text-[#41a1cf]">
                Tools KBLI 2025 Interaktif ↗
              </a>
            </div>
            <div className="pt-2 text-[13px] text-[#646464]">
              Surel: <a href="mailto:info@digitasolusindo.com" className="text-[#171717] hover:underline">info@digitasolusindo.com</a>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-16 pt-8 border-t border-[#dee2de] flex flex-col sm:flex-row items-center justify-between text-[12px] font-mono text-[#646464] gap-4">
          <div>
            &copy; {new Date().getFullYear()} PT Digitas Solusi Indonesia. Hak cipta dilindungi.
          </div>
          <div>
            Next.js 16 • Editorial Paper Theme • Zero AI Slop
          </div>
        </div>
      </div>
    </footer>
  );
}
