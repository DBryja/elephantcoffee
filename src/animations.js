import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import throttle from "lodash.throttle";

gsap.registerPlugin(ScrollTrigger);

function getPosition(element) {
  var xPosition = 0;
  var yPosition = 0;

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
      markers: true,
    },
    scaleX: 1,
    scaleY: 1,
  });
};

export default function initAnimations() {
  const windowHeight = window.innerHeight;
  //fade in
  fadeIn(windowHeight);
  //gallery Scaledown
  galleryScale(windowHeight);

  //section lock
  const sections = document.querySelectorAll(".__sectionLock");
  sections.forEach((section) => {
    const content = section.querySelector(".__content");
    const sectionOffsetY = getPosition(section).y;

    document.addEventListener(
      "scroll",
      throttle(() => {
        const scrollHeight = window.scrollY;
        if (
          scrollHeight > sectionOffsetY &&
          scrollHeight < sectionOffsetY + section.clientHeight - content.clientHeight
        ) {
          console.log(section);
          content.style.transform = `translateY(${scrollHeight - sectionOffsetY}px)`;
        }
      }),
      1000
    );
  });
}
