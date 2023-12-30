export default function GalleryHorizontal() {
  return (
    <section className="galleryHorizontal __sectionLock h-[200vh] mt-16 overflow-hidden flex justify-center items-center relative k2:pb-60 k4:pb-[50rem] lg:overflow-visible">
      <div className="relative w-full max-w-[1400px] h-screen max-h-[1200px]">
        <div className="__content __galleryAnim relative h-full -top-1/2 origin-center scale-[2.5] k2:scale-[3]">
          <img
            className="absolute -top-5 left-[38%]"
            src="./images/Gallery_Desktop_Horizontal_1.webp"
            alt="Frying coffee beans"
          />
          <img
            className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2"
            src="./images/Gallery_Desktop_Horizontal_2.webp"
            alt="Elephant picking coffee beans"
          />
          <img
            className="absolute bottom-3 left-12"
            src="./images/Gallery_Desktop_Horizontal_3.webp"
            alt="Wide view of plantation"
          />
          <img
            className="absolute left-4 top-14"
            src="./images/Gallery_Desktop_Vertical_1.webp"
            alt="Lady holding a bucket of coffee beans"
          />
          <img
            className="absolute left-[58%] bottom-12"
            src="./images/Gallery_Desktop_Vertical_2.webp"
            alt="Elephant"
          />
          <img
            className="absolute right-10 top-[15%]"
            src="./images/Gallery_Desktop_Vertical_3.webp"
            alt="Pouring coffee beans"
          />
          <img
            className="absolute right-20 bottom-0"
            src="./images/Gallery_Desktop_Vertical_4.webp"
            alt="Elephant picking coffee beans"
          />
        </div>
      </div>
      <div className="__galleryTrigger absolute top-1/4" />
    </section>
  );
}
