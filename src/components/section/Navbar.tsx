import { useState } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import logo from "@/assets/logo.png";
import useScroll from "@/hooks/useScroll";
import SpecularButton from "../SpecularButton";

gsap.registerPlugin(ScrollToPlugin);

const menus = [
  { name: "Home", href: "#hero" },
  { name: "Tentang", href: "#tentang" },
  { name: "Layanan", href: "#services" },
  { name: "Galeri", href: "#galeri" },
  { name: "klien", href: "#klien" },
  { name: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScroll();

  const scrollToSection = (target: string) => {
    const offsets: Record<string, number> = {
      "#hero": 0,
      "#tentang": 90,
      "#services": 20,
      "#projects": 110,
      "#klien": 20,
      "#contact": 10,
      "#galeri": 20,
    };

    gsap.to(window, {
      duration: 1.4,
      ease: "expo.inOut",
      scrollTo: {
        y: target,
        offsetY: offsets[target] ?? 100,
        autoKill: true,
      },
    });

    setOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled ? " backdrop-blur-xl shadow-lg py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#hero")}
            className="flex items-center gap-3"
          >
            <img src={logo} alt="Logo" className="h-12" />

            <div className="hidden sm:block text-left">
              <h2
                className={`font-bold transition-colors ${
                  scrolled ? "text-[#1d25b8]" : "text-white"
                }`}
              >
                PT Pisut Jaya Mandiri
              </h2>

              <p
                className={`text-xs transition-colors ${
                  scrolled ? "text-[#1d25b8]" : "text-gray-200"
                }`}
              >
                General Contractor & Supplier
              </p>
            </div>
          </button>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">
            {menus.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-sm font-medium transition group ${
                  scrolled
                    ? "text-[#1d25b8] hover: text-blue-400"
                    : "text-white hover: text-blue-400"
                }`}
              >
                {item.name}

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* CTA */}

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(true)}
            className={`lg:hidden transition-colors ${
              scrolled ? "text-slate-800" : "text-white"
            }`}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>
      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 ${
          open ? "visible bg-black/40 opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setOpen(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute right-0 top-0 h-full w-[320px] bg-white shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-200 p-5">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="h-10" />

              <div>
                <h2 className="font-bold text-slate-800">
                  PT Pisut Jaya Mandiri
                </h2>

                <p className="text-xs text-slate-500">General Contractor</p>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="rounded-lg p-2 transition hover:bg-slate-100"
            >
              <X size={22} />
            </button>
          </div>

          {/* Menu */}
          <div className="flex flex-col p-6">
            {menus.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="rounded-xl px-4 py-4 text-left font-medium text-slate-700 transition hover:bg-slate-100 hover:text-[#0f373e]"
              >
                {item.name}
              </button>
            ))}
            <SpecularButton
              size="lg"
              radius={18}
              tint="#93c5fd"
              tintOpacity={0.1}
              blur={2}
              textColor="#1d25b8"
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
            >
              Hubungi Kami
            </SpecularButton>
          </div>
        </div>
      </div>
    </>
  );
}
