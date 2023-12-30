import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import Lenis from "@studio-freight/lenis";
gsap.registerPlugin(ScrollTrigger);

const sectionLock = (lenis) => {
  //>>section lock
  const sections = document.querySelectorAll(".__sectionLock");
  sections.forEach((section) => {
    const content = section.querySelector(".__content");
    gsap.to(section, {
      scrollTrigger: {
        trigger: content,
        start: "center center",
        end: `+=100%`,
        pin: content,
        scrub: true,
      },
    });
  });
  //section lock<<
};
const fadeIn = () => {
  const fadeInElements = document.querySelectorAll(".__fadeIn");
  fadeInElements.forEach((char, i) => {
    const text = new SplitType(char, { types: "chars, words" });

    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: char,
        start: "top 50%",
        end: `+=90%`,
        scrub: true,
        markers: false,
      },
      opacity: 0.1,
      stagger: 0.01,
    });
  });
};
const galleryScale = () => {
  const multiplier = window.innerWidth / 2000;
  const galleryTrigger = document.querySelector(".__galleryTrigger");
  const galleryScaledown = document.querySelector(".__galleryAnim");
  gsap.to(galleryScaledown, {
    scrollTrigger: {
      trigger: galleryTrigger,
      start: "top 50%",
      end: `+=90%`,
      scrub: true,
    },
    top: 0,
    scaleX: multiplier,
    scaleY: multiplier,
  });
};
const itemSlider = () => {
  const slider = document.querySelector(".itemSlider .slider");
  gsap.to(slider, {
    scrollTrigger: {
      trigger: ".itemSlider",
      start: "top top",
      end: `+=90%`,
      scrub: true,
    },
    translateX: "0%",
  });

  gsap.to(".wrap", {
    scrollTrigger: {
      trigger: "footer",
      start: "top bottom",
      end: "top bottom",
      scrub: true,
      onUpdate: (self) => {
        if (self.progress === 1) gsap.set(".itemSlider .__content", { position: "fixed", translateY: 0 });
      },
    },
  });
};

export function initAnimations(isDesktop) {
  // >>LENIS
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  // LENIS<<

  const windowHeight = window.innerHeight;
  if (isDesktop) {
    sectionLock(lenis);
    fadeIn(windowHeight);
    galleryScale(windowHeight);
    itemSlider(windowHeight);
  }
  return lenis;
}

export function backgroundChange() {
  gsap.to(".bgc", {
    scrollTrigger: {
      trigger: document.querySelector(".itemSlider"),
      start: "top 100%",
      end: "top 50%",
      scrub: true,
    },
    backgroundColor: "#FCE8BD",
  });
}

export function headerChange(trigger, setState, start, end) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: start ? start : "top 80%",
      end: end ? end : "top 70%",
      scrub: true,
      onUpdate: (self) => {
        const newState = self.progress === 1 ? false : true;
        setState(newState);
      },
    },
  });
  return tl;
}
