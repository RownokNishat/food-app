import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddCategory from "../../Pages/Admin/Category/AddCategory";
import Dashboard from "../../Pages/Admin/Dashboard/Dashboard";
import FoodAdd from "../../Pages/Admin/Food/FoodAdd";
import FoodUpdate from "../../Pages/Admin/Food/FoodUpdate";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Cart from "../../Pages/Details/Cart";
import Details from "../../Pages/Details/Details";

import Home from "../../Pages/Home/Home";
import Login from "../../Pages/LoginRegistration/Login";
import Registration from "../../Pages/LoginRegistration/Registration";
import { PrivateRoute } from "../../Pages/PrivateRoute/PrivateRoute";
import TotalOrders from "../../Pages/TotalOrders/TotalOrders";
import UserDashBoard from "../../Pages/UserDashBoard/UserDashBoard";

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
        path: "/details/:categoryName",
        element: <Details></Details>,
      },

      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
      },
      {
        path: "/orders",
        element: <TotalOrders></TotalOrders>,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      // {
      //   path: "/admin/addCategory",
      //   element: (
      //     <PrivateRoute>
      //       <AddCategory></AddCategory>
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/admin/foodadd",
      //   element: (
      //     <PrivateRoute>
      //       <FoodAdd></FoodAdd>
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/admin/foodUpdate",
      //   element: (
      //     <PrivateRoute>
      //       <FoodUpdate></FoodUpdate>
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
  {
    path: "/user/dashboard",
    element: <UserDashBoard></UserDashBoard>,
  },
  {
    path: "/admin/dashboard",
    element: <Dashboard></Dashboard>,
  },
]);

export default router;
