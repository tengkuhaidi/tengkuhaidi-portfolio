'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Menu, X, ShieldCheck, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-950/85 backdrop-blur-xl border-b border-neutral-800/80 py-3.5 shadow-2xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-9 w-auto">
              <Image
                src="/logo-digitas.png"
                alt="PT Digitas Solusi Indonesia"
                width={160}
                height={36}
                className="h-8 md:h-9 w-auto object-contain brightness-0 invert transition-transform group-hover:scale-105"
                priority
              />
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-900 border border-neutral-800 text-neutral-400">
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Holding & Studio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#ecosystem"
              className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
            >
              Ekosistem Bisnis
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
            >
              Kapabilitas Teknis
            </Link>
            <Link
              href="#portfolio"
              className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
            >
              Portofolio & Sistem
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
            >
              Tentang Kami
            </Link>
          </nav>

          {/* CTA & Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://legalizin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 hover:bg-emerald-900/50 transition-all"
            >
              <ShieldCheck className="size-3.5" />
              <span>Unit Legalizin.com</span>
            </a>
            <a
              href="https://wa.me/6281235247820"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-neutral-950 bg-white hover:bg-neutral-200 transition-all shadow-md shadow-white/10 active:scale-95"
            >
              <span>Mulai Diskusi</span>
              <ArrowRight className="size-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950 border-b border-neutral-800 px-4 pt-4 pb-6 space-y-4 shadow-2xl">
          <Link
            href="#ecosystem"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-neutral-200 hover:text-white"
          >
            Ekosistem Bisnis
          </Link>
          <Link
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-neutral-200 hover:text-white"
          >
            Kapabilitas Teknis
          </Link>
          <Link
            href="#portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-neutral-200 hover:text-white"
          >
            Portofolio & Sistem
          </Link>
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-neutral-200 hover:text-white"
          >
            Tentang Kami
          </Link>
          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3">
            <a
              href="https://legalizin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/60"
            >
              <ShieldCheck className="size-4" />
              <span>Kunjungi Unit Usaha Legalizin.com</span>
            </a>
            <a
              href="https://wa.me/6281235247820"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-xs font-bold text-neutral-950 bg-white"
            >
              <span>Hubungi Kami via WhatsApp</span>
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
