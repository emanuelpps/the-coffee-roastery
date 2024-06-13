import Buttons from "../../../../components/Buttons/Buttons";

function Intro() {
  return (
    <div
      id="intro"
      className={`px-8 pt-[380px] md:px-[5%] md:pt-[20%] text-[#ffebd6] pb-20 bg-cover min-h-screen w-full  md:bg-up-left  bg-no-repeat overflow-y-hidden bg-background-intro-mobile md:bg-background-intro`}
    >
      <div className="flex item-center ">
        <h1 className="font-[500] text-[3rem]  font-playfair md:w-[45%] md:text-[75px] leading-none">
          From Our Roastery to Your Cup, Pure Perfection
        </h1>
      </div>
      <div className="mt-5">
        <Buttons variant="primary" label="Learn More"></Buttons>
      </div>
    </div>
  );
}

export default Intro;
