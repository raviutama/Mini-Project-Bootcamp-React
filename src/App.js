import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./components/Beranda";
import Navbar1 from "./components/Navbar1";
import ManajemenBarang from "./components/ManajemenBarang";
import Katalog from "./components/Katalog";
import About from "./components/About";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <BrowserRouter>
        <Navbar1 />

        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/manajemen-barang" element={<ManajemenBarang />} />
          <Route path="/katalog-barang" element={<Katalog />} />
          <Route path="/tentang-kami" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
