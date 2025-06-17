import Root from "@/Layouts/Root";
import About from "@/Pages/About/About";
import AddFood from "@/Pages/addFood/AddFood";
import Login from "@/Pages/authenticationPages/Login";
import Signup from "@/Pages/authenticationPages/Signup";
import Contact from "@/Pages/Contact/Contact";
import ErrorPage from "@/Pages/Error/ErrorPage";
import Details from "@/Pages/FoodDetails/Details";
import Fridge from "@/Pages/fridge/Fridge";
import Home from "@/Pages/Home/Home";
import MyItems from "@/Pages/myAddedFoodItems/MyItems";

import { createBrowserRouter } from "react-router";
import Privet from "./Privet";
import Spinner from "@/components/ui/Spinner";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <Spinner />,
    children: [
      {
        index: true,
        loader: () =>
          fetch(
            "http://food-server-orpin-six.vercel.app/foods/recent-expaired"
          ),
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
        loader: () => fetch("http://food-server-orpin-six.vercel.app/foods"),
        Component: Fridge,
      },
      {
        path: "/add-food",
        element: (
          <Privet>
            <AddFood />
          </Privet>
        ),
      },
      {
        path: "/my-items",
        element: (
          <Privet>
            <MyItems />
          </Privet>
        ),
      },
      {
        path: "/food/:id",
        loader: ({ params }) =>
          fetch(`http://food-server-orpin-six.vercel.app/food/${params.id}`),
        element: (
          <Privet>
            <Details />
          </Privet>
        ),
      },
    ],
  },
]);

export default router;
