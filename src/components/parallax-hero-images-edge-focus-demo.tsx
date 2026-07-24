import { useNavigate } from "react-router-dom";
import { ParallaxHeroImages } from "@/components/ui/parallax-hero-images";

import Dpn1 from "@/assets/images/Galery/Dpn1.jpeg";
import Dpn2 from "@/assets/images/Galery/Dpn2.jpeg";
import Dpn3 from "@/assets/images/Galery/Dpn3.jpeg";
import Dpn4 from "@/assets/images/Galery/dpn4.jpeg";
import Dpn5 from "@/assets/images/Galery/dpn5.jpeg";
import Dpn6 from "@/assets/images/Galery/dpn6.jpeg";

const images = [Dpn1, Dpn3, Dpn4, Dpn5, Dpn6, Dpn2];

export default function ParallaxHeroImagesEdgeFocusDemo() {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen w-full  items-center justify-center overflow-hidden  ">
      {/* Background Parallax */}
      <ParallaxHeroImages images={images} variant="edge-focus" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#141b2b] backdrop-[2px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
        <span className="rounded-full border border-blue-400/20 bg-blue/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">
          Dokumentasi Proyek
        </span>

        <h1 className="text-4xl font-bold leading-tight text-white drop-shadow-2xl md:text-6xl">
          Galeri Proyek
          <br />
          <span className="text-blue-400">PT. Pisut Jaya Mandiri</span>
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-white/80 md:text-xl">
          Jelajahi berbagai dokumentasi proyek konstruksi, pembangunan
          infrastruktur, penyewaan alat berat, serta aktivitas operasional yang
          telah kami selesaikan bersama klien dan mitra strategis di berbagai
          wilayah Indonesia.
        </p>

        <button
          onClick={() => navigate("/Galeri")}
          className="mt-4 rounded-full border border-blue-400 bg-blue-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-[0_10px_35px_rgba(59,130,246,.45)]"
        >
          Lihat Semua Galeri
        </button>
      </div>
    </div>
  );
}
