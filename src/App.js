import axios from "axios";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { PrivateRoute } from "./Pages/PrivateRoute/PrivateRoute";
import router from "./Router/Routes/Routes";

function App() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (typeof window !== undefined) {
      const id = JSON.parse(localStorage.getItem("userId"));
      setUserId(id);
    }
  }, []);

  useEffect(() => {
    if (userId) {
      const body = {
        id: userId,
      };
      axios
        .put("http://localhost:5000/getUserData", body, {
          headers: {
            "Content-Type": "Application/json",
          },
        })
        .then(function (res) {
          console.log("app theke backend login user data", res);
        })
        .catch((err) => console.log(err));
    }
  }, [userId]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
