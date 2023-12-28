import Logo from "../components/Logo";
import MenuButton from "../components/MenuButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface IHeader {
  isDesktop: boolean;
  light?: boolean;
}
export default function Header({ light, isDesktop }: IHeader) {
  const logoClasses = "h-16 lg:h-[9rem]";
  return (
    <header className="fixed top-0 flex flex-row w-screen p-5 pr-10 lg:p-8 lg:pr-16 xl:px-16 xl:pr-24 justify-between items-center z-50">
      <Logo light={light} animate={isDesktop} text className={logoClasses} />
      <MenuButton light={light} />
    </header>
  );
}
