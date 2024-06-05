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
    <div className="absolute bg-transparent w-full max-w-[360px]">
      <div className="flex justify-between p-2">
        <div className="text-[#ffffff]">
          <Logo className="" />
        </div>
        {isOpen ? (
          <div>
            <button onClick={toggleMenu}>
              <PiCoffeeBeanDuotone className="text-[#ffebd6] text-[2rem]" />
            </button>
            <div className="relative">
              <ul className="absolute flex flex-col gap-10 text-[#ffebd6] font-nunito">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        ) : (
          <button onClick={toggleMenu}>
            <PiCoffeeBeanBold className="text-[#ffebd6] text-[2rem]" />
          </button>
        )}
      </div>
    </div>
  );
}

export default MenuMobile;
