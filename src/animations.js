import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const fadeIn = () => {
  const fadeInElements = document.querySelectorAll(".__fadeIn");
  fadeInElements.forEach((char, i) => {
    const text = new SplitType(char, { types: "chars, words" });

    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: char,
        start: "top 60%",
        end: "top 0%",
        scrub: true,
        markers: false,
      },
      opacity: 0.1,
      stagger: 0.01,
    });
  });
};
// const unlockScrollTL = (section) => {
//   gsap.set("body", {
//     overflow: "auto",
//   });
// };
// const sectionLock = () => {
//   const sections = document.querySelectorAll(".__sectionLock");
//   sections.forEach((section) => {
//     const thisTrigger = section.querySelector(".__lockTrigger");
//     const lockScrollTL = gsap.timeline({
//       scrollTrigger: {
//         trigger: thisTrigger,
//         start: "bottom center",
//         markers: true,
//       },
//     });

//     lockScrollTL.set("body", {
//       overflow: "hidden",

//       onComplete: function () {
//         setTimeout(() => {
//           unlockScrollTL(section.id);
//         }, 3000);
//       },
//     });
//   });
// };

export default function initAnimations() {
  //fade in
  fadeIn();

  // sectionLock();

  //gallery scale down
  const galleryTrigger = document.querySelector(".__galleryTrigger");
  const galleryScaledown = document.querySelector(".__galleryAnim");
  gsap.to(galleryScaledown, {
    scrollTrigger: {
      trigger: galleryTrigger,
      start: "top 50%",
      end: "top 0%",
      scrub: true,
      markers: true,
    },
    scaleX: 1,
    scaleY: 1,
  });
}
