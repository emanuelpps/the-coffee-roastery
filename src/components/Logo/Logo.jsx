import LogoIcon from "./LogoIcon";
import CoffeBean from "/assets/img/coffi-bean.svg";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
function Logo() {
  const { id } = useParams();
  const currentLocation = useLocation();
  const fillColor =
    currentLocation.pathname === "/shop" ||
    currentLocation.pathname === `/shop/${id}` ||
    currentLocation.pathname === "/cart" ||
    currentLocation.pathname === "/checkout"
      ? "#473429"
      : "#FFEBD6";
  return (
    <div className="flex flex-col gap-2 w-full justify-center items-center font-playfair">
      <div className="flex flex-col justify-center leading-none">
        <h4 className="text-[0.4rem] md:text-[1.2rem] tracking-widest">The</h4>
        <div className={`flex `}>
          <p className="text-[1.5rem] md:text-[2.5rem]">C</p>
          <LogoIcon
            color={fillColor}
            className="w-[1.5rem] md:font-[2.5rem] size-1"
            style={{ width: "30px" }}
          ></LogoIcon>
          <p className="text-[1.5rem] md:text-[2.5rem] tracking-widest">FFEE</p>
        </div>
        <p className="text-[1.5rem] md:text-[2.5rem] tracking-widest">
          ROASTERY
        </p>
      </div>
    </div>
  );
}

export default Logo;
