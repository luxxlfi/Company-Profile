import {
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowUpRight,
} from "lucide-react";



export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#141b2b] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* ================= LEFT ================= */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                logo
              </div>

              <div>
                <h2 className="text-2xl font-bold uppercase">
                  PT Pisut Jaya Mandiri
                </h2>

                <p className="mt-1 text-sm text-white/60">
                  General Contractor & Supplier
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-md leading-8 text-white/70">
              PT Pisut Jaya Mandiri merupakan perusahaan yang bergerak di bidang
              jasa konstruksi, penyediaan tenaga kerja, perdagangan, dan
              penyewaan alat berat dengan komitmen menghadirkan kualitas,
              keselamatan kerja, serta profesionalisme pada setiap proyek.
            </p>

            {/* Social */}
            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
              >
                <Globe size={20} />
              </a>

              <a
                href="mailto:admin@pisutjayamandiri.com"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
              >
                <Mail size={20} />
              </a>

              <a
                href="https://wa.me/6282151062726"
                target="_blank"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* ================= MENU ================= */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold text-white">
              Profil Perusahaan
            </h3>

            <div className="mt-6 h-1 w-14 rounded-full bg-blue-500" />

            <ul className="mt-8 space-y-5 text-white/70">
              <ul className="mt-8 space-y-5 text-white/70">
                <li>
                  <a
                    href="#tentang"
                    className="group flex items-center justify-between hover:text-blue-400 transition"
                  >
                    Tentang Kami
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="#services"
                    className="group flex items-center justify-between hover:text-blue-400 transition"
                  >
                    Layanan Kami
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="#legalitas"
                    className="group flex items-center justify-between hover:text-blue-400 transition"
                  >
                    Legalitas KBLI
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="#galeri"
                    className="group flex items-center justify-between hover:text-blue-400 transition"
                  >
                    Dokumentasi Proyek
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="#klien"
                    className="group flex items-center justify-between hover:text-blue-400 transition"
                  >
                    Klien & Mitra
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    className="group flex items-center justify-between hover:text-blue-400 transition"
                  >
                    Kontak
                    <ArrowUpRight
                      size={16}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                    />
                  </a>
                </li>
              </ul>
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold text-white">Hubungi Kami</h3>

            <div className="mt-6 h-1 w-14 rounded-full bg-blue-500" />

            <div className="mt-8 space-y-7">
              <div className="flex gap-4">
                <div className="mt-1 text-blue-400">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest text-white/40">
                    Alamat
                  </p>

                  <p className="mt-2 leading-7 text-white/70">
                    Jalan Bumi Ayu No.44 RT.03
                    <br />
                    Sangatta Utara,
                    <br />
                    Kutai Timur, Kalimantan Timur
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 text-blue-400">
                  <Mail size={22} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest text-white/40">
                    Email
                  </p>

                  <a
                    href="mailto:admin@pisutjayamandiri.com"
                    className="mt-2 block text-white/70 transition hover:text-blue-400"
                  >
                    admin@pisutjayamandiri.com
                  </a>

                  <a
                    href="mailto:pt.pisutjayamandiri@yahoo.com"
                    className="mt-1 block text-white/70 transition hover:text-blue-400"
                  >
                    pt.pisutjayamandiri@yahoo.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 text-blue-400">
                  <Phone size={22} />
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest text-white/40">
                    WhatsApp
                  </p>

                  <a
                    href="https://wa.me/6282151062726"
                    target="_blank"
                    className="mt-2 block text-white/70 transition hover:text-blue-400"
                  >
                    +62 821 5106 2726
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} PT Pisut Jaya Mandiri. All Rights
            Reserved.
          </p>

          <p>
            Designed & Developed by{" "}
            <span className="font-semibold text-blue-400"><a href="https://abyan-luthfi.netlify.app/">Luxfi</a></span>
          </p>
        </div>
      </div>
    </footer>
  );
}
