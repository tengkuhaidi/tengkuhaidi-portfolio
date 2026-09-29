import React from 'react';

const capabilities = [
  {
    num: '01',
    title: 'Implementasi AI untuk Bisnis & Autonomous Agents',
    desc: 'Kami merancang dan menerapkan sistem AI operasional nyata: agentic workflow untuk review dokumen legal, otomasi proses perizinan, verifikasi silang database KBLI, serta bot asisten administratif yang memangkas 80% beban manual tanpa halusinasi.'
  },
  {
    num: '02',
    title: 'Arsitektur Web & Platform Lanjutan (Next.js 16)',
    desc: 'Pengembangan web performa tinggi menggunakan Next.js 16, TypeScript, dan React Server Components. Nol hydration error, skor Web Vitals di atas 95, dan penanganan edge caching yang presisi untuk skalabilitas tinggi.'
  },
  {
    num: '03',
    title: 'Sistem Kustom ERP, HRIS & Finansial',
    desc: 'Menggantikan spreadsheet rumit dengan platform internal yang terkontrol: absensi multi-cabang, kalkulasi PPh 21 TER otomatis, depresiasi aktiva tetap PSAK, hingga pelacakan dokumen legal perusahaan.'
  },
  {
    num: '04',
    title: 'Pipeline Pengindeksan & Otomasi SEO Google',
    desc: 'Menghubungkan sistem konten terdesentralisasi langsung ke Google Search Console dan Indexing API. Struktur informasi berbasis silo, metadata valid, dan arsitektur konten yang terayap dalam hitungan menit.'
  }
];

export default function Services() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 max-w-[1200px] mx-auto border-t border-[#dee2de] dark:border-[#24272b]">
      <div className="max-w-2xl mb-14">
        <div className="text-[13px] font-mono text-[#646464] dark:text-[#a0a5ad] mb-2 tracking-tight">
          Ringkasan Layanan Teknis
        </div>
        <h2 className="text-3xl sm:text-4xl font-editorial text-[#2c2c2c] dark:text-white leading-tight mb-4">
          Empat pilar rekayasa untuk mengakselerasi operasional perusahaan.
        </h2>
        <p className="text-[16px] text-[#444141] dark:text-[#d1d5db] leading-relaxed">
          Dari implementasi kecerdasan buatan otonom hingga sistem ERP terpadu, seluruh layanan dikerjakan oleh tim rekayasa in-house dengan standar keamanan enterprise.
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {capabilities.map((c, i) => (
          <div
            key={i}
            className="p-8 rounded-[16px] bg-[#ffffff] dark:bg-[#141517] border border-[#dee2de] dark:border-[#24272b] shadow-[0_1px_1px_rgba(0,0,0,0.04)] flex flex-col justify-between"
          >
            <div>
              <div className="text-[12px] font-mono text-[#41a1cf] mb-4">
                [{c.num}]
              </div>
              <h3 className="text-xl font-editorial text-[#2c2c2c] dark:text-white mb-3">
                {c.title}
              </h3>
              <p className="text-[15px] text-[#444141] dark:text-[#d1d5db] leading-relaxed">
                {c.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
