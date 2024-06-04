import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function NavBar() {
  return (
    <div
      id="navbar"
      className="bg-transparent w-full justify-center flex absolute text-white top-5"
    >
      <div id="navbar-business" className="flex justify-end gap-10 font-nunito">
        <Link to="/" className="text-[1.2rem] font-semibold hover:text-black">
          Home
        </Link>
        <Link
          to="/about"
          className="text-[1.2rem] font-semibold hover:text-black"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-[1.2rem] font-semibold hover:text-black"
        >
          Contact
        </Link>
      </div>
      <div id="navbar-logo" className="flex h-[fit-content] w-[600px]">
        <Logo />
      </div>
      <div id="navbar-ecommerce" className="flex justify-end gap-10 font-nunito">
        <Link
          to={"/shop"}
          className="text-[1.2rem] font-semibold hover:text-black"
        >
          Shop Now
        </Link>
        <Link
          to={"/rent"}
          className="text-[1.2rem] font-semibold hover:text-black"
        >
          Rent Machine
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
