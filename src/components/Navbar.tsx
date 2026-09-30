'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

const WA_URL = "https://wa.me/6281235247820?text=Halo%20Tengku%2C%20saya%20ingin%20berdiskusi%20mengenai%20kebutuhan%20teknologi%2C%20sistem%20software%2C%20dan%20growth%20digital%20untuk%20perusahaan.";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Systems & Work', href: '#portfolio' },
    { label: 'About', href: '#about' },
  ];

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none">
        
        {/* Desktop Navbar (Pill style) */}
        <nav className="hidden md:flex pointer-events-auto items-center justify-between gap-6 px-3.5 py-2 rounded-full border border-[#dee2de] dark:border-[#24272b] bg-[#fefffc]/85 dark:bg-[#0c0d0e]/85 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-colors">
          
          {/* Brand Icon Only */}
          <Link href="/" aria-label="Home" className="flex items-center gap-2 pr-3 border-r border-[#dee2de] dark:border-neutral-800">
            <span className="font-editorial text-[17px] font-medium tracking-tight text-[#171717] dark:text-white">
              Tengku H.
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="flex items-center gap-5 text-[14px] text-[#444141] dark:text-[#d1d5db]">
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://legalizin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#41a1cf] hover:opacity-80 transition-opacity font-medium"
            >
              <span>Legalizin</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="flex items-center gap-2 pl-1">
            <ThemeToggle />
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full border border-[#41a1cf] text-[#41a1cf] dark:text-[#52b4e5] text-[13px] font-medium hover:bg-[#41a1cf] hover:text-white transition-all flex items-center gap-1.5"
            >
              <span>Start Discussion</span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>

        </nav>

        {/* Mobile Navbar: Floating 3-part elements 1:1 like General Intelligence Company */}
        <div className="flex md:hidden pointer-events-auto items-center justify-between w-full max-w-[440px] px-1">
          
          {/* Left: Monogram icon button */}
          <Link
            href="/"
            aria-label="Home"
            className="w-10 h-10 rounded-xl backdrop-blur-md bg-black/25 dark:bg-white/10 border border-white/20 flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.15)] active:scale-95 transition-transform font-editorial text-[16px] text-white"
          >
            TH
          </Link>

          {/* Center: Dark Pill CTA Button */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-black/45 dark:bg-black/60 backdrop-blur-md border border-white/20 text-white text-[13px] font-sans font-medium flex items-center gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.2)] active:scale-95 transition-transform"
          >
            <span>Start Discussion</span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>

          {/* Right: Glass hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 rounded-xl backdrop-blur-md bg-black/25 dark:bg-white/10 border border-white/20 flex flex-col justify-center items-center gap-[4px] focus:outline-none cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.15)] active:scale-95 transition-transform"
            aria-label="Toggle menu"
          >
            <span className="block w-4 h-[1.75px] rounded-full bg-white" />
            <span className="block w-4 h-[1.75px] rounded-full bg-white" />
            <span className="block w-4 h-[1.75px] rounded-full bg-white" />
          </button>

        </div>

      </header>

      {/* Fullscreen Mobile Navigation Overlay (1:1 General Intelligence Company style) */}
      <div
        className={`fixed inset-0 z-[100] h-dvh w-full bg-[#fefffc] dark:bg-[#0c0d0e] transition-all duration-500 flex flex-col justify-between p-6 sm:p-8 md:hidden ${
          isOpen
            ? 'opacity-100 pointer-events-auto scale-100'
            : 'opacity-0 pointer-events-none scale-95'
        }`}
      >
        {/* Top Bar: Icon Mark, Dark Pill CTA, Close X */}
        <div className="flex items-center justify-between w-full pt-2">
          {/* Left Brand Mark */}
          <div className="w-10 h-10 rounded-xl backdrop-blur-sm bg-neutral-100 dark:bg-neutral-800/80 border border-[#dee2de] dark:border-[#24272b] flex items-center justify-center font-editorial text-[16px] text-[#171717] dark:text-white">
            TH
          </div>

          {/* Center Pill Button */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 rounded-full bg-[#171717] dark:bg-white text-white dark:text-[#171717] text-[13px] font-sans font-medium flex items-center gap-1.5 shadow-sm active:scale-95 transition-transform"
          >
            <span>Start Discussion</span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>

          {/* Right Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="w-10 h-10 rounded-xl border border-[#dee2de] dark:border-[#24272b] flex items-center justify-center text-[#2c2c2c] dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Center: Stacked Large Serif Menu Links with Stagger Animation */}
        <div className="flex flex-col items-center justify-center space-y-4 my-auto">
          {navLinks.map((item, idx) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              style={{
                transitionDelay: isOpen ? `${idx * 60 + 100}ms` : '0ms'
              }}
              className={`text-4xl sm:text-5xl font-editorial font-medium tracking-tight text-[#171717] dark:text-white hover:text-[#41a1cf] dark:hover:text-[#41a1cf] transition-all duration-300 transform ${
                isOpen
                  ? 'opacity-100 translate-y-0 blur-0'
                  : 'opacity-0 translate-y-6 blur-sm'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://legalizin.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            style={{
              transitionDelay: isOpen ? `${navLinks.length * 60 + 100}ms` : '0ms'
            }}
            className={`text-4xl sm:text-5xl font-editorial font-medium tracking-tight text-[#41a1cf] hover:opacity-80 transition-all duration-300 transform flex items-center gap-2 ${
              isOpen
                ? 'opacity-100 translate-y-0 blur-0'
                : 'opacity-0 translate-y-6 blur-sm'
            }`}
          >
            <span>Legalizin</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>

        {/* Bottom Bar: Social Icons & Copyright */}
        <div className="flex flex-col items-center gap-4 pb-4">
          <div className="flex items-center gap-3">
            {/* WhatsApp Icon Box */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="w-10 h-10 rounded-lg border border-[#dee2de] dark:border-[#24272b] flex items-center justify-center text-[#2c2c2c] dark:text-white hover:border-[#41a1cf] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>

            {/* GitHub Profile */}
            <a
              href="https://github.com/tengkuhaidi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-lg border border-[#dee2de] dark:border-[#24272b] flex items-center justify-center text-[#2c2c2c] dark:text-white hover:border-[#41a1cf] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          </div>

          <p className="font-mono text-[12px] text-[#646464] dark:text-[#a0a5ad] tracking-tight">
            © {new Date().getFullYear()} Tengku Hidayat Haidi
          </p>
        </div>

      </div>
    </>
  );
}
