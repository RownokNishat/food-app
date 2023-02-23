import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import CheckOut from "../../Pages/CheckOut/CheckOut";

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
        path: "/checkout/:id",
        element: <CheckOut></CheckOut>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/foodService/${params.id}`),
      },
    ],
  },
]);

export default router;
