import React from 'react';
import Image from 'next/image';
import { ExternalLink, ShieldCheck, Zap, Database, Globe2, ArrowRight } from 'lucide-react';

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 mb-4">
            <ShieldCheck className="size-3.5" />
            <span>HOLDING VENTURE PILAR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Legalizin: Ekosistem LegalTech di Bawah Naungan Digitas
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            PT Digitas Solusi Indonesia tidak hanya melayani klien eksternal, namun juga merancang, mendanai, dan mengoperasikan produk teknologi mandiri berskala nasional.
          </p>
        </div>

        {/* Feature Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Card (8 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-neutral-900/40 border border-neutral-800 p-8 relative overflow-hidden group hover:border-neutral-700 transition-all">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Layanan B2B Berizin Resmi
                </span>
                <a
                  href="https://legalizin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Kunjungi legalizin.com</span>
                  <ExternalLink className="size-3.5" />
                </a>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Layanan Legalitas Badan Usaha &amp; Kepatuhan Regulasi Indonesia
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Menyediakan pengurusan pendirian PT, CV, PMA, PT Perorangan, Perubahan Akta Notaris, pendaftaran Hak Merek DJKI, dan perizinan berusaha OSS RBA dengan transparansi biaya tanpa overclaim.
              </p>

              {/* Real Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 pt-6 border-t border-neutral-800/60">
                <div>
                  <div className="text-xl font-bold text-white">1.500+</div>
                  <div className="text-xs text-neutral-500">Database KBLI 2025 BPS</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">100%</div>
                  <div className="text-xs text-neutral-500">Regulasi AHU &amp; OSS RBA</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Sub-48 Jam</div>
                  <div className="text-xs text-neutral-500">Proses Akta Notaris Resmi</div>
                </div>
              </div>

              {/* Showcase Image */}
              <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 aspect-[16/9] relative">
                <Image
                  src="/portfolio/web-legalizin.png"
                  alt="Legalizin Web Platform"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* Side Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 hover:border-neutral-700 transition-all">
              <div className="size-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                <Zap className="size-5" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Automasi Pipeline Headless CMS</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Frontend Next.js terpisah dari headless WordPress engine, terhubung langsung dengan Google Indexing API untuk perayapan instan ratusan artikel riset perizinan.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 hover:border-neutral-700 transition-all">
              <div className="size-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
                <Database className="size-5" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Tools Bisnis &amp; Kalkulator Terbuka</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Kami membangun tool interaktif publik seperti Cek KBLI 2025, kalkulator PPN/PPh, dan pengecekan zonasi RDTR Jakarta untuk membantu ratusan ribu calon founder usaha.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-900/30 border border-neutral-800">
              <h4 className="text-sm font-semibold text-neutral-300 mb-2">Sinergi Teknologi &amp; Legalitas</h4>
              <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                Di Digitas Solusi Indonesia, kami tidak hanya memahami baris kode dan cloud architecture, namun juga kepatuhan hukum perseroan dan keamanan transaksi digital di Indonesia.
              </p>
              <a
                href="https://legalizin.com/layanan/pendirian-pt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
              >
                <span>Pelajari Pendirian PT Bersama Legalizin</span>
                <ArrowRight className="size-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
