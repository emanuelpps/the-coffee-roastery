import { useState } from "react";
import { PiCoffeeBeanBold } from "react-icons/pi";
import { PiCoffeeBeanDuotone } from "react-icons/pi";
import Logo from "../Logo/Logo";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function MenuMobile() {
  const currentLocation = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`fixed top-0  bg-transparent w-full max-w-[100vw] z-50 `}>
      <div
        className={`flex justify-between p-2 bg-[#473429] `}
      >
        <div className="text-[#ffffff]">
          <Logo/>
        </div>
        {isOpen ? (
          <div className="flex flex-col justify-center items-end relative  max-w-[380px] w-[360px]">
            <button onClick={toggleMenu}>
              <PiCoffeeBeanDuotone className="text-[#ffebd6] text-[2rem]" />
            </button>
            <div className="relative mr-32">
              <ul className="flex flex-col absolute text-[#ffebd6] font-nunito  justify-center items-center w-[140px] min-w-[fit-content] pt-5 pb-5 border-10 gap-5 bg-[#473429] rounded-md">
                <Link to={"/"}>Home</Link>
                <Link to={"/#about"}>About</Link>
                <Link to={"/#contact"}>Contact</Link>
                <Link to={"/shop"}>Shop Now</Link>
                <Link to={"/rent"}>Rent Machine</Link>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center  items-center relative">
            <button onClick={toggleMenu}>
              <PiCoffeeBeanBold className="text-[#ffebd6] text-[2rem]" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuMobile;
