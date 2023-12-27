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
const sectionLock = (lenis) => {
  //>>section lock
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
  //section lock<<
};
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

export function headerChange(trigger, setState) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: "top 80%",
      end: "top 40%",
      scrub: true,
      onUpdate: (self) => {
        const newState = self.progress === 1 ? false : true;
        setState(newState);
      },
    },
  });
  return tl;
}
