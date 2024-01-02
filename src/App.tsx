import { useEffect, useState } from "react";
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
import Footer from "./pages/Footer";
import Menu from "./pages/Menu";
import { Loader } from "./pages/Loader";

gsap.registerPlugin(ScrollTrigger);
export default function App() {
  const [headerLightMode, setHeaderLightMode] = useState(true);
  const isDesktop = window.innerWidth > 1025;

  useEffect(() => {
    let lenis: Lenis | null = null;
    lenis = initAnimations(isDesktop);

    //lenis independent
    const tl = headerChange(isDesktop ? ".itemSlider" : ".__fadeIn", setHeaderLightMode);
    backgroundChange();

    const inverseStateSetter = (newState: boolean) => setHeaderLightMode(!newState);
    const tl2 = headerChange("footer", inverseStateSetter, "top 25%", "top 26%");
    //lenis independent

    return () => {
      if (lenis) lenis.destroy();
      tl.kill();
      tl2.kill();
      gsap.globalTimeline.clear();
    };
  }, [isDesktop]);

  return (
    <>
      <Loader />
      <div className="wrapper min-h-screen max-w-screen overflow-hidden relative bgc z-10">
        <Header isDesktop={isDesktop} light={headerLightMode} />
        <Hero />
        <Menu isDesktop={isDesktop} />
        {isDesktop ? (
          <div className="relative mt-[100vh] bgc flex flex-col wrap">
            <AboutUs />
            <GalleryHorizontal />
            <ItemSlider isDesktop={isDesktop} />
          </div>
        ) : (
          <>
            <div id="control-height" className="h-screen w-0 absolute -z-10" />
            <AboutUs />
            <GalleryVertical />
            <ItemSlider isDesktop={isDesktop} />
          </>
        )}
        <Footer isDesktop={isDesktop} />
      </div>
    </>
  );
}
