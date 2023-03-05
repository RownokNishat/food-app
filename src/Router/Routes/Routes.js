import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddCategory from "../../Pages/Admin/AddCategory";
import AddFood from "../../Pages/Admin/AddFood/AddFood";
import FoodAdd from "../../Pages/Admin/FoodAdd";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Cart from "../../Pages/Details/Cart";
import Details from "../../Pages/Details/Details";

import Home from "../../Pages/Home/Home";
import Login from "../../Pages/LoginRegistration/Login";
import Registration from "../../Pages/LoginRegistration/Registration";
import TotalOrders from "../../Pages/TotalOrders/TotalOrders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Registration></Registration>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
      {
        path: "/addfood",
        element: <AddFood></AddFood>,
      },
      {
        path: "/checkout/:id",
        element: <CheckOut></CheckOut>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
      {
        path: "/orders",
        element: <TotalOrders></TotalOrders>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/category",
        element: <AddCategory></AddCategory>,
      },
      {
        path: "/admin/foodadd",
        element: <FoodAdd></FoodAdd>,
      },
    ],
  },
]);

export default router;
