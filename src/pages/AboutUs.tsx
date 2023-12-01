import Heading from "../components/Heading2";

export default function AboutUs() {
  return (
    <section className="aboutUs __sectionLock h-[200vh] w-full p-5 md:px-36 md:pt-24 lg:pt-36 lg:pl-48 xl:pl-56 relative">
      <div className="relative __content top-0 lg:max-w-[1400px] lg:h-screen">
        <Heading className="xl:text-[200px]">
          Blending Passion
          <br /> and Purpose
        </Heading>
        <p className="__fadeIn text-2xl text-cBeige leading-relaxed mt-4 md:text-4xl lg:leading-relaxed lg:text-5xl">
          At Elephant Coffee, our journey began with a love for exceptional coffee and a deep respect for the incredible
          creatures that roam our planet. Learn more about how we marry the art of coffee crafting with a commitment to
          elephant conservation.
        </p>
      </div>
    </section>
  );
}
