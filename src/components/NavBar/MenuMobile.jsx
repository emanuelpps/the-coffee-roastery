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
    <div className={`absolute bg-transparent w-full max-w-[380px]`}>
      <div
        className={`flex justify-between p-2  ${
          currentLocation.pathname === "/shop" ? "text-[#473429]" : "text-white"
        }`}
      >
        <div className="text-[#ffffff]">
          <Logo className="" />
        </div>
        {isOpen ? (
          <div className="flex flex-col justify-center items-end relative  max-w-[380px] w-[360px]">
            <button onClick={toggleMenu}>
              <PiCoffeeBeanDuotone className="text-[#ffebd6] text-[2rem]" />
            </button>
            <div className="relative mr-32">
              <ul className="flex flex-col absolute text-[#ffebd6] font-nunito  justify-center items-center w-[140px] min-w-[fit-content] pt-5 pb-5 border-10 gap-5 bg-[#473429] rounded-md">
                <li className="">Home</li>
                <li>About</li>
                <li>Contact</li>
                <Link to={"/shop"}>Shop Now</Link>
                <li>Rent Machine</li>
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
