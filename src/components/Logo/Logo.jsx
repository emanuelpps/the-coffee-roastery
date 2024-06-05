import CoffeBean from "../../assets/img/coffi-bean.svg";

function Logo() {
  return (
    <div className="flex flex-col gap-2 w-full justify-center items-center font-playfair">
      <div className="flex flex-col justify-center leading-none">
        <h4 className="text-[0.4rem] md:text-[1.2rem] tracking-widest">The</h4>
        <div className="flex">
          <p className="text-[1.5rem] md:text-[2.5rem]">C</p>
          <img
            src={CoffeBean}
            className="w-[1.5rem] md:w-[2.5rem] font-[#FFEBD6]"
          />
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
