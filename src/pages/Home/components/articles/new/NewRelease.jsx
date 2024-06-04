import newReleaseImg from "../../../../../assets/img/viennesse.jpg";
import Buttons from "../../../../../components/Buttons/Buttons";
import { useState } from "react";
function NewRelease() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="bg-[#ffebd6] pt-20 pb-20 overflow-x-hidden h-screen">
      <div className="flex justify-center items-center">
        <div
          className="flex ml-20 relative"
          onMouseEnter={() => setShowMore(true)}
          onMouseLeave={() => setShowMore(false)}
        >
          <div
            id="new-release-image-border-2"
            className={`border-[#473429] border-4 p-5 ${
              showMore && "opacity-25"
            }`}
          >
            <img src={newReleaseImg} className="w-[1000px]" />
          </div>
          {showMore && (
            <div className="absolute w-40 h-32 m-auto left-0 right-0 top-10 bottom-0">
              <Buttons variant="primary" label="Shop Now"></Buttons>
            </div>
          )}
        </div>
        <div className="w-full">
          <div className=" w-[80%] ml-20 ">
            <h2 className="font-[400] text-5xl pt-10 pb-5 text-balance text-[#473429] ">
              Introducing Our New Signature Blend:
            </h2>
            <p className="text-xl text-start text-pretty text-[#473429]">
              Discover the luxurious new blend from The Coffee Roastery:
              Viennese Coffee. This exquisite coffee combines the finest Arabica
              beans from Ethiopia and Colombia, delivering rich flavors of dark
              chocolate, caramel, and wild berries with a smooth, velvety
              finish. Our master roasters use advanced techniques to highlight
              the natural sweetness and depth of the beans, ensuring a
              full-bodied, sophisticated taste. Responsibly sourced from
              eco-friendly farms, Viennese Coffee supports sustainable practices
              and farming communities. Perfect for any time of day, Viennese
              Coffee turns every coffee moment into an extraordinary experience.
              Discover it today at our online store to enjoy this luxurious
              blend. Elevate your coffee ritual with Viennese Coffee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewRelease;

/* <div className="bg-[#ffebd6] w-[100%] h-screen justify-center items-center pt-20  text-[rgb(71,52,41)]">
      <div className="flex flex-row justify-center items-center gap-20 bg-white">
        <div className="bg-black">
            <img
              src={newReleaseImg}
              alt="newReleaseImg"
              className="w-60"
              onMouseEnter={() => setShowMore(true)}
              onMouseLeave={() => setShowMore(false)}
            />
            <div className="absolute mt-5">
              {showMore && (
                <Buttons variant="terciary" label="Shop Now"></Buttons>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start text-start">
          <h2 className="font-[400] text-2xl pt-10">
            Introducing Our New Signature Blend:
          </h2>
          <h2 className="font-[400] text-5xl pt-10 pb-5"> Viennese Coffee</h2>
          <p className="text-xl text-start w-[85%]">
            Discover the luxurious new blend from The Coffee Roastery: Viennese
            Coffee. This exquisite coffee combines the finest Arabica beans from
            Ethiopia and Colombia, delivering rich flavors of dark chocolate,
            caramel, and wild berries with a smooth, velvety finish. Our master
            roasters use advanced techniques to highlight the natural sweetness
            and depth of the beans, ensuring a full-bodied, sophisticated taste.
            Responsibly sourced from eco-friendly farms, Viennese Coffee
            supports sustainable practices and farming communities. Perfect for
            any time of day, Viennese Coffee turns every coffee moment into an
            extraordinary experience. Discover it today at our online store to
            enjoy this luxurious blend. Elevate your coffee ritual with Viennese
            Coffee.
          </p>
        </div>
      </div> */
