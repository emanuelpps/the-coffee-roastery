import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import NotFound from "../pages/NotFound";

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
        element: <ErrorPage />,
      },
      {
        path: "/rent",
        element: <ErrorPage />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ]
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;

