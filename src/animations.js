import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

function getPosition(element) {
  let xPosition = 0;
  let yPosition = 0;

  while (element) {
    xPosition += element.offsetLeft - element.scrollLeft + element.clientLeft;
    yPosition += element.offsetTop - element.scrollTop + element.clientTop;
    element = element.offsetParent;
  }

  return { x: xPosition, y: yPosition };
}
const fadeIn = (windowHeight) => {
  const fadeInElements = document.querySelectorAll(".__fadeIn");
  fadeInElements.forEach((char, i) => {
    const text = new SplitType(char, { types: "chars, words" });

    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: char,
        start: "top 50%",
        end: `+=${windowHeight * 0.9}`,
        scrub: true,
        markers: false,
      },
      opacity: 0.1,
      stagger: 0.01,
    });
  });
};
const galleryScale = (windowHeight) => {
  const galleryTrigger = document.querySelector(".__galleryTrigger");
  const galleryScaledown = document.querySelector(".__galleryAnim");
  gsap.to(galleryScaledown, {
    scrollTrigger: {
      trigger: galleryTrigger,
      start: "top 50%",
      end: `+=${windowHeight * 0.9}`,
      scrub: true,
      // markers: true,
    },
    scaleX: 0.95,
    scaleY: 0.95,
  });
};
const itemSlider = (windowHeight) => {
  const trigger = document.querySelector(".__itemSliderTrigger");
  const slider = document.querySelector(".itemSlider .slider");
  gsap.to(slider, {
    scrollTrigger: {
      trigger: trigger,
      start: "top 50%",
      end: `+=${windowHeight * 1.9}`,
      scrub: true,
    },
    translateX: "0%",
  });
};

export default function initAnimations(isDesktop) {
  // >>LENIS
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  // LENIS<<

  if (isDesktop) {
    const windowHeight = window.innerHeight;
    //fade in
    fadeIn(windowHeight);
    //gallery Scaledown
    galleryScale(windowHeight);
    //itemSlider
    itemSlider(windowHeight);

    //section lock
    const sections = document.querySelectorAll(".__sectionLock");
    sections.forEach((section) => {
      const content = section.querySelector(".__content");
      const sectionOffsetY = getPosition(section).y;

      lenis.on("scroll", () => {
        const scrollHeight = window.scrollY;
        if (
          scrollHeight > sectionOffsetY &&
          scrollHeight < sectionOffsetY + section.clientHeight - content.clientHeight
        ) {
          content.style.transform = `translateY(${scrollHeight - sectionOffsetY}px)`;
        }
      });
    });
  }

  gsap.to(".bgc", {
    scrollTrigger: {
      trigger: document.querySelector(".itemSlider .slider"),
      start: "top 100%",
      end: "top 50%",
      scrub: true,
      markers: true,
      onUpdate: (self) => {
        console.log(self.trigger);
      },
    },
    backgroundColor: "#FCE8BD",
  });

  return lenis;
}
