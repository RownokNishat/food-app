import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../new-assets/logo/Tasty-food-vector-icon.jpg";
import AddCategory from "../Admin/Category/AddCategory";
import FoodAdd from "../Admin/Food/FoodAdd";
import FoodUpdate from "../Admin/Food/FoodUpdate";
import HandleOrder from "../Admin/HandleOrder/HandleOrder";
import OwnOrder from "../OwnOrder/OwnOrder";
const UserDashBoard = () => {
  const [button, setButton] = useState("");
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "15%",
          position: "fixed",
          backgroundColor: "black",
          color: "white",
          height: "100vh",
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: "0% 3% 3% 0%",
        }}
      >
        <Link to="/" className="btn btn-ghost normal-case text-xl mt-10">
          <img className="w-24" src={logo} alt="" />
        </Link>
        <div
          className="sideNav"
          style={{
            marginTop: "50%",
          }}
        >
          <ul>
            <li className="mt-5">
              {" "}
              <button onClick={() => setButton("ownOrder")}>Own Order</button>
            </li>
          </ul>
        </div>
      </div>

      <div
        style={{
          width: "80%",
          marginLeft: "15%",
        }}
      >
        {button === "" ? <OwnOrder></OwnOrder> : null}

        {button === "ownOrder" ? <OwnOrder></OwnOrder> : null}
      </div>
    </div>
  );
};

export default UserDashBoard;
