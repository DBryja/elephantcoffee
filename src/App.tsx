import { useEffect } from "react";
import initAnimations from "./animations";

import AboutUs from "./pages/AboutUs";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import GalleryVertical from "./pages/GalleryVertical";
import GalleryHorizontal from "./pages/GalleryHorizontal";
import ItemSlider from "./pages/ItemSlider";

export default function App() {
  const isDesktop = window.innerWidth > 767;
  useEffect(() => {
    if (isDesktop) initAnimations();
  }, [isDesktop]);

  return (
    <div className="wrapper min-h-screen max-w-screen overflow-hidden relative">
      <Header />
      <Hero />
      {isDesktop ? (
        <div className="relative mt-[100vh] bgc">
          <AboutUs />
          <GalleryHorizontal />
          <ItemSlider />
          <div className="h-screen w-full" />
        </div>
      ) : (
        <>
          <AboutUs />
          <GalleryVertical />
          <ItemSlider />
          <div className="h-screen w-full" />
        </>
      )}
    </div>
  );
}
