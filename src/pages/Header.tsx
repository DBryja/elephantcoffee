import Logo from "../components/Logo";
import MenuButton from "../components/MenuButton";

export default function Header() {
  const logoClasses = "h-16 lg:h-[140px]";
  const isDesktop: boolean = document.body.offsetWidth > 1023;
  return (
    <header className="fixed top-0 flex flex-row w-screen p-5 pr-10 lg:p-8 lg:pr-16 xl:px-16 xl:pr-24 justify-between items-center z-50">
      <Logo light={isDesktop} animate={isDesktop} text className={logoClasses} />
      <MenuButton light={isDesktop} />
    </header>
  );
}
