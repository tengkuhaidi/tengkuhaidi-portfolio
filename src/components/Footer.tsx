import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-900 py-16 px-4 sm:px-6 lg:px-8 text-neutral-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-digitas.png"
                alt="PT Digitas Solusi Indonesia"
                width={150}
                height={32}
                className="h-7 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              PT Digitas Solusi Indonesia adalah studio rekayasa teknologi dan entitas induk yang menaungi platform LegalTech terintegrasi Legalizin.com serta pengembangan enterprise web systems di Indonesia.
            </p>
            <div className="text-[11px] font-mono text-neutral-500">
              Alamanda Tower Lt. 2, Jl. TB. Simatupang, Jakarta Selatan 12430
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-mono font-semibold text-white uppercase tracking-wider">Navigasi</div>
            <ul className="space-y-2 text-xs">
              <li><Link href="#ecosystem" className="hover:text-white transition-colors">Ekosistem Bisnis</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Kapabilitas Teknis</Link></li>
              <li><Link href="#portfolio" className="hover:text-white transition-colors">Portofolio &amp; Sistem</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">Tentang Perusahaan</Link></li>
            </ul>
          </div>

          {/* Holding Ecosystem Units */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono font-semibold text-white uppercase tracking-wider">Unit Ekosistem</div>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://legalizin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                >
                  <ShieldCheck className="size-3.5 text-emerald-400" />
                  <span>Legalizin.com (LegalTech)</span>
                  <ArrowUpRight className="size-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://legalizin.com/tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Tools &amp; Cek KBLI 2025</span>
                  <ArrowUpRight className="size-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://legalizin.com/layanan/pendirian-pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Pendirian PT &amp; Perizinan OSS</span>
                  <ArrowUpRight className="size-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-mono font-semibold text-white uppercase tracking-wider">Kontak</div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="mailto:info@digitasolusindo.com" className="hover:text-white transition-colors">
                  info@digitasolusindo.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/6281235247820" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-600 gap-4">
          <div>
            &copy; {new Date().getFullYear()} PT Digitas Solusi Indonesia. Seluruh hak cipta dilindungi undang-undang.
          </div>
          <div className="flex items-center gap-4 text-neutral-500 font-mono text-[11px]">
            <span>Next.js 16 App Router</span>
            <span>•</span>
            <span>TypeScript Strict</span>
            <span>•</span>
            <span>Zero AI-Slop Guaranteed</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
