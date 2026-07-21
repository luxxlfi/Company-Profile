import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function InfoContact() {
  return (
    <div className="space-y-5">
      {/* WhatsApp */}
      <a
        href="https://wa.me/6282151062726"
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-2xl border border-outline-variant/30 bg-white/60 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#141b2b] text-blue-400 transition-all duration-300 group-hover:scale-110">
            <Phone size={24} />
          </div>

          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-error">
              WhatsApp Center
            </p>

            <h3 className="mt-1 text-xl font-bold text-[#141b2b]">
              0821 5106 2726
            </h3>

            <p className="mt-2 text-sm leading-6 text-on-surface-variant">
              Hubungi kami untuk konsultasi proyek, penyewaan alat berat, maupun
              kerja sama bisnis.
            </p>
          </div>

          <ArrowUpRight
            size={20}
            className="text-outline transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
          />
        </div>
      </a>

      {/* Email */}
      <a
        href="mailto:admin@pisutjayamandiri.com"
        className="group block rounded-2xl border border-outline-variant/30 bg-white/60 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#141b2b] text-blue-400 transition-all duration-300 group-hover:scale-110">
            <Mail size={24} />
          </div>

          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-error">
              Email Resmi
            </p>

            <h3 className="mt-1 font-semibold text-[#141b2b]">
              admin@pisutjayamandiri.com
            </h3>

            <p className="mt-1 text-sm text-on-surface-variant">
              pt.pisutjayamandiri@yahoo.com
            </p>
          </div>

          <ArrowUpRight
            size={20}
            className="text-outline transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
          />
        </div>
      </a>

      {/* Address */}
      <a
        href="https://www.google.com/maps/place/Studiorenang.com+Sawangan/@-6.3818207,106.7496249,21z/data=!4m9!1m2!7m1!2e1!3m5!1s0x2e69ef001f5b8ca1:0x6158c2037084912f!8m2!3d-6.3816853!4d106.749661!16s%2Fg%2F11zk763x2f?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-2xl border border-outline-variant/30 bg-white/60 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#141b2b] text-blue-400 transition-all duration-300 group-hover:scale-110">
            <MapPin size={24} />
          </div>

          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-error">
              Alamat Kantor
            </p>

            <h3 className="mt-1 font-semibold text-[#141b2b]">
              Jalan Bumi Ayu No.44
            </h3>

            <p className="mt-2 text-sm leading-6 text-on-surface-variant">
              Samarinda,
              <br />
              Kalimantan Timur, Indonesia
            </p>
          </div>

          <ArrowUpRight
            size={20}
            className="text-outline transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
          />
        </div>
      </a>
    </div>
  );
}
