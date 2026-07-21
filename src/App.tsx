import Hero from "./components/section/Hero";
import KBLI from "./components/section/Kbli";

import Navbar from "./components/section/Navbar";
import Services from "./components/section/Service";
import Tentang from "./components/section/Tentang";
import VisiMisi from "./components/section/VisiMisi";
import Klient from "./components/section/Klient";
import Contact from "./components/section/Contac/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tentang />
      <VisiMisi />
      <Services />
      <KBLI />
      <Klient />
      <Contact />
    </>
  );
}

export default App;
