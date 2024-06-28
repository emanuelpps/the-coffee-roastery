import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="pt-20 bg-[#ffebd6] text-playfair w-full font-playfair">
      <div className="flex flex-col justify-center items-center max-auto w-full">
        <hr className=" justify-center items-center max-auto h-px my-0 border-0 dark:bg-[#473429] w-[90%]" />
        <div
          id="footer-info"
          className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-80 pt-10"
        >
          <div className="flex flex-col justify-center items-center ">
            <h2 className="text-2xl text-center">Shop</h2>
            <hr className=" justify-center items-center max-auto h-px my-0 border-0 dark:bg-[#473429] w-[90%] mb-5" />
            <Link to="/shop" className="text-xl text-center mb-2">
              Shop Now
            </Link>
            <Link to="/rent" className="text-xl text-center mb-2">
              Rent Machine
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl text-center">The Coffe Roastery</h2>
            <hr className=" justify-center items-center max-auto h-px my-0 border-0 dark:bg-[#473429] w-[90%] mb-5" />
            <NavLink to="/#about" className="text-xl text-center mb-2">
              About Us
            </NavLink>
            <NavLink to="/#info" className="text-xl text-center mb-2">
              Our Coffee
            </NavLink>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl text-center">Get In Touch</h2>
            <hr className=" justify-center items-center max-auto h-px my-0 border-0 dark:bg-[#473429] w-[90%] mb-5" />
            <p className="text-xl text-center mb-2">+1 (788) 033-3771</p>
            <p className="text-xl text-center mb-2">+1 (890) 028-0779</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center w-[90%] md:justify-between pt-10 pb-5">
          <div>
            <h3>Copyright © 2024 – Emanuel Pagés </h3>
          </div>
          <div>
            <Link to="https://emanuelp-portfolio.vercel.app" target="_blank">
              <h3>See other projects</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
