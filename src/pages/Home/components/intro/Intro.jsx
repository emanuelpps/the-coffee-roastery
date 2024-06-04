import Buttons from "../../../../components/Buttons/Buttons";
import coffeBackground from "../../../../assets/img/background-intro.webp";

function Intro() {
  return (
    <div
      id="intro"
      className="px-20 pt-[280px] text-[#ffebd6] pb-20 h-screen w-full  bg-gradient-to-b from-gray-900 to-transparent bg-cneter bg-cover bg-no-repeat overflow-y-hidden"
      style={{ backgroundImage: `url(${coffeBackground})`,
     }}
    >
      <h1 className="font-[500]  font-playfair w-[45%] text-[75px] leading-none">
        From Our Roastery to Your Cup, Pure Perfection
      </h1>
      <div className="mt-5">
        <Buttons variant="primary" label="Learn More"></Buttons>
      </div>
    </div>
  );
}

export default Intro;
