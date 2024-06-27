//import BannersContainer from "./components/articles/bannersContainer/BannersContainer";
import DevelopBanner from "../../components/developmentBanner/DevelopBanner";
import About from "./components/about/About";
import FamilyRoasters from "./components/articles/familyRoasters/FamilyRoasters";
import Info from "./components/articles/info/Info";
import NewRelease from "./components/articles/new/NewRelease";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import { useRef } from "react";

function Home() {
  const learnMoreRef = useRef(null);
  return (
    <div className="overflow-x-hidden font-playfair">
      <DevelopBanner />
      <Intro learnMoreRef={learnMoreRef} />
      <Info learnMoreRef={learnMoreRef} />
      <FamilyRoasters />
      <NewRelease />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
