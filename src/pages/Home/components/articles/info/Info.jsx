import Buttons from "../../../../../components/Buttons/Buttons";
import coffeBeanPrimary from "../../../../../assets/img/coffe-bean-1.png";
import coffeBeanSecondary from "../../../../../assets/img/coffe-bean-2.png";
import coffeBeans from "../../../../../assets/img/coffe-beans.png";
import coffeBeanTerciary from "../../../../../assets/img/coffe-bean-3.png";
import coffeBeansSecondary from "../../../../../assets/img/coffe-beans-1.png";

function Info() {
  return (
    <div className="bg-[#ffebd6] text-playfair h-[1500px]  container-snap">
      <div className="flex flex-col justify-center items-center gap-10 pt-20 ml-20 mr-20 text-[#473429]">
        <div className="flex flex-col justify-center items-center w-[500px] mt-20 mb-10">
          <img
            src={coffeBeanSecondary}
            className="w-[50px] absolute left-[5%] top-[125%] rotate-[190deg]"
          />
          <h2 className="font-[600] text-5xl pb-5">Explore Our Collection</h2>
          <p className="text-2xl text-center">
            Dive into our diverse range of coffee blends and single-origin
            selections. Each offering is a testament to our dedication to
            providing you with the best coffee experience possible. From smooth
            and mellow to dark and robust, there&apos;s something for everyone.
          </p>
          <div className="mt-5">
            <Buttons variant="secondary" label="Shop Now"></Buttons>
          </div>
          <img
            src={coffeBeanPrimary}
            className="w-[30px] absolute left-[10%]"
          />
          <img
            src={coffeBeanPrimary}
            className="w-[50px] absolute right-[15%] top-[125%] rotate-[90deg]"
          />
        </div>
        <img
            src={coffeBeanSecondary}
            className="w-[40px] absolute right-[15%] top-[154%] rotate-[270deg]"
          />
        <img
          src={coffeBeans}
          className="w-[330px] absolute right-[5%] top-[145%] rotate-[140deg] blur-[3.5px]"
        />
      </div>
      <div className="flex justify-center items-center gap-20 pt-20 ml-20 mr-20 text-[#473429] text-center">
        <img
          src={coffeBeanTerciary}
          className="w-[150px] absolute left-[15%] top-[165%] rotate-[140deg] blur-[2px]"
        />
        <div className="flex flex-col justify-center items-center w-[500px] h-[200px]">
          <h2 className="text-4xl pb-5">The Art of Roasting</h2>
          <p className="text-xl z-50">
            Roasting coffee is an art, and at The Coffee Roastery, we’ve
            perfected it. Our master roasters bring out the unique flavors and
            aromas hidden within each bean, crafting a symphony of tastes that
            dance on your palate. From light, delicate roasts to bold, rich
            flavors, we cater to every coffee lover’s preference.
          </p>
          <img
            src={coffeBeanPrimary}
            className="w-[30px] absolute left-[35%] top-[220%] rotate-[140deg]"
          />
          <img
            src={coffeBeanPrimary}
            className="w-[20px] absolute rotate-[60deg] left-[50%] z-0"
          />
          <img
            src={coffeBeansSecondary}
            className="w-[330px] absolute left-[0%] top-[225%]  rotate-[90deg] blur-[3.5px] z-50"
          />
        </div>
        <div className="flex flex-col w-[500px] h-[200px]">
          <h2 className="text-4xl pb-5">Freshness You Can Taste</h2>
          <p className="text-xl z-50">
            We roast our beans in small batches to maintain their freshness and
            deliver a product that’s second to none. Our commitment to quality
            means that you can enjoy the freshest coffee possible, bursting with
            flavor and complexity.
          </p>
          <img
            src={coffeBeanTerciary}
            className="w-[50px] absolute left-[90%] top-[205%] rotate-[90deg] z-0"
          />
        </div>
      </div>
      <div className="flex justify-center items-center gap-20 pt-20 ml-20 mr-20 text-[#473429] text-center">
        <div className="flex flex-col w-[500px] h-[200px]">
          <h2 className="text-4xl pb-5">Brewed to Perfection</h2>
          <p className="text-xl">
            Whether you’re a seasoned barista or a coffee enthusiast, our beans
            are perfect for every brewing method. From the classic French press
            to the modern espresso machine, our coffee is designed to bring out
            the best in every sip.
          </p>
        </div>
        <img
            src={coffeBeanSecondary}
            className="w-[30px] absolute left-[70%] z-0 top-[225%] rotate-[250deg]"
          />
        <div className="flex flex-col w-[500px] h-[200px]">
          <h2 className="text-4xl pb-5 z-50 text-pretty">A Coffee Experience</h2>
          <p className="text-xl">
            At The Coffee Roastery, it’s not just about coffee – it’s about the
            experience. Join us in our cozy café where the rich aroma of freshly
            brewed coffee fills the air, or enjoy our expertly crafted blends
            from the comfort of your home. Every cup is a moment to savor, a
            journey to embrace.
          </p>
          <img
          src={coffeBeanTerciary}
          className="w-[50px] absolute left-[50%] top-[265%] rotate-[140deg]"
        />
        </div>
        <img
          src={coffeBeanTerciary}
          className="w-[300px] absolute right-[1%] top-[257%] rotate-[190deg] blur-[6px] z-60"
        />
      </div>
    </div>
  );
}

export default Info;
