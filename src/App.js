import { RouterProvider } from "react-router-dom";
import "./App.css";
import { PrivateRoute } from "./Pages/PrivateRoute/PrivateRoute";
import router from "./Router/Routes/Routes";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
