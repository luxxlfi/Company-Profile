import Threads from "@/components/Threads";
import HeroImage from "@/assets/images/hero.png";
import ElectricBorder from "../ElectricBorder";
import { Building2, Handshake, HardHat, ShieldCheck } from "lucide-react";
import SpecularButton from "../SpecularButton";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const location = useLocation();

  const HandleContac = () => {
    if (location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/", {
        state: {
          scrollTo: "contac",
        },
      });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden" id="hero">
      {/* Background */}
      <img
        src={HeroImage}
        alt="PT Pisut Jaya Mandiri"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/70" />

      {/* Threads */}
      <div className="absolute inset-0 opacity-60">
        <Threads amplitude={0.8} distance={0} enableMouseInteraction={false} />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col justify-center gap-14 px-6 py-28 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="max-w-2xl text-center lg:text-left">
          <span className="inline-flex rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-xs font-medium text-blue-500 sm:text-sm">
            General Contractor & Supplier
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            PT PISUT
            <br />
            JAYA MANDIRI
          </h1>

          <p className="mt-6 text-base leading-7 text-slate-300 sm:text-lg lg:leading-8">
            Mitra profesional dalam jasa konstruksi, pengadaan barang, dan
            berbagai solusi bisnis dengan komitmen terhadap kualitas dan
            integritas.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center  lg:justify-start">
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
              onClick={HandleContac}
            >
              Hubungi Kami
            </SpecularButton>
          </div>

          {/* Mobile Features */}
          <div className="mt-10 grid grid-cols-2 gap-3 lg:hidden">
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl">
              <Building2 className="text-blue-300" size={18} />
              <span className="text-sm text-white">Konstruksi</span>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl">
              <HardHat className="text-blue-300" size={18} />
              <span className="text-sm text-white">Profesional</span>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl">
              <ShieldCheck className="text-blue-300" size={18} />
              <span className="text-sm text-white">Berkualitas</span>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-xl">
              <Handshake className="text-blue-300" size={18} />
              <span className="text-sm text-white">Terpercaya</span>
            </div>
          </div>
        </div>

        {/* Right Card Desktop */}
        <div className="hidden lg:block">
          <ElectricBorder
            color="#0817f2"
            speed={0.1}
            chaos={0.05}
            style={{ borderRadius: 28 }}
          >
            <div className="w-full max-w-md rounded-[28px] border border-white/10  p-8">
              <div className="mb-6 inline-flex rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-500">
                General Contractor
              </div>

              <h3 className="text-3xl font-bold text-white">
                PT Pisut Jaya Mandiri
              </h3>

              <p className="mt-4 leading-7 text-white/70">
                Solusi konstruksi profesional dengan komitmen terhadap kualitas,
                keselamatan kerja, dan penyelesaian proyek tepat waktu.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                  <Building2 className="text-blue-500" size={20} />
                  <span className="text-blue-500">Konstruksi</span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                  <HardHat className="text-blue-500" size={20} />
                  <span className="text-blue-500">Profesional</span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                  <ShieldCheck className="text-blue-500" size={20} />
                  <span className="text-blue-500">Berkualitas</span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                  <Handshake className="text-blue-500" size={20} />
                  <span className="text-blue-500">Terpercaya</span>
                </div>
              </div>
            </div>
          </ElectricBorder>
        </div>
      </div>
    </section>
  );
}
