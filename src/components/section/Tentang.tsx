import TextLoop from "../animUse/TextLoop";
import { ShieldCheck, Users, HardHat, Hammer } from "lucide-react";

import AboutImage from "@/assets/images/about.png";
import Tim from "./Tim";

export default function Tentang() {
  return (
    <section className="bg-[#FAFAF8]">
      <TextLoop />

      <div className="mx-auto max-w-7xl px-6 py-28 ">
        <div className="grid items-center gap-20 lg:grid-cols-2" id="tentang">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={AboutImage}
                alt="PT Pisut Jaya Mandiri"
                className="h-[600px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-8 right-8 rounded-2xl bg-[#141b2b] p-8 text-white shadow-2xl">
              <HardHat className="mb-3 text-blue-400" size={32} />
              <h3 className="text-xl font-semibold">Inovasi Berkelanjutan</h3>
              <p className="mt-2 text-zinc-300">
                Solusi konstruksi modern dengan standar kualitas tinggi.
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="font-semibold uppercase tracking-[0.35em]  text-blue-400">
              Tentang Kami
            </span>

            <h2 className="mt-5 text-5xl font-bold leading-tight text-zinc-900">
              Membangun Masa Depan
              <br />
              Dengan Presisi Tinggi.
            </h2>

            <p className="mt-8 leading-8 text-zinc-600">
              PT. Pisut Jaya Mandiri merupakan perusahaan yang bergerak di
              bidang jasa konstruksi dan penyewaan alat berat sejak tahun
              1997...
            </p>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <Feature icon={<ShieldCheck />} title="Legalitas Terjamin" />
              <Feature icon={<Users />} title="SDM Profesional" />
              <Feature icon={<Hammer />} title="Peralatan Modern" />
              <Feature icon={<HardHat />} title="K3 Prioritas Utama" />
            </div>
          </div>
        </div>
        <Tim />
      </div>
    </section>
  );
}

function Feature({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="rounded-xl  bg-blue-100 p-3  text-blue-400">{icon}</div>

      <span className="font-semibold text-zinc-900">{title}</span>
    </div>
  );
}
