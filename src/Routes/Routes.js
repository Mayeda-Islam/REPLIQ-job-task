import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

import AdminDashboard from "../components/AdminDashboard/AdminDashboard";
import AdminLayout from "../Layout/AdminLayout/AdminLayout";

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
  {
    path: "/admin/",
    element: <AdminLayout></AdminLayout>,
    children: [
      { path: "", element: <AdminDashboard /> },
      { path: "customers", element: <AdminDashboard /> },
      { path: "adminOrder", element: <AdminDashboard /> },
    ],
  },
]);
