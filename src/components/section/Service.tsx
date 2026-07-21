import { Users, Building2, Truck, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Penyedia Tenaga Kerja",
    description:
      "Penyedia jasa tenaga kerja dan alih daya (outsourcing) terpercaya untuk membantu perusahaan memangkas proses rekrutmen panjang dan biaya operasional HRD tinggi.",
    features: ["Seleksi Ketat", "SDM Kompeten"],
    dark: false,
  },
  {
    icon: Building2,
    title: "Jasa Konstruksi",
    description:
      "General contractor terintegrasi yang berdedikasi menghadirkan solusi pembangunan berkualitas tinggi, mulai dari hunian, gedung bertingkat, hingga infrastruktur sipil.",
    features: ["Presisi Tinggi", "Tepat Waktu"],
    dark: true,
  },
  {
    icon: Truck,
    title: "Rental Unit Alat Berat",
    description:
      "Jasa penyewaan alat berat terkemuka untuk mendukung sektor konstruksi, infrastruktur, pertambangan, hingga perkebunan dengan performa armada optimal.",
    features: ["Maintenance Rutin", "Operator Ahli"],
    dark: false,
  },
];

export default function Services() {
  return (
    <section  className="bg-[#F7F7F5] py-24">
      <div className="mx-auto max-w-7xl px-6" id="services">
        {/* Heading */}

        <div className="mb-16 text-center">
          <span className="uppercase tracking-[0.3em] text-sm font-semibold text-blue-400">
            Layanan Utama
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#141b2b] lg:text-5xl">
            Solusi Konstruksi Terintegrasi
          </h2>
        </div>
    

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className={`group transition-all duration-300 hover:-translate-y-2 ${
                  service.dark
                    ? "bg-[#141b2b] text-white"
                    : "border border-gray-200 bg-white"
                } p-10`}
              >
                {/* Icon */}

                <div
                  className={`mb-8 flex h-16 w-16 items-center justify-center transition-colors duration-300 ${
                    service.dark
                      ? "bg-white group-hover:bg-blue-400"
                      : "bg-[#141b2b] group-hover:bg-blue-400"
                  }`}
                >
                  <Icon
                    size={34}
                    className={
                      service.dark
                        ? "text-[#141b2b] group-hover:text-white"
                        : "text-white group-hover:text-[#141b2b]"
                    }
                  />
                </div>

                {/* Title */}

                <h3
                  className={`mb-5 text-2xl font-bold ${
                    service.dark ? "text-white" : "text-[#141b2b]"
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}

                <p
                  className={`mb-8 leading-8 ${
                    service.dark ? "text-white/70" : "text-gray-600"
                  }`}
                >
                  {service.description}
                </p>

                {/* Features */}

                <div
                  className={`space-y-3 border-t pt-6 ${
                    service.dark ? "border-white/10" : "border-gray-200"
                  }`}
                >
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className={`flex items-center gap-3 text-sm font-medium ${
                        service.dark ? "text-white/80" : "text-gray-700"
                      }`}
                    >
                      <CheckCircle2
                        size={16}
                        className="text-blue-400"
                        fill="currentColor"
                      />

                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
