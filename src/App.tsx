import { useEffect, useState, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { initAnimations, backgroundChange, headerChange } from "./animations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AboutUs from "./pages/AboutUs";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import GalleryVertical from "./pages/GalleryVertical";
import GalleryHorizontal from "./pages/GalleryHorizontal";
import ItemSlider from "./pages/ItemSlider";

gsap.registerPlugin(ScrollTrigger);
export default function App() {
  const [headerLightMode, setHeaderLightMode] = useState(true);
  const isDesktop = window.innerWidth > 767;
  const itemSliderRef = useRef<any>(null);

  useEffect(() => {
    let lenis: Lenis | null = null;
    lenis = initAnimations(isDesktop);

    //lenis independent
    const tl = headerChange(itemSliderRef.current, setHeaderLightMode);
    backgroundChange();
    //lenis independent

    return () => {
      if (lenis) lenis.destroy();
      tl.kill();
      gsap.globalTimeline.clear();
    };
  }, [isDesktop]);

  return (
    <div className="wrapper min-h-screen max-w-screen overflow-hidden relative bgc z-10">
      <Header isDesktop={isDesktop} light={headerLightMode} />
      <Hero />
      {isDesktop ? (
        <div className="relative mt-[100vh] bgc">
          <AboutUs />
          <GalleryHorizontal />
          <ItemSlider ref={itemSliderRef} />
          <div className="h-screen w-full bg-cyan-900" />
        </div>
      ) : (
        <>
          <AboutUs />
          <GalleryVertical />
          <ItemSlider ref={itemSliderRef} />
          <div className="h-screen w-full bg-cyan-900" />
        </>
      )}
    </div>
  );
}
