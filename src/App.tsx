import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SemuaGambar from "./Pages/SemuaGambar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Galeri" element={<SemuaGambar />} />
      </Routes>
    </>
  );
}

export default App;
