export default function GalleryVertical() {
  return (
    <section className="flex flex-col w-full">
      <img src="./images/Gallery_Mobile_Horizontal_2.webp" alt="Elephant picking coffee beans" />
      <div className="relative h-[500px]">
        <img
          className="absolute left-3 top-8"
          src="./images/Gallery_Mobile_Vertical_1.webp"
          alt="Lady holding a bucket of coffee beans"
        />
        <img
          className="absolute right-3 bottom-8"
          src="./images/Gallery_Mobile_Vertical_2.webp"
          alt="Hand picking coffee beans off the tree"
        />
      </div>
      <img src="./images/Gallery_Mobile_Horizontal_1.webp" alt="Wide view of plantation" />
    </section>
  );
}
