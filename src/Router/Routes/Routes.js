import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddFood from "../../Pages/Admin/AddFood/AddFood";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Details from "../../Pages/Details/Details";

import Home from "../../Pages/Home/Home";
import Login from "../../Pages/LoginRegistration/Login";
import Registration from "../../Pages/LoginRegistration/Registration";

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
    ],
  },
]);

export default router;
