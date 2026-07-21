import LogoLoop from "../LogoLoop";

const stats = [
  {
    node: <Stat number="1997" label="Berdiri Sejak" />,
    title: "Berdiri Sejak",
  },
  {
    node: <Stat number="15+" label="KBLI Berizin" />,
    title: "KBLI Berizin",
  },
  {
    node: <Stat number="50+" label="Alat Berat" />,
    title: "Alat Berat",
  },
  {
    node: <Stat number="100%" label="Keselamatan Kerja" />,
    title: "Keselamatan Kerja",
  },
];

export default function TextLoop() {
  return (
  
      <div className="bg-black pb-10">
        <LogoLoop
          logos={stats}
          speed={80}
          direction="left"
          gap={80}
          logoHeight={120}
          hoverSpeed={0}
          fadeOut
          fadeOutColor="#111111"
          scaleOnHover={false}
        />
      </div>
  
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex w-[220px] flex-col items-center justify-center">
      <h2 className="text-5xl font-bold text-blue-400">{number}</h2>
      <p className="mt-2 text-center text-sm uppercase tracking-[0.3em] text-gray-400">
        {label}
      </p>
    </div>
  );
}
