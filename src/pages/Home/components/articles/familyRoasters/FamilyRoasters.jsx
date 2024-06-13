import Buttons from "../../../../../components/Buttons/Buttons";
import { Link } from "react-router-dom";

function FamilyRoasters() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-cover md:bg-center bg-bottom bg-no-repeat text-[#ffebd6] bg-background-family-roasters-mobile md:bg-background-family-roasters">
      <div className="flex flex-col md:pt-none justify-center items-start gap-10 md:p-20  w-[90%] md:w-full">
        <div className="flex flex-col text-start mt-40 md:mt-0 w-[100%] md:w-[50%]">
          <h2 className="font-[400] text-2xl md:text-5xl md:pt-10 md:pb-5">
            Join the Coffee Roastery Family
          </h2>
          <p className="md:text-xl">
            At The Coffee Roastery, we don&apos;t just brew coffee; we cultivate
            a community of passionate coffee enthusiasts. When you join our
            family, you become part of a tradition that values excellence,
            creativity, and the pure joy that comes from a perfectly roasted
            bean.
          </p>
        </div>
        <Link to={"/rent"} className="mt-2 flex justify-scenter items-center mr-5">
          <Buttons variant="primary" label="Join Now"></Buttons>
        </Link>
      </div>
    </div>
  );
}

export default FamilyRoasters;
