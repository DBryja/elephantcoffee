import Heading from "../components/Heading";

export default function AboutUs() {
  return (
    <section className="aboutUs __sectionLock lg:h-screen p-5 md:px-36 md:pt-24 lg:pl-48 lg:pr-36 xl:pl-56 relative">
      <div className="relative top-0">
        <Heading>Blending Passion and Purpose</Heading>
        <p className="__fadeIn text-2xl text-cBeige leading-relaxed mt-4 md:text-4xl lg:text-6xl lg:leading-relaxed">
          At Elephant Coffee, our journey began with a love for exceptional coffee and a deep respect for the incredible
          creatures that roam our planet. Learn more about how we marry the art of coffee crafting with a commitment to
          elephant conservation.
        </p>
        <div className="__lockTrigger absolute top-1/2 h-px" />
      </div>
    </section>
  );
}
