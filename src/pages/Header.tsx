import Logo from "../components/Logo";
import MenuButton from "../components/MenuButton";

export default function Header() {
  return (
    <header className="fixed top-0 flex flex-row w-screen p-5 pr-10 lg:p-8 lg:pr-16 xl:px-16 xl:pr-24 justify-between items-center z-50">
      <Logo text light className="h-24 lg:h-[140px]" />
      <MenuButton light />
    </header>
  );
}
