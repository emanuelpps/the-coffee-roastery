import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import { useParams } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function MenuDesktop() {
  const { id } = useParams();
  const currentLocation = useLocation();


  

  return (
    <div
      id="navbar"
      className={`bg-transparent w-full justify-center flex absolute ${
        currentLocation.pathname === "/shop" ||
        currentLocation.pathname === `/shop/${id}` ||
        currentLocation.pathname === "/cart"  ||
            currentLocation.pathname === "/checkout"
          ? "text-[#473429]"
          : "text-[#FFEBD6]"
      } top-5`}
    >
      <div id="navbar-business" className="flex justify-end gap-10 font-nunito">
        <Link
          to="/"
          className={`text-[1.2rem] font-semibold ${
            currentLocation.pathname === "/shop" ||
            currentLocation.pathname === `/shop/${id}` ||
            currentLocation.pathname === "/cart"  ||
            currentLocation.pathname === "/checkout"
              ? "hover:font-outline-2-b"
              : "hover:font-outline-2"
          } hover:font-outline-2`}
        >
          Home
        </Link>
        <HashLink
           to="#about"
          className={`text-[1.2rem] font-semibold ${
            currentLocation.pathname === "/shop" ||
            currentLocation.pathname === `/shop/${id}` ||
            currentLocation.pathname === "/cart"  ||
            currentLocation.pathname === "/checkout"
              ? "hover:font-outline-2-b"
              : "hover:font-outline-2"
          } hover:font-outline-2`} smooth
        >
          About
        </HashLink>
        <HashLink
          smooth to="#contact"
          className={`text-[1.2rem] font-semibold ${
            currentLocation.pathname === "/shop" ||
            currentLocation.pathname === `/shop/${id}` ||
            currentLocation.pathname === "/cart"  ||
            currentLocation.pathname === "/checkout"
              ? "hover:font-outline-2-b"
              : "hover:font-outline-2"
          } hover:font-outline-2`}
        >
          Contact
        </HashLink>
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
          className={`text-[1.2rem] font-semibold ${
            currentLocation.pathname === "/shop" ||
            currentLocation.pathname === `/shop/${id}` ||
            currentLocation.pathname === "/cart"  ||
            currentLocation.pathname === "/checkout"
              ? "hover:font-outline-2-b"
              : "hover:font-outline-2"
          } hover:font-outline-2`}
        >
          Shop Now
        </Link>
        <Link
          to={"/rent"}
          className={`text-[1.2rem] font-semibold ${
            currentLocation.pathname === "/shop" ||
            currentLocation.pathname === `/shop/${id}` ||
            currentLocation.pathname === "/cart"  ||
            currentLocation.pathname === "/checkout"
              ? "hover:font-outline-2-b"
              : "hover:font-outline-2"
          } hover:font-outline-2`}
        >
          Rent Machine
        </Link>
      </div>
    </div>
  );
}

export default MenuDesktop;
