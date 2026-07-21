import amin from "@/assets/images/tim/Amin.png";
import dimas from "@/assets/images/tim/Dimas.png"
import adelia from "@/assets/images/tim/Adelia.png"
const leaders = [
  {
    name: "M. Amin",
    role: "Direktur Utama",
    image: amin,
    offset: "",
  },

  {
    name: "Dimas Wahyudi, S.T",
    role: "Direktur",
    image: dimas,
    offset: "md:translate-y-12",
  },
  {
    name: "Adelia Syifani",
    role: "Komisaris Utama",
    image: adelia,
    offset: "md:translate-y-24",
  },
];

const staffs = [
  { role: "PJO", name: "Muhammad Fadli" },
  { role: "HSE Coordinator", name: "Muhammad Fadli" },
  { role: "Supervisor", name: "Dimas Wahyudi, S.T" },
  { role: "Finance", name: "Musafira Rahmania, S.Ak" },
  { role: "HSE Officer", name: "Nurhaviva Suaib, S.H" },
  { role: "Leading Hand", name: "Muhammad Afdal" },
  { role: "Leader Admin", name: "Apriansyah" },
  { role: "Admin", name: "Lisa Mutya Satria" },
];

export default function Tim() {
  return (
    <div className="mt-24 ">
      {/* Heading */}

      <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-xl">
          <span className="font-semibold uppercase tracking-[0.35em] text-sm   text-blue-400">
            Kepemimpinan
          </span>

          <h2 className="mt-4 text-4xl font-bold text-primary">
            Tim Manajemen Profesional
          </h2>
        </div>

        <p className="max-w-md leading-7 text-on-surface-variant">
          Dikelola oleh tenaga ahli dengan pengalaman puluhan tahun di industri
          konstruksi Indonesia.
        </p>
      </div>

      {/* Leader */}

      <div className="grid gap-8 md:grid-cols-3 items-start">
        {leaders.map((leader) => (
          <div
            key={leader.name}
            className={`group transition-transform duration-500 ${leader.offset}`}
          >
            <div className="relative overflow-hidden rounded-xl shadow-md">
              <div className="aspect-[3/4] overflow-hidden bg-surface-container-low">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-80" />

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 transition-all duration-500 group-hover:translate-y-0">
                <p className="mb-2 inline-block  text-blue-400 rounded-full bg-construction-yellow px-3 py-1 text-xs font-bold uppercase">
                  {leader.role}
                </p>

                <h3 className="text-2xl font-bold text-white">{leader.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Staff */}

      <div className="mt-24">
        <div className="mb-8 flex items-center gap-3">
          <div className="h-px flex-1 bg-outline-variant/30" />

          <span className="font-semibold uppercase tracking-[0.35em] text-sm   text-blue-400">
            Tim Operasional
          </span>

          <div className="h-px flex-1 bg-outline-variant/30" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {staffs.map((staff) => (
            <div
              key={staff.role}
              className="group rounded-xl border border-outline-variant/30 bg-surface-container-low p-5 transition-all duration-300 hover:-translate-y-2 hover:border-construction-yellow hover:shadow-xl"
            >
              <p className="mb-2 text-xs  text-blue-400 font-semibold uppercase tracking-wider text-error">
                {staff.role}
              </p>

              <h4 className="font-semibold text-primary transition-colors group-hover:text-construction-yellow">
                {staff.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
