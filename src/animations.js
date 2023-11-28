import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function initAnimations() {
  const fadeInElements = document.querySelectorAll(".__fadeIn");
  fadeInElements.forEach((char, i) => {
    const text = new SplitType(char, { types: "chars, words" });

    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: char,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: false,
      },
      opacity: 0.3,
      stagger: 0.1,
    });
  });
}
