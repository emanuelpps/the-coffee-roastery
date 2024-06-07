import { useState } from "react";
import { PiCoffeeBeanBold } from "react-icons/pi";
import { PiCoffeeBeanDuotone } from "react-icons/pi";
import Logo from "../Logo/Logo";

function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="absolute bg-transparent w-full max-w-[350px]">
      <div className="flex justify-between p-2">
        <div className="text-[#ffffff]">
          <Logo className="" />
        </div>
        {isOpen ? (
          <div className="flex flex-col justify-center items-center relative">
            <button onClick={toggleMenu}>
              <PiCoffeeBeanDuotone className="text-[#ffebd6] text-[2rem]" />
            </button>
            <div className="relative">
              <ul className="flex flex-col right-8 text-[#ffebd6] font-nunito pt-2 absolute w-full  border-10 gap-5">
                <li className="bg-[#473429]">Home</li>
                <li>About</li>
                <li>Contact</li>
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
