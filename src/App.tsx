import { useEffect, useState, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import initAnimations from "./animations";
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
    if (isDesktop) lenis = initAnimations(isDesktop);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: itemSliderRef.current,
        start: "top 80%",
        end: "top 40%",
        scrub: true,
        onUpdate: (self) => {
          const newState = self.progress === 1 ? false : true;
          setHeaderLightMode(newState);
        },
      },
    });

    return () => {
      if (lenis) lenis.destroy();
      tl.kill();
    };
  }, [isDesktop]);

  return (
    <div className="wrapper min-h-screen max-w-screen overflow-hidden relative bgc">
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
