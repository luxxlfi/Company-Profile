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
          

            <h3 className="mt-1 text-xl font-bold text-[#141b2b]">
               WhatsApp Center
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
        href="https://www.google.com/maps/place/WORKSHOP+PT.+PISUT+JAYA+MANDIRI+(PJM)/@0.5324469,117.5139669,19.25z/data=!4m14!1m7!3m6!1s0x320a350044c67411:0x10e1333f9d8c2ca3!2sWORKSHOP+PT.+PISUT+JAYA+MANDIRI+(PJM)!8m2!3d0.5326013!4d117.5142617!16s%2Fg%2F11yy2lq384!3m5!1s0x320a350044c67411:0x10e1333f9d8c2ca3!8m2!3d0.5326013!4d117.5142617!16s%2Fg%2F11yy2lq384?entry=ttu&g_ep=EgoyMDI2MDcxOS4wIKXMDSoASAFQAw%3D%3D"
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
              Sangatta,
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
