import { useEffect } from "react";
import initAnimations from "./animations";

import AboutUs from "./pages/AboutUs";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import GalleryVertical from "./pages/GalleryVertical";

export default function App() {
  useEffect(() => {
    initAnimations();
  }, []);

  return (
    <div className="wrapper min-h-screen w-screen overflow-hidden">
      <Header />
      <Hero />
      <AboutUs />
      <GalleryVertical />
    </div>
  );
}
