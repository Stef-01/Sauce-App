import { DesktopNav } from "./components/DesktopNav";
import { NavbarLogo } from "./components/NavbarLogo";

export const Navbar = () => {
  return (
    <header className="relative text-white box-border caret-transparent z-[3] px-4 py-3.5 md:px-10 md:py-5">
      <div className="items-center box-border caret-transparent gap-x-4 flex justify-between gap-y-4 max-w-[1200px] mx-auto">
        <NavbarLogo />
        <DesktopNav />
      </div>
    </header>
  );
};
