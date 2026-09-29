import React from 'react';
import Link from 'next/link';
import { ArrowRight, Terminal, Shield, Cpu, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-neutral-950">
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 size-[400px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Anti-Slop Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs font-medium text-neutral-300 mb-8 backdrop-blur-md hover:border-neutral-700 transition-colors">
          <span className="size-2 rounded-full bg-blue-500 animate-ping" />
          <span className="text-neutral-400 font-mono">PT Digitas Solusi Indonesia</span>
          <span className="text-neutral-600">•</span>
          <span className="text-blue-400 font-semibold">Technology Venture & Systems Holding</span>
        </div>

        {/* Hero Headline (Sharp, Concrete, No Jargon) */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
          Membangun Sistem Digital Nyata.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400">
            Bukan Sekadar Ekspektasi.
          </span>
        </h1>

        {/* Value Proposition (The 3-Second Rule) */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-400 leading-relaxed mb-10">
          Studio rekayasa perangkat lunak dan holding venture di Jakarta Selatan. Kami merancang arsitektur web berkinerja tinggi, mengelola platform LegalTech terintegrasi nasional, dan membangun sistem ERP/operasional kustom untuk bisnis yang menuntut stabilitas tinggi.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://wa.me/6281235247820"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-neutral-950 bg-white hover:bg-neutral-200 transition-all shadow-xl shadow-white/5 active:scale-95"
          >
            <span>Konsultasi Rekayasa Sistem</span>
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-neutral-300 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800/80 hover:text-white transition-all"
          >
            <span>Lihat Hasil Kerja Nyata</span>
          </a>
        </div>

        {/* Trust & Real Highlights Bar */}
        <div className="pt-8 border-t border-neutral-900/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/40">
            <div className="text-xs font-mono text-neutral-500 mb-1">VENTURE UTAMA</div>
            <div className="text-base font-semibold text-white flex items-center gap-1.5">
              <span>Legalizin.com</span>
              <CheckCircle2 className="size-4 text-emerald-400" />
            </div>
            <div className="text-xs text-neutral-400 mt-1">Platform Legalitas OSS RBA</div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/40">
            <div className="text-xs font-mono text-neutral-500 mb-1">ARSITEKTUR STACK</div>
            <div className="text-base font-semibold text-white flex items-center gap-1.5">
              <span>Modern Cloud Edge</span>
            </div>
            <div className="text-xs text-neutral-400 mt-1">Next.js 16 • TS • Vercel • Laravel</div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/40">
            <div className="text-xs font-mono text-neutral-500 mb-1">ENTITAS RESMI</div>
            <div className="text-base font-semibold text-white flex items-center gap-1.5">
              <span>Perseroan Terbatas</span>
            </div>
            <div className="text-xs text-neutral-400 mt-1">SK Kemenkumham RI Terdaftar</div>
          </div>

          <div className="p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/40">
            <div className="text-xs font-mono text-neutral-500 mb-1">KANTOR OPERASIONAL</div>
            <div className="text-base font-semibold text-white flex items-center gap-1.5">
              <span>Alamanda Tower</span>
            </div>
            <div className="text-xs text-neutral-400 mt-1">TB. Simatupang, Jakarta Selatan</div>
          </div>
        </div>
      </div>
    </section>
  );
}
