import ArrowLink from "../components/ArrowLink";

export default function Footer({ isDesktop }: { isDesktop: boolean }) {
  return (
    <footer className="h-screen w-screen bg-cBlack text-cBeige flex flex-col pt-4 justify-center lg:justify-end items-center relative lg:absolute bottom-0 z-20">
      {isDesktop && <h2 className="text-3xl md:text-4xl lg:text-5xl text-cBeige pb-20">Contact us:</h2>}
      <div className="contact flex flex-col lg:flex-row w-full justify-between gap-y-3 max-w-[1440px] px-2 lg:px-12 2xl:px-0">
        <div className="address flex flex-col lg:basis-1/2 text-xl lg:text-2xl gap-y-3 pl-4">
          <h3 className="text-2xl lg:text-4xl font-bold block tracking-wide">Elefant Coffee</h3>
          <div className="flex flex-col lg:flex-row gap-y-6 gap-x-12 leading-6">
            <div className="flex flex-col">
              <p>50 Holburn Lane</p>
              <p>Helmdon</p>
            </div>
            <div className="flex flex-col">
              <p>01632 960756</p>
              <p>info@elcoffee.com</p>
              <p>business@elcoffee.com</p>
            </div>
          </div>
        </div>
        {/* <Logo text light className="w-80 h-80 basis-1/3 flex justify-center" /> */}
        <div className="links flex flex-wrap gap-x-6 flex-row relative items-center lg:basis-1/2 lg:justify-end">
          <ArrowLink href="#" slim>
            Instagram
          </ArrowLink>
          <ArrowLink href="#" slim>
            Facebook
          </ArrowLink>
          <ArrowLink href="#" slim>
            Linkedin
          </ArrowLink>
        </div>
      </div>
      <div className="max-w-[1440px] flex justify-center pt-24">
        <img src="/images/FooterName.svg" alt="Elefant Coffee" />
      </div>
    </footer>
  );
}
