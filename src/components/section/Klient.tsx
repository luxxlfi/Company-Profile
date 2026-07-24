import { Building2, Pickaxe, Factory, Truck } from "lucide-react";

export default function Klient() {
  const clients = [
    {
      title: "PT PAMA PERSADA (KPCS)",
      icon: Building2,
      desc: "Bertindak sebagai vendor terpercaya untuk PT PAMA KPCS, mengerjakan berbagai proyek konstruksi serta menyediakan jasa tenaga kerja Maintenance Building yang berdedikasi di Area Mess Pama KPCS.",
    },
    {
      title: "PT PAMA JEMBAYAN",
      icon: Pickaxe,
      desc: "Telah berhasil menyelesaikan pembangunan Office Reman untuk PT PAMA JEMBAYAN di Tenggarong sebagai bagian dari pengembangan infrastruktur operasional perusahaan.",
    },
    {
      title: "PT KALTIM PRIMA COAL",
      icon: Factory,
      list: [
        "Project Rehab Gedung Serbaguna dan Sarana Olahraga PT KPC.",
        "Project Pembangunan Mushola di P54 Area Tanjung Bara.",
      ],
    },
    {
      title: "PT MUTIARA MAMBA AGUNG",
      icon: Truck,
      desc: "Sebagai mitra strategis penyedia unit alat berat (Vendor Rental) yang mendukung kegiatan operasional PT MMA di wilayah kerja PT KPC.",
    },
  ];
  return (
    <>
      <div id="klien" className=" bg-[#141b2b] p-10" >
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
            Klien & Mitra Strategis
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-white leading-7 text-on-surface-variant">
            Kepercayaan dari berbagai perusahaan nasional menjadi bukti komitmen
            <strong className="text-blue-400">
              {" "}
              PT Pisut Jaya Mandiri
            </strong>{" "}
            dalam memberikan layanan konstruksi, penyediaan tenaga kerja, serta
            penyewaan alat berat dengan standar profesional.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 ">
          {clients.map((client) => {
            const Icon = client.icon;

            return (
              <div
              id="Klien"
                key={client.title}
                className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-white/15 hover:shadow-2xl"
              >
                {/* Accent */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />

                {/* Glow */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative flex items-start gap-5">
                  {/* Icon */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary text-blue-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon size={26} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold uppercase leading-snug text-white">
                      {client.title}
                    </h3>

                    <div className="mt-3 h-1 w-10 bg-blue-500 transition-all duration-300 group-hover:w-20" />

                    {client.desc && (
                      <p className="mt-4 text-[15px] leading-7 text-white text-on-surface-variant">
                        {client.desc}
                      </p>
                    )}

                    {client.list && (
                      <ul className="mt-4 space-y-3">
                        {client.list.map((item) => (
                          <li key={item} className="flex gap-3 text-white">
                            <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />

                            <span className="text-[15px] leading-7 text-on-surface-variant">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
