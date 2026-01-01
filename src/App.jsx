import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/blocks/Header";
import Home from "./pages/Home";
import Footer from "./components/blocks/Footer";
import Members from "./pages/Members";
import Notice from "./pages/Notice";
import Gallery from "./pages/Gallery";
import Youtube from "./pages/Youtube";
import YoutubeDetail from "./pages/YoutubeDetail";
import Contact from "./pages/Contact";

export default function App() {
  const { pathname } = useLocation();

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/youtube/:id" element={<YoutubeDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {pathname !== "/" && <Footer />}
    </>
  );
}
