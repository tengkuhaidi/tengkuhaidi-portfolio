'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-4 py-2 rounded-full border border-[#dee2de] dark:border-[#24272b] bg-[#fefffc]/85 dark:bg-[#0c0d0e]/85 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-colors">
        
        {/* Brand Logo & Name with dynamic dark mode switch */}
        <Link href="/" className="flex items-center gap-2 pr-2 border-r border-[#dee2de] dark:border-neutral-800">
          <div className="relative w-7 h-7 flex items-center justify-center">
            {/* Light Mode Logo */}
            <Image
              src="/logo-digitas.png"
              alt="PT Digitas Solusi Indonesia"
              width={28}
              height={28}
              className="rounded-full object-contain dark:hidden"
            />
            {/* Dark Mode Logo */}
            <Image
              src="/logo-digitas-dark.png"
              alt="PT Digitas Solusi Indonesia"
              width={28}
              height={28}
              className="rounded-full object-contain hidden dark:block"
            />
          </div>
          <span className="font-editorial text-[17px] text-[#2c2c2c] dark:text-white font-medium tracking-tight">
            Digitas
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-5 text-[14px] text-[#444141] dark:text-[#d1d5db]">
          <Link href="#ecosystem" className="hover:text-black dark:hover:text-white transition-colors">
            Ecosystem
          </Link>
          <Link href="#capabilities" className="hover:text-black dark:hover:text-white transition-colors">
            Capabilities
          </Link>
          <Link href="#portfolio" className="hover:text-black dark:hover:text-white transition-colors">
            Systems &amp; Work
          </Link>
          <Link href="#about" className="hover:text-black dark:hover:text-white transition-colors">
            About
          </Link>
          <a
            href="https://legalizin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#41a1cf] hover:opacity-80 transition-opacity font-medium"
          >
            <span>Legalizin</span>
            <span className="text-[11px]">↗</span>
          </a>
        </div>

        {/* Right Actions: Theme Toggle & Primary Action */}
        <div className="flex items-center gap-2 pl-1">
          <ThemeToggle />
          <a
            href="https://wa.me/6281235247820"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-full border border-[#41a1cf] text-[#41a1cf] dark:text-[#52b4e5] text-[13px] font-medium hover:bg-[#41a1cf] hover:text-white transition-all flex items-center gap-1.5"
          >
            <span>Start Discussion</span>
            <span className="text-[10px]">→</span>
          </a>
        </div>

      </nav>
    </header>
  );
}
