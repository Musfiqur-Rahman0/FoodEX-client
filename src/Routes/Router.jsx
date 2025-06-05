import Root from "@/Layouts/Root";
import About from "@/Pages/About/About";
import Login from "@/Pages/authenticationPages/Login";
import Signup from "@/Pages/authenticationPages/Signup";
import Contact from "@/Pages/Contact/Contact";
import ErrorPage from "@/Pages/Error/ErrorPage";
import Fridge from "@/Pages/fridge/Fridge";
import Home from "@/Pages/Home/Home";

import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: Signup,
      },
      {
        path: "/fridge",
        Component: Fridge,
      },
    ],
  },
]);

export default router;
