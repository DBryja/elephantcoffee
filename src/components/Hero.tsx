import ShopButton from "./ShopButton";

export default function Hero() {
  return (
    <section className="hero min-h-[667px] lg:min-h-[800px] xl:h-screen bg-cOrange-100 w-full overflow-hidden relative p-5 lg:px-8 2xl:px-16">
      <div className="hero_image absolute -bottom-12 -left-12 rotate-12 z-0 min-w-[120%] md:min-w-0 md:max-w-[70%] md:left-auto md:-right-24 md:-bottom-24 lg:max-w-[65%] xl:max-w-[70%] xl:-right-36 xl:-bottom-36 2xl:scale-125 2xl:right-0">
        <picture>
          <source media="(max-width: 768px)" srcSet="./images/Hero_Mobile.webp" />
          <source media="(min-width: 769px)" srcSet="./images/Hero_Desktop.webp" />
          <img src="./images/Hero_Desktop.webp" alt="elephant on the plantation" />
        </picture>
      </div>
      <div className="mt-32 relative flex gap-y-6 flex-col lg:mt-56">
        <h1 className="text-6xl md:text-8xl lg:text-9xl lg:leading-[0.8] xl:text-[200px] 2xl:text-[220px] font-headings text-cBeige">
          COFFEE THAT
          <br /> YOU REMEMBER
        </h1>
        <p className="font-main leading-4 text-cBeige text-right max-w-[75%] self-end md:text-xl md:self-start md:text-left md:max-w-[45%] lg:text-2xl lg:max-w-[40%] lg:mt-20 xl:text-2xl xl:max-w-[35%] 2xl:text-4xl">
          Explore the world of premium coffee blends inspired by the majestic elephants.
        </p>
        <ShopButton className="mt-8 before:opacity-80 md:before:opacity-100 lg:mt-0" />
      </div>
    </section>
  );
}
