/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import LogoNoText from "../images/LogoNoText";
import Header from "./Header";
import Heading from "../components/Heading";

export default function Menu({ isDesktop }: { isDesktop: boolean }) {
  return (
    <div className="menu bg-cOrange-300 block fixed z-50 overflow-hidden inset-0 opacity-0 transition-opacity duration-300 pointer-events-none">
      <Header light isDesktop={isDesktop} />
      <div className="text-cBeige text-5xl font-headings flex flex-col gap-6 mt-32 lg:mt-60 lg:pl-12 ml-5 [&>*]:w-min">
        <a href="/">
          <Heading>HOME</Heading>
        </a>
        <a href="/shop">
          <Heading>SHOP</Heading>
        </a>
        <button onClick={() => window.scrollTo(0, document.body.scrollHeight)} className="text-left">
          <Heading>CONTACT</Heading>
        </button>
      </div>
      <div className="w-60 h-60 lg:w-1/3 lg:h-auto lg:aspect-square absolute right-0 bottom-0 translate-x-[23%] translate-y-[21%] -rotate-12">
        <LogoNoText />
      </div>
    </div>
  );
}
