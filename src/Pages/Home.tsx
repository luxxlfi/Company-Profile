
import Contact from "@/components/section/Contac/Contact";
import Footer from "@/components/section/Footer";
import Galeri from "@/components/section/Galeri";
import Hero from "@/components/section/Hero";
import KBLI from "@/components/section/Kbli";
import Klient from "@/components/section/Klient";
import Navbar from "@/components/section/Navbar";
import Services from "@/components/section/Service";
import Tentang from "@/components/section/Tentang";
import VisiMisi from "@/components/section/VisiMisi";

function Home () {
  return (
    <>
      <Navbar />
      <Hero />
      <Tentang />
      <VisiMisi />
      <Services />
      <Galeri />
      <KBLI />
      <Klient />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
