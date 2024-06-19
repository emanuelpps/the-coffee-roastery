import CartWidget from "../../components/CartWidget/CartWidget";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet, ScrollRestoration } from "react-router-dom";

function Root() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <ScrollRestoration />
      <CartWidget />
      <Footer />
    </div>
  );
}

export default Root;
