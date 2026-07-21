import { Lightbulb } from "lucide-react";

const missions = [
  {
    number: "01",
    title: "Daya Saing Sehat",
    description:
      "Meningkatkan daya saing yang sehat perusahaan di industri jasa konstruksi dan supply alat berat dengan mengembangkan pelayanan dan teknologi serta inovasi kepada konsumen dalam memenuhi harapan dan mewujudkan impian serta ide konsumen menjadi hal yang nyata.",
  },
  {
    number: "02",
    title: "Kualitas Hasil Kerja",
    description:
      "Menjaga kualitas dan kuantitas hasil kerja dengan memberikan masukan inovasi terus menerus tentang desain, produk dan jasa kepada konsumen agar hasil yang tercipta menjadi baik dan memuaskan.",
  },
  {
    number: "03",
    title: "Keselamatan Kerja",
    description:
      "Mengutamakan keselamatan dalam bekerja, untuk memperoleh hasil kerja yang baik tanpa adanya kecelakaan kerja sehingga memberikan nilai positif bagi konsumen.",
  },
  {
    number: "04",
    title: "Pengembangan SDM",
    description:
      "Meningkatkan pelatihan SDM untuk menghasilkan tenaga kerja yang berkompeten dan berkualitas serta menciptakan lingkungan kerja yang kondusif, aktif dan bertanggung jawab untuk mensejahterakan tenaga kerja dengan memberikan lapangan kerja yang luas.",
  },
];

export default function VisiMisi() {
  return (
    <section id="visi-misi" className="bg-[#141b2b] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* VISI */}

          <div className="space-y-8 lg:col-span-5">
            <div className="relative border-2 border-[#37a0d4]/20 p-10 lg:p-12">
              <div className="absolute -left-6 -top-6 bg-[#141b2b] p-2">
                <Lightbulb size={52} className="text-[#37a0d4]" />
              </div>

              <h3 className="mb-8 text-4xl font-bold">Visi</h3>

              <p className="text-lg italic leading-9 text-white/80">
                PT. Pisut Jaya Mandiri akan menjadi salah satu perusahaan
                penyedia jasa konstruksi, sewa alat berat yang baik dan mampu
                bersaing dengan sehat melalui pengembangan sumber daya manusia
                yang berkompeten, manajemen teknologi, inovasi dan tata keIoIa
                perusahaan yang baik sehingga kepuasan pelanggan menjadi
                Prioritas Utama.
              </p>
            </div>
          </div>

          {/* MISI */}

          <div className="flex flex-col justify-center space-y-10 lg:col-span-7 lg:pl-16">
            <h3 className="text-4xl font-bold">Misi Kami</h3>

            <div className="space-y-10">
              {missions.map((mission) => (
                <div key={mission.number} className="group flex gap-8">
                  <span className="text-6xl font-bold text-white/10 transition-colors duration-300 group-hover:text-[#37a0d4]">
                    {mission.number}
                  </span>

                  <div className="space-y-2">
                    <h4 className="text-2xl font-semibold">{mission.title}</h4>

                    <p className="leading-8 text-white/60">
                      {mission.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
