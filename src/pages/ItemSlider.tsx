import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Heading from "../components/Heading";
import ShopButton from "../components/ShopButton";
import { wrap } from "module";

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

const ItemSlider = React.forwardRef((props: any, ref: React.ForwardedRef<any>) => {
  const isDesktop = window.innerWidth > 767;
  // useEffect(() => {
  //   if (!isDekstop) {
  //     const slider = document.querySelector(".itemSlider .slider");
  //     gsap.to("body", {
  //       scrollTrigger: {
  //         trigger: ".__itemSliderTrigger",
  //         start: "50% 50%",
  //         scrub: true,
  //       },
  //       overflowY: "hidden",
  //     });
  //     gsap.to(slider, {
  //       scrollTrigger: {
  //         trigger: ".__itemSliderTrigger",
  //         start: "50% 50%",
  //         scrub: true,
  //       },
  //       overflowY: "scroll",
  //     });

  //     slider?.addEventListener("scroll", () => {
  //       console.log(Math.abs(slider.scrollTop));
  //       if (slider.scrollHeight - Math.abs(slider.scrollTop) <= slider.clientHeight + 10) {
  //         gsap.to("body", { overflowY: "scroll" });
  //         gsap.to(slider, { overflowY: "hidden" });
  //       } else {
  //         gsap.to("body", { overflowY: "hidden" });
  //         gsap.to(slider, { overflowY: "scroll" });
  //       }
  //     });
  //   }
  // }, [isDekstop]);
  useEffect(() => {
    if (isDesktop) return;
    const wrapper = document.querySelector(".itemSlider .__content");
    const slider = document.querySelector(".itemSlider .slider");

    gsap.to(wrapper, {
      scrollTrigger: {
        trigger: wrapper,
        start: `+=${window.innerHeight / 2} 50%`,
        end: `+=${window.innerHeight * 1.9}`,
        scrub: true,
        onUpdate: (self) => {
          const onEdge = self.progress === 0 || self.progress === 1;
          gsap.set(wrapper, {
            position: onEdge ? "absolute" : "fixed",
            zIndex: onEdge ? "auto" : "20",
            top: self.progress === 1 ? "unset" : 0,
          });
        },
      },
    });
    gsap.to(slider, {
      scrollTrigger: {
        trigger: wrapper,
        start: `+=${window.innerHeight / 2} 50%`,
        end: `+=${window.innerHeight * 1.9}`,
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
    <section ref={ref} className="itemSlider __sectionLock h-[300vh] w-full relative bg-cBeige overflow-y-hidden">
      <div className="__content w-full h-screen flex flex-row items-center justify-center absolute top-0 bottom-0 overflow-y-hidden">
        <Heading className="text-cOrange-200 xl:text-[250px]">BLENDS & ROASTS</Heading>
        <div className="slider absolute max-lg:translate-y-3/4 left-0 right-0 gap-12 flex flex-col justify-between items-center h-full lg:flex-row lg:gap-0 lg:translate-x-full lg:px-48">
          {items.map((item, index) => (
            <picture key={index} className="drop-shadow-2xl block w-auto">
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
});

export default ItemSlider;
