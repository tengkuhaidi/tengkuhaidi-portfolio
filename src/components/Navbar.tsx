'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-5 sm:top-8 left-0 right-0 z-50 flex justify-center px-4">
      {/* Frosted Navigation Pill */}
      <div className="w-full max-w-4xl bg-white/80 dark:bg-[#141517]/80 backdrop-blur-xl border border-[#dee2de] dark:border-[#24272b] rounded-full px-5 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] flex items-center justify-between transition-all">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/logo-digitas.png"
            alt="PT Digitas Solusi Indonesia"
            width={120}
            height={26}
            className="h-6 w-auto object-contain dark:brightness-0 dark:invert transition-transform group-hover:scale-105"
            priority
          />
          <span className="hidden sm:inline-block text-[11px] font-mono tracking-tight text-[#646464] dark:text-[#858c96] border-l border-[#dee2de] dark:border-[#24272b] pl-2.5">
            Holding &amp; Systems
          </span>
        </Link>

        {/* Center Links */}
        <nav className="hidden md:flex items-center gap-7 text-[15px] font-medium text-[#444141] dark:text-[#c9ccd1]">
          <Link href="#ecosystem" className="hover:text-[#171717] dark:hover:text-white transition-colors">
            Ekosistem
          </Link>
          <Link href="#capabilities" className="hover:text-[#171717] dark:hover:text-white transition-colors">
            Kapabilitas
          </Link>
          <Link href="#portfolio" className="hover:text-[#171717] dark:hover:text-white transition-colors">
            Sistem &amp; Karya
          </Link>
          <Link href="#about" className="hover:text-[#171717] dark:hover:text-white transition-colors">
            Tentang
          </Link>
        </nav>

        {/* Outlined Action Buttons + Theme Toggle */}
        <div className="hidden md:flex items-center gap-2.5">
          <ThemeToggle />

          <a
            href="https://legalizin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] border border-[#dee2de] dark:border-[#24272b] text-[13px] font-medium text-[#444141] dark:text-[#c9ccd1] hover:text-[#171717] dark:hover:text-white hover:border-[#b4b8b4] transition-all bg-white/70 dark:bg-neutral-900/60"
          >
            <span>Legalizin</span>
            <span className="text-[10px] font-mono text-[#41a1cf]">↗</span>
          </a>

          <a
            href="https://wa.me/6281235247820"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[8px] border border-[#41a1cf] text-[14px] font-medium text-[#41a1cf] hover:bg-[#41a1cf]/10 transition-all group bg-white/50 dark:bg-neutral-900/50"
          >
            <span>Mulai Diskusi</span>
            <span className="inline-flex items-center justify-center size-4 rounded-full border border-[#41a1cf]/60 text-[10px] group-hover:translate-x-0.5 transition-transform">
              →
            </span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 rounded-full text-[#444141] dark:text-[#c9ccd1] hover:text-[#171717] dark:hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden absolute top-16 left-4 right-4 bg-white/95 dark:bg-[#141517]/95 backdrop-blur-xl border border-[#dee2de] dark:border-[#24272b] rounded-2xl p-5 shadow-2xl space-y-4">
          <Link
            href="#ecosystem"
            onClick={() => setMobileOpen(false)}
            className="block text-[15px] font-medium text-[#2c2c2c] dark:text-[#f3f4f6]"
          >
            Ekosistem Legalizin
          </Link>
          <Link
            href="#capabilities"
            onClick={() => setMobileOpen(false)}
            className="block text-[15px] font-medium text-[#2c2c2c] dark:text-[#f3f4f6]"
          >
            Kapabilitas Teknis
          </Link>
          <Link
            href="#portfolio"
            onClick={() => setMobileOpen(false)}
            className="block text-[15px] font-medium text-[#2c2c2c] dark:text-[#f3f4f6]"
          >
            Sistem &amp; Karya
          </Link>
          <Link
            href="#about"
            onClick={() => setMobileOpen(false)}
            className="block text-[15px] font-medium text-[#2c2c2c] dark:text-[#f3f4f6]"
          >
            Tentang Perusahaan
          </Link>
          <div className="pt-3 border-t border-[#dee2de] dark:border-[#24272b] flex flex-col gap-2.5">
            <a
              href="https://legalizin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-2 rounded-[8px] border border-[#dee2de] dark:border-[#24272b] text-[13px] font-medium text-[#444141] dark:text-[#c9ccd1]"
            >
              Kunjungi Legalizin.com ↗
            </a>
            <a
              href="https://wa.me/6281235247820"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center py-2.5 rounded-[8px] border border-[#41a1cf] text-[14px] font-medium text-[#41a1cf] bg-[#41a1cf]/5"
            >
              Mulai Diskusi WhatsApp →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
