import Heading from "../components/Heading";

const items: JSX.Element[] = [
  <picture>
    <source media="(max-width: 768px)" srcSet="./images/coffee1@0.5x" />
    <source media="(min-width: 769px)" srcSet="./images/coffee1.png" />
    <img src="./images/coffee1.png" alt="Killimanjaro Majest" />
  </picture>,

  <picture>
    <source media="(max-width: 768px)" srcSet="./images/coffee2@0.5x" />
    <source media="(min-width: 769px)" srcSet="./images/coffee2.png" />
    <img src="./images/coffee1.png" alt="Ngorongo Noir" />
  </picture>,

  <picture>
    <source media="(max-width: 768px)" srcSet="./images/coffee3@0.5x" />
    <source media="(min-width: 769px)" srcSet="./images/coffee3.png" />
    <img src="./images/coffee1.png" alt="Serengeti Sunrise" />
  </picture>,
];

export default function ItemSlider() {
  //   const isDesktop: boolean = document.body.offsetWidth > 1023;
  return (
    <section className="itemSlider __sectionLock h-screen lg:h-[300vh] w-full relative">
      <div className="__content w-full h-screen flex items-center justify-center">
        <Heading className="text-cOrange-300 scale-150">BLENDS & ROASTS</Heading>
        <div className="slider absolute left-0 right-0 translate-x-full flex justify-between px-48 ">
          {items.map((item) => item)}
        </div>
        <div className="__itemSliderTrigger absolute" />
      </div>
    </section>
  );
}
