import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import PublicRoute from "../protectedRoutes/PublicRoute";
import App from "../App";
import MainRoutes from "../protectedRoutes/MainRoutes";
import HomePage from "../pages/HomePage";
import { useDispatch } from "react-redux";
import { api } from "../config/axiosinstance";
import { addUser } from "../features/AuthSlice";

const AppRoutes = () => {
  const dispatch = useDispatch();

  const userHydration = async () => {
    try {
      let res = await api.get("/api/auth/getMe");
      dispatch(addUser(res.data.data));
    } catch (error) {
      console.log("error in hydration", error);
    }
  };

  useEffect(() => {
    userHydration();
  }, []);

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
