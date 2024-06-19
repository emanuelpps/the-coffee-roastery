import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import NotFound from "../pages/NotFound";
//import RentDetail from "../components/RentCard/RentDetail";
import Rent from "../pages/Rent/Rent";
import ShopNow from "../pages/Shop/ShopNow";
import ProductDetail from "../components/Shop/ProductDetail/ProductDetail";
import Cart from "../pages/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element: <ErrorPage />,
      },
      {
        path: "/contact",
        element: <ErrorPage />,
      },
      {
        path: "/shop",
        element: <ShopNow />,
        elementError: <ErrorPage />,
      },
      {
        path: "/rent",
        element: <Rent />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/shop/:id",
        element: <ProductDetail />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
