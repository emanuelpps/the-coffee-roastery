import Buttons from "../../../../../components/Buttons/Buttons";
import coffeBeanPrimary from "../../../../../assets/img/coffe-bean-1.png";
import coffeBeanSecondary from "../../../../../assets/img/coffe-bean-2.png";
import coffeBeans from "../../../../../assets/img/coffe-beans.png";
import coffeBeanTerciary from "../../../../../assets/img/coffe-bean-3.png";
import coffeBeansSecondary from "../../../../../assets/img/coffe-beans-1.png";

function Info() {
  return (
    <div className="max-w-[360px] md:w-[100%] md:max-w-[100%] bg-[#ffebd6] text-playfair h-auto pb-40  container-snap">
      <div className="flex flex-col justify-center items-center gap-10 pt-20 ml-20 mr-20 text-[#473429]">
        <div className="flex flex-col justify-center items-center w-[500px] mt-20 mb-10 relative">
          <img
            src={coffeBeanSecondary}
            className="hidden md:flex w-[50px] absolute right-[125%] top-[0%] rotate-[190deg]"
          />
          <h2 className="font-[600] md:text-5xl pb-5">Explore Our Collection</h2>
          <p className="md:text-2xl text-center">
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
            className="hidden md:flex w-[30px] absolute right-[120%]"
          />
          <img
            src={coffeBeanPrimary}
            className="hidden md:flex w-[50px] absolute right-[55%] top-[125%] rotate-[150deg]"
          />
          <img
            src={coffeBeanPrimary}
            className="hidden md:flex w-[25px] absolute left-[157%] top-[1%] rotate-[50deg]"
          />
        </div>
        <img
          src={coffeBeanSecondary}
          className="hidden md:flex w-[40px] absolute right-[15%] top-[154%] rotate-[270deg]"
        />
        <img
          src={coffeBeans}
          className="hidden md:flex w-[25%] absolute right-[5%] top-[145%] rotate-[140deg] blur-[4.5px]"
        />
      </div>
      <div className="flex justify-center items-center gap-20 pt-20 ml-20 mr-20 text-[#473429] text-center relative">
        <img
          src={coffeBeanTerciary}
          className="hidden md:flex w-[10%] absolute left-[5%] top-[1%] rotate-[150deg] blur-[3px] z-50"
        />
        <div className="flex flex-col justify-center items-center w-[500px] h-[200px] z-0 ">
          <h2 className="md:text-4xl pb-5">The Art of Roasting</h2>
          <p className="md:text-xl z-50">
            Roasting coffee is an art, and at The Coffee Roastery, we’ve
            perfected it. Our master roasters bring out the unique flavors and
            aromas hidden within each bean, crafting a symphony of tastes that
            dance on your palate. From light, delicate roasts to bold, rich
            flavors, we cater to every coffee lover’s preference.
          </p>
          <img
            src={coffeBeanPrimary}
            className="hidden md:flex w-[30px] absolute left-[5%] top-[220%] rotate-[140deg]"
          />
          <img
            src={coffeBeanPrimary}
            className="hidden md:flex w-[20px] absolute rotate-[60deg] left-[50%] z-0"
          />
          <img
            src={coffeBeansSecondary}
            className="hidden md:flex w-[30%] absolute right-[90%] top-[85%]  rotate-[170deg] blur-[4px] z-50"
          />
        </div>
        <div className="flex flex-col w-[500px] h-[200px] relative">
          <h2 className="md:text-4xl pb-5">Freshness You Can Taste</h2>
          <p className="md:text-xl z-50">
            We roast our beans in small batches to maintain their freshness and
            deliver a product that’s second to none. Our commitment to quality
            means that you can enjoy the freshest coffee possible, bursting with
            flavor and complexity.
          </p>
          <img
            src={coffeBeanTerciary}
            className="hidden md:flex w-[50px] absolute left-[110%] top-[205%] rotate-[90deg] z-0"
          />
        </div>
      </div>
      <div className="flex justify-center items-center gap-20 pt-20 ml-20 mr-20 text-[#473429] text-center relative">
        <div className="flex flex-col w-[500px] h-[200px]">
          <h2 className="md:text-4xl pb-5">Brewed to Perfection</h2>
          <p className="md:text-xl">
            Whether you’re a seasoned barista or a coffee enthusiast, our beans
            are perfect for every brewing method. From the classic French press
            to the modern espresso machine, our coffee is designed to bring out
            the best in every sip.
          </p>
        </div>
        <img
          src={coffeBeanSecondary}
          className="hidden md:flex w-[30px] absolute left-[70%] z-0 top-[115%] rotate-[250deg]"
        />
        <div className="flex flex-col w-[500px] h-[200px]">
          <h2 className="md:text-4xl pb-5 z-50 text-pretty">
            A Coffee Experience
          </h2>
          <p className="md:text-xl">
            At The Coffee Roastery, it’s not just about coffee – it’s about the
            experience. Join us in our cozy café where the rich aroma of freshly
            brewed coffee fills the air, or enjoy our expertly crafted blends
            from the comfort of your home. Every cup is a moment to savor, a
            journey to embrace.
          </p>
          <img
            src={coffeBeanTerciary}
            className="hidden md:flex w-[50px] absolute left-[50%] top-[135%] rotate-[140deg]"
          />
        </div>
        <img
          src={coffeBeanTerciary}
          className="hidden md:flex w-[22%] absolute right-[1%] top-[107%] rotate-[190deg] blur-[7px] z-60"
        />
      </div>
    </div>
  );
}

export default Info;
