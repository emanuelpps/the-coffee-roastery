import Buttons from "../../../../components/Buttons/Buttons";

function Intro() {
  return (
    <div
      id="intro"
      className={`px-8 pt-[380px] md:px-20 md:pt-[280px] text-[#ffebd6] pb-20 h-screen w-full  bg-up-left bg-cover bg-no-repeat overflow-y-hidden bg-background-intro-mobile md:bg-background-intro`}
    >
      <h1 className="font-[500] text-[3rem]  font-playfair md:w-[45%] md:text-[75px] leading-none">
        From Our Roastery to Your Cup, Pure Perfection
      </h1>
      <div className="mt-5">
        <Buttons variant="primary" label="Learn More"></Buttons>
      </div>
    </div>
  );
}

export default Intro;
