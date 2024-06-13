import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/ShopNow/Shop";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorPage: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        errorElement: <ErrorPage />,
      },
      {
        path: "/contact",
        errorElement: <ErrorPage />,
      },
      {
        path: "/shop",
        errorElement: <ErrorPage />,
      },
      {
        path: "/rent",
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
