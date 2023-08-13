import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
