import Masonry from "../Masonry";

export default function () {
  const imageModules = import.meta.glob(
    "@/assets/images/Galery/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
    {
      eager: true,
      import: "default",
    },
  );
  const items = Object.values(imageModules).map((img, index) => ({
    id: String(index + 1),
    img: img as string,
    url: "#",
    height: 350 + (index % 4) * 50,
  }));

  return (
    <>
      <div className="bg-[#FAFAF8] p-10">
        <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover
          hoverScale={0.95}
          blurToFocus
          colorShiftOnHover={false}
        />
      </div>
    </>
  );
}
