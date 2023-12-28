import Heading from "../components/Heading";

export default function AboutUs() {
  return (
    <section className="aboutUs __sectionLock min-h-[50vh] lg:h-[200vh] w-full p-5 lg:px-36 lg:pt-36 lg:pl-48 xl:pl-56 relative z-10">
      <div className="relative __content top-0 lg:max-w-[80rem] lg:h-screen">
        <Heading>
          Blending Passion
          <br /> and Purpose
        </Heading>
        <p className="__fadeIn text-2xl text-cBeige leading-relaxed mt-4 lg:leading-relaxed lg:text-4xl 2xl:text-5xl">
          At Elephant Coffee, our journey began with a love for exceptional coffee and a deep respect for the incredible
          creatures that roam our planet. Learn more about how we marry the art of coffee crafting with a commitment to
          elephant conservation.
        </p>
      </div>
    </section>
  );
}
