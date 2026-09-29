import React from 'react';
import { Building2, ShieldCheck, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

export default function AboutCompany() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Company Story & Positioning */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 mb-4">
              <Building2 className="size-3.5" />
              <span>PROFIL PERUSAHAAN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
              Membangun Fondasi Teknologi Indonesia dari Jakarta Selatan
            </h2>
            <div className="space-y-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-white">PT Digitas Solusi Indonesia</strong> didirikan dengan satu komitmen mendasar: mengakhiri era pengembangan sistem digital yang penuh jargon kosong dan estimasi biaya fiktif. Kami hadir sebagai studio rekayasa perangkat lunak dan holding sistem yang beroperasi dengan transparansi penuh.
              </p>
              <p>
                Melalui anak usaha utama kami, <strong className="text-emerald-400">Legalizin</strong>, kami membuktikan kemampuan membangun platform kepatuhan hukum dan perizinan bisnis berskala nasional yang melayani ribuan pelaku usaha dari Sabang sampai Merauke.
              </p>
              <p>
                Seluruh proyek enterprise yang kami tangani—mulai dari sistem penggajian multi-lokasi, inventarisasi aset, hingga platform korporat—dikerjakan langsung oleh tim teknis in-house dengan arsitektur modern (Next.js, TypeScript, PostgreSQL, cloud serverless).
              </p>
            </div>
          </div>

          {/* Verifiable Legal Entity & Headquarters Card */}
          <div className="lg:col-span-5 rounded-2xl bg-neutral-900/40 border border-neutral-800 p-8">
            <h3 className="text-lg font-bold text-white mb-6 pb-4 border-b border-neutral-800 flex items-center justify-between">
              <span>Legalitas &amp; Kantor Resmi</span>
              <ShieldCheck className="size-5 text-emerald-400" />
            </h3>

            <div className="space-y-5">
              <div>
                <div className="text-xs font-mono text-neutral-500 mb-1">NAMA ENTITAS HUKUM</div>
                <div className="text-sm font-semibold text-white">PT DIGITAS SOLUSI INDONESIA</div>
                <div className="text-xs text-neutral-400 mt-0.5">Badan Hukum Perseroan Terbatas Resmi SK Kemenkumham RI</div>
              </div>

              <div>
                <div className="text-xs font-mono text-neutral-500 mb-1">ALAMAT KANTOR PUSAT</div>
                <div className="text-xs text-neutral-300 leading-relaxed flex items-start gap-2">
                  <MapPin className="size-4 text-neutral-400 shrink-0 mt-0.5" />
                  <span>
                    Alamanda Tower Lantai 2 Unit H 1, Jalan TB. Simatupang Nomor 23 – 24, RT. 1/ RW. 1, Cilandak Barat, Cilandak, Jakarta Selatan, DKI Jakarta 12430
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-800/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-xs font-mono text-neutral-500 mb-1">EMAIL RESMI</div>
                  <a href="mailto:info@digitasolusindo.com" className="text-xs text-sky-400 hover:underline flex items-center gap-1">
                    <Mail className="size-3.5" />
                    <span>info@digitasolusindo.com</span>
                  </a>
                </div>
                <div>
                  <div className="text-xs font-mono text-neutral-500 mb-1">WHATSAPP / TELP</div>
                  <a href="https://wa.me/6281235247820" target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-400 hover:underline flex items-center gap-1">
                    <Phone className="size-3.5" />
                    <span>+62 812-3524-7820</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
