//import BannersContainer from "./components/articles/bannersContainer/BannersContainer";
import About from "./components/about/About";
import FamilyRoasters from "./components/articles/familyRoasters/FamilyRoasters";
import Info from "./components/articles/info/Info";
import NewRelease from "./components/articles/new/NewRelease";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";

function Home() {
  return (
    <div className="font-playfair">
      <Intro />
      <Info />
      <FamilyRoasters />
      <NewRelease />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
