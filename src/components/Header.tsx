import Logo from "./Logo";
import MenuButton from "./MenuButton";

export default function Header() {
  return (
    <header className="flex flex-row max-w-screen w-full p-8 px-32 justify-between items-center">
      <Logo text light className="h-[180px]" />
      <MenuButton />
    </header>
  );
}
