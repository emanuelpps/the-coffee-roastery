import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage";

function Root() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <ErrorPage/>
      <ScrollRestoration />
      <Footer />
    </div>
  );
}

export default Root;
