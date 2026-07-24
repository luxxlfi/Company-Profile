import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const KBLI_DATA = [
  {
    code: "41018",
    title: "Konstruksi Gedung Tempat Hiburan Dan Olahraga",
  },
  {
    code: "41019",
    title: "Konstruksi Gedung Lainnya",
  },
  {
    code: "42101",
    title: "Konstruksi Bangunan Sipil Jalan",
  },
  {
    code: "42201",
    title: "Konstruksi Jaringan Irigasi Dan Drainase",
  },
  {
    code: "43120",
    title: "Penyiapan Lahan",
  },
  {
    code: "43905",
    title: "Penyewaan Alat Konstruksi Dengan Operator",
  },
  {
    code: "46100",
    title: "Perdagangan Besar Atas Dasar Balas Jasa (Fee) Atau Kontrak",
  },
  {
    code: "09900",
    title: "Aktivitas Penunjang Pertambangan Dan Penggalian Lainnya",
  },
  {
    code: "41012",
    title: "Konstruksi Gedung Perkantoran",
  },
  {
    code: "41013",
    title: "Konstruksi Gedung Industri",
  },
  {
    code: "14111",
    title: "Industri Pakaian Jadi (Konveksi) Dari Tekstil",
  },
  {
    code: "46421",
    title: "Perdagangan Besar Alat Tulis Dan Gambar",
  },
  {
    code: "52101",
    title: "Pergudangan Dan Penyimpanan",
  },
  {
    code: "77393",
    title:
      "Aktivitas Penyewaan Dan Sewa Guna Usaha Tanpa Hak Opsi Mesin Dan Peralatan Konstruksi Dan Teknik Sipil",
  },
  {
    code: "78300",
    title:
      "Penyediaan Sumber Daya Manusia Dan Manajemen Fungsi Sumber Daya Manusia",
  },
  {
    code: "81210",
    title: "Aktivitas Kebersihan Umum Bangunan",
  },
];

export default function KBLI() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.from(".kbli-header", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      }).from(
        ".kbli-card",
        {
          opacity: 0,
          y: 40,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "all",
        },
        "-=0.3",
      );
    },
    { scope: sectionRef },
  );

  return (
    <div id="legalitas" ref={sectionRef} className="mt-24">
      {/* Header */}
      <div className="kbli-header mb-16 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
          <Building2 size={16} />
          Legalitas & Klasifikasi
        </span>

        <h2 className="mt-6 text-3xl font-bold text-primary md:text-5xl">
          Klasifikasi Baku Lapangan
          <br />
          Usaha Indonesia (KBLI)
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-on-surface-variant md:text-lg">
          PT Pisut Jaya Mandiri memiliki berbagai klasifikasi bidang usaha resmi
          yang telah terdaftar sesuai standar perizinan nasional sehingga mampu
          menangani berbagai pekerjaan konstruksi, perdagangan, penyewaan alat,
          hingga penyediaan tenaga kerja profesional.
        </p>
      </div>

      {/* Grid */}
      <div className="kbli-grid grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 p-10">
        {KBLI_DATA.map((item) => (
          <div
            key={item.code}
            className="kbli-card group relative overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container-low p-6 transition-all duration-500 hover:-translate-y-2 hover:border-construction-blue hover:shadow-2xl"
          >
            {/* Top Accent */}
            <div className="absolute left-0 top-0 h-1 w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />

            {/* Glow */}
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Header Card */}
            <div className="relative z-10 mb-5 flex items-center justify-between">
              <span className="rounded-lg bg-primary px-3 py-2 text-sm font-bold tracking-wider text-white group-hover:text-blue-400">
                {item.code}
              </span>

              <Building2
                size={22}
                className="text-primary/20 transition-all duration-500 group-hover:rotate-12 group-hover:text-blue-500"
              />
            </div>

            {/* Title */}
            <h3 className="relative z-10 text-base font-semibold leading-relaxed text-primary">
              {item.title}
            </h3>

            {/* Line */}
            <div className="relative z-10 mt-6 h-[2px] w-10 bg-blue-500 transition-all duration-500 group-hover:w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
