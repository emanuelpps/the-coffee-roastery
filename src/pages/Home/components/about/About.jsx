import coffeBackground from "../../../../assets/img/tool-used-coffee-2.webp";

function About() {
  return (
    <div
      id="about"
      className="px-20 pt-20  text-[#ffebd6] pb-20  w-full bg-[object-fit] bg-gradient-to-b from-gray-900 to-transparent bg-center bg-no-repeat overflow-y-hidden"
      style={{ backgroundImage: `url(${coffeBackground})` }}
    >
      <div className="flex justify-end items-center w-full">
        <div className="h-full w-[45%] p-10">
          <h2 className="font-[400] text-5xl pt-10 pb-5">About Us</h2>
          <div className="flex flex-col gap-5">
            <p className="text-xl shadow-black">
              Founded in 2018, The Coffee Roastery is dedicated to providing
              high-quality coffee beans sourced from around the world.Our unique
              selling point is our personalized roasting process, which imparts
              a distinctive flavor that has become synonymous with our brand.
            </p>
            <p className="text-xl shadow-black">
              At The Coffee Roastery, we primarily cater to the wholesale
              market, supplying premium coffee beans to cafés in various parts
              of the world. In addition to our core offering, we provide coffee
              machinery rental services, allowing entrepreneurs to equip their
              ventures with top-tier equipment without the upfront investment.
            </p>
            <p className="text-xl shadow-black">
              Our commitment to excellence and innovation in coffee roasting
              ensures that every bean we sell meets the highest standards of
              quality and flavor, making us a trusted partner for coffee
              enthusiasts and businesses alike.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
