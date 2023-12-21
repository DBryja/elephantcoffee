import React from "react";
import Heading from "../components/Heading";
import ShopButton from "../components/ShopButton";

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
  //   const isDesktop: boolean = document.body.offsetWidth > 1023;
  return (
    <section ref={ref} className="itemSlider __sectionLock h-screen lg:h-[300vh] w-full relative">
      <div className="__content w-full h-screen flex items-center justify-center flex-col relative">
        <Heading className="text-cOrange-200 xl:text-[250px]">BLENDS & ROASTS</Heading>
        <div className="slider absolute left-0 right-0 translate-x-full flex justify-between px-48 ">
          {items.map((item, index) => (
            <picture key={index} className="drop-shadow-2xl">
              <source media="(max-width: 768px)" srcSet={item.sm} />
              <source media="(min-width: 769px)" srcSet={item.lg} />
              <img src={item.lg} alt={item.alt} />
            </picture>
          ))}
        </div>
        <ShopButton dark className="!absolute bottom-16" />
        <div className="__itemSliderTrigger absolute" />
      </div>
    </section>
  );
});

export default ItemSlider;
