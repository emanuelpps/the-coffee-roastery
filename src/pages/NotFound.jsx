import { Link } from "react-router-dom";
import Buttons from "../components/Buttons/Buttons";

function NotFound() {
  return (
    <div className="bg-background-error-page h-screen bg-cover bg-right bg-no-repeat text-white">
      <div className="flex flex-col justify-center items-end h-[100%] w-[screen] mr-40">
        <h1 className="flex font-[500] text-[3rem] font-playfair  md:text-[75px] ">
         404 Not Found
        </h1>
        <Link to="/">
          <Buttons variant="primary" label="Back to Home"></Buttons>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
