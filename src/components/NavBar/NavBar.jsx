import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

function NavBar() {
  return (
    <>
      <div className="hidden md:flex lg:flex">
        <MenuDesktop />
      </div>
      <div className="flex sm:flex md:hidden lg:hidden">
        <MenuMobile />
      </div>
    </>
  );
}

export default NavBar;
