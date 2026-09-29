import React from 'react';

const capabilities = [
  {
    num: '01',
    title: 'Arsitektur Web & Platform Lanjutan',
    desc: 'Pengembangan web performa tinggi menggunakan Next.js 16, TypeScript, dan React Server Components. Nol hydration error, skor Web Vitals di atas 95, dan penanganan edge caching yang presisi.'
  },
  {
    num: '02',
    title: 'Sistem Kustom ERP, HRIS & Finansial',
    desc: 'Menggantikan spreadsheet rumit dengan platform internal yang terkontrol: absensi multi-cabang, kalkulasi PPh 21 TER, depresiasi aktiva tetap PSAK, hingga pelacakan dokumen legal perusahaan.'
  },
  {
    num: '03',
    title: 'Sistem Desain UI/UX & Antarmuka B2B',
    desc: 'Bahasa visual bersih dan terukur. Hierarki tipografi yang lugas, palet warna bersahaja, dan struktur antarmuka yang mengutamakan kecepatan navigasi serta kejelasan informasi pengguna.'
  },
  {
    num: '04',
    title: 'Pipeline Pengindeksan & Otomasi SEO',
    desc: 'Menghubungkan sistem konten terdesentralisasi langsung ke Google Search Console dan Indexing API. Struktur informasi berbasis silo, metadata valid, dan arsitektur konten yang terayap dalam hitungan menit.'
  }
];

export default function Services() {
  return (
    <section id="capabilities" className="py-20 md:py-28 px-4 sm:px-6 max-w-[1200px] mx-auto border-t border-[#dee2de] dark:border-[#24272b]">
      <div className="max-w-2xl mb-14">
        <div className="text-[13px] font-mono text-[#646464] dark:text-[#858c96] mb-2 tracking-tight">
          02 / Kapabilitas Teknis
        </div>
        <h2 className="text-3xl sm:text-4xl font-editorial text-[#2c2c2c] dark:text-[#f3f4f6] leading-tight mb-4">
          Prinsip rekayasa yang disiplin, ringkas, dan dapat diandalkan.
        </h2>
        <p className="text-[16px] text-[#444141] dark:text-[#c9ccd1] leading-relaxed">
          Kami menolak penulisan kode berlebihan. Kode terbaik adalah kode yang menyelesaikan masalah nyata dengan dependensi minimal dan siklus pemeliharaan yang tenang.
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
              <div className="text-[12px] font-mono text-[#b4b8b4] dark:text-[#858c96] mb-4">
                [{c.num}]
              </div>
              <h3 className="text-xl font-editorial text-[#2c2c2c] dark:text-[#f3f4f6] mb-3">
                {c.title}
              </h3>
              <p className="text-[15px] text-[#444141] dark:text-[#c9ccd1] leading-relaxed">
                {c.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
