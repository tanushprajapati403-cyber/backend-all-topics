import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import PublicRoute from "../protectedRoutes/PublicRoute";
import App from "../App";
import MainRoutes from "../protectedRoutes/MainRoutes";
import HomePage from "../pages/HomePage";

const AppRoutes = () => {
   

  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <App />,
        },
      ],
    },
    {
      path: "/main",
      element: <MainRoutes />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
