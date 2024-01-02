import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Heading from "../components/Heading";
import ShopButton from "../components/ShopButton";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    sm: "./images/coffee1@05x.png",
    lg: "./images/coffee1.png",
    alt: "Killimanjaro Majest",
  },
  {
    sm: "./images/coffee2@05x.png",
    lg: "./images/coffee2.png",
    alt: "Ngorongo Noir",
  },
  {
    sm: "./images/coffee3@05x.png",
    lg: "./images/coffee3.png",
    alt: "Serengeti Sunrise",
  },
];

export default function ItemSlider({ isDesktop }: { isDesktop: boolean }) {
  useEffect(() => {
    if (isDesktop) return;
    ScrollTrigger.normalizeScroll(true);
    ScrollTrigger.config({ ignoreMobileResize: true, autoRefreshEvents: "visibilitychange,DOMContentLoaded,load" });
    const wrapper = document.querySelector(".itemSlider .__content");
    const slider = document.querySelector(".itemSlider .slider");

    gsap.to(".itemSlider", {
      scrollTrigger: {
        trigger: wrapper,
        start: `50% 50%`,
        end: `+=100%`,
        pin: wrapper,
        scrub: true,
      },
    });
    gsap.to(slider, {
      scrollTrigger: {
        trigger: wrapper,
        start: `50% 50%`,
        end: `+=90%`,
        scrub: true,
      },
      translateY: "-50%",
    });

    return () => {
      gsap.killTweensOf(wrapper);
      gsap.killTweensOf(slider);
    };
  }, [isDesktop]);

  return (
    <section className="itemSlider __sectionLock h-[200vh] lg:h-[300vh] w-full relative max-lg:bg-cBeige overflow-y-hidden">
      <div className="__content w-full h-screen flex flex-row items-center justify-center absolute top-0 bottom-0">
        <Heading className="text-cOrange-200 xl:text-[10rem]">BLENDS & ROASTS</Heading>
        <div className="slider absolute max-lg:translate-y-3/4 left-0 right-0 gap-12 flex flex-col justify-between items-center h-full lg:flex-row lg:gap-0 lg:translate-x-full lg:px-14 xl:px-24 2xl:px-48">
          {items.map((item, index) => (
            <picture key={index} className="drop-shadow-2xl block w-auto k2:[&>img]:w-[15rem]">
              <source media="(max-width: 768px)" srcSet={item.sm} />
              <source media="(min-width: 769px)" srcSet={item.lg} />
              <img src={item.lg} alt={item.alt} className="block" />
            </picture>
          ))}
          {/* <div className="__sliderBottomTrigger w-full h-4 bg-red-500 shrink-0" /> */}
        </div>
        <ShopButton dark className="!absolute bottom-16" />
        <div className="__itemSliderTrigger absolute" />
      </div>
    </section>
  );
}
