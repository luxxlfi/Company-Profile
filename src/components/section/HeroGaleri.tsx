import Threads from "@/components/Threads";
import HeroImage from "@/assets/images/Galery/Dpn1.jpeg";

import ElectricBorder from "../ElectricBorder";
import SpecularButton from "../SpecularButton";

import {
  ArrowLeft,
  Camera,
  FolderOpen,
  ImageIcon,
  Building2,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function HeroGaleri() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <img
        src={HeroImage}
        alt="Galeri PT Pisut Jaya Mandiri"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/70" />

      {/* Threads */}
      <div className="absolute inset-0 opacity-60">
        <Threads
          amplitude={0.8}
          distance={0}
          enableMouseInteraction={false}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto flex min-h-[75vh] max-w-7xl flex-col justify-center gap-14 px-6 py-28 lg:flex-row lg:items-center lg:justify-between">

        {/* LEFT */}
        <div className="max-w-2xl text-center lg:text-left">

          <span className="inline-flex rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-xs font-medium text-blue-400">
            Dokumentasi Proyek
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Galeri
            <br />
            <span className="text-blue-400">
              PT Pisut Jaya Mandiri
            </span>
          </h1>

          <p className="mt-6 text-base leading-7 text-slate-300 sm:text-lg lg:leading-8">
            Jelajahi berbagai dokumentasi proyek konstruksi, pembangunan
            infrastruktur, penyewaan alat berat, serta aktivitas operasional
            yang telah kami selesaikan bersama klien dan mitra strategis.
          </p>

          <div className="mt-10">
            <SpecularButton
              size="lg"
              radius={18}
              tint="#93c5fd"
              tintOpacity={0.1}
              blur={2}
              textColor="#f5f5f5"
              lineColor="#ffffff"
              baseColor="#0817f2"
              intensity={1}
              shineSize={10}
              shineFade={40}
              thickness={1}
              speed={0.35}
              followMouse
              proximity={250}
              autoAnimate={false}
              onClick={() => navigate("/")}
            >
              <div className="flex items-center gap-2">
                <ArrowLeft size={18} />
                Kembali ke Beranda
              </div>
            </SpecularButton>
          </div>

          {/* Mobile */}
          <div className="mt-10 grid grid-cols-2 gap-3 lg:hidden">

            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl">
              <Camera className="text-blue-400" size={18} />
              <span className="text-sm text-white">
                Dokumentasi
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl">
              <ImageIcon className="text-blue-400" size={18} />
              <span className="text-sm text-white">
                Foto Proyek
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl">
              <FolderOpen className="text-blue-400" size={18} />
              <span className="text-sm text-white">
                Arsip
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl">
              <Building2 className="text-blue-400" size={18} />
              <span className="text-sm text-white">
                Proyek
              </span>
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden lg:block">

          <ElectricBorder
            color="#0817f2"
            speed={0.1}
            chaos={0.05}
            style={{ borderRadius: 28 }}
          >

            <div className="w-full max-w-md rounded-[28px] border border-white/10 p-8">

              <div className="mb-6 inline-flex rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400">
                Dokumentasi
              </div>

              <h3 className="text-3xl font-bold text-white">
                Rekam Jejak Proyek
              </h3>

              <p className="mt-4 leading-7 text-white/70">
                Dokumentasi visual berbagai proyek konstruksi, pekerjaan sipil,
                penyewaan alat berat, dan aktivitas operasional PT. Pisut Jaya
                Mandiri.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                  <Camera className="text-blue-500" size={20} />
                  <span className="text-blue-400">150+ Foto</span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                  <FolderOpen className="text-blue-500" size={20} />
                  <span className="text-blue-400">35 Proyek</span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                  <ImageIcon className="text-blue-500" size={20} />
                  <span className="text-blue-400">Dokumentasi</span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                  <Building2 className="text-blue-500" size={20} />
                  <span className="text-blue-400">Aktivitas</span>
                </div>

              </div>

            </div>

          </ElectricBorder>

        </div>
      </div>
    </section>
  );
}