import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useParams } from "react-router-dom";

function MenuDesktop() {
  const { id } = useParams();
  const currentLocation = useLocation();

  return (
    <div
      id="navbar"
      className={`bg-transparent w-full justify-center flex absolute ${
        currentLocation.pathname === "/shop" ||
        currentLocation.pathname === `/shop/${id}` ||
        currentLocation.pathname === "/cart"
          ? "text-[#473429]"
          : "text-white"
      } top-5`}
    >
      <div id="navbar-business" className="flex justify-end gap-10 font-nunito">
        <Link
          to="/"
          className={`text-[1.2rem] font-semibold hover:text-[#F7EADD]`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-[1.2rem] font-semibold hover:text-[#d3cecc]"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-[1.2rem] font-semibold hover:text-[#d3cecc]"
        >
          Contact
        </Link>
      </div>
      <div id="navbar-logo" className="flex h-[fit-content] w-[600px]">
        <Logo />
      </div>
      <div
        id="navbar-ecommerce"
        className="flex justify-end gap-10 font-nunito"
      >
        <Link
          to={"/shop"}
          className="text-[1.2rem] font-semibold hover:text-[#d3cecc]"
        >
          Shop Now
        </Link>
        <Link
          to={"/rent"}
          className="text-[1.2rem] font-semibold hover:text-[#d3cecc]"
        >
          Rent Machine
        </Link>
      </div>
    </div>
  );
}

export default MenuDesktop;
