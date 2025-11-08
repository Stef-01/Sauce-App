export const NavbarLogo = () => {
  return (
    <a
      href="/"
      className="box-border caret-transparent block pl-1 pt-0.5 md:pl-0 md:pt-0"
    >
      <div className="items-center box-border caret-transparent gap-x-2 flex gap-y-2">
        <img
          alt="Partiful logo"
          src="https://c.animaapp.com/mhqpk9sal3ySkH/assets/8.png"
          className="text-transparent aspect-[auto_32_/_32] box-border h-8 max-w-full object-contain w-8"
        />
        <img
          src="https://c.animaapp.com/mhqpk9sal3ySkH/assets/icon-3.svg"
          alt="Icon"
          className="box-border caret-transparent h-full w-20 md:w-[100px]"
        />
      </div>
    </a>
  );
};
