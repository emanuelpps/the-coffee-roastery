import coffeBackground from "../../../../../assets/img/table-coffe-background.webp";
import Buttons from "../../../../../components/Buttons/Buttons";

function FamilyRoasters() {
  return (
    <div
      className="flex justify-center items-center w-full h-screen bg-cover bg-center bg-no-repeat text-[#ffebd6]"
      style={{
        backgroundImage: `url(${coffeBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-start items-start gap-10 p-20 w-full">
        <div className="flex flex-col text-start w-[50%]">
          <h2 className="font-[400] text-5xl pt-10 pb-5">
            Join the Coffee Roastery Family
          </h2>
          <p className="text-xl">
            At The Coffee Roastery, we don&apos;t just brew coffee; we cultivate
            a community of passionate coffee enthusiasts. When you join our
            family, you become part of a tradition that values excellence,
            creativity, and the pure joy that comes from a perfectly roasted
            bean.
          </p>
        </div>
        <div className="mt-2 flex justify-scenter items-center mr-5">
          <Buttons variant="primary" label="Join Now"></Buttons>
        </div>
      </div>
    </div>
  );
}

export default FamilyRoasters;
