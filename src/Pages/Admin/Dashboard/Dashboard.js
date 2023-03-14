import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../../new-assets/logo/Tasty-food-vector-icon.jpg";
import AddCategory from "../Category/AddCategory";
import FoodAdd from "../Food/FoodAdd";
import FoodUpdate from "../Food/FoodUpdate";
import HandleOrder from "../HandleOrder/HandleOrder";

const DashBoard = () => {
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
              {/* <Link to="/admin/addCategory">Add Category</Link> */}
              <button onClick={() => setButton("addCategory")}>
                Add Category
              </button>
            </li>
            <li className="mt-5">
              <button onClick={() => setButton("addFood")}>Add Food</button>
            </li>
            <li className="mt-5">
              <button onClick={() => setButton("updateFood")}>
                Update Food
              </button>
            </li>
            <li className="mt-5">
              {" "}
              <button onClick={() => setButton("handleOrder")}>
                Handle Order
              </button>
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
        {button === "" ? <AddCategory></AddCategory> : null}
        {button === "addCategory" ? <AddCategory></AddCategory> : null}
        {button === "addFood" ? <FoodAdd></FoodAdd> : null}
        {button === "updateFood" ? <FoodUpdate></FoodUpdate> : null}
        {button === "handleOrder" ? <HandleOrder></HandleOrder> : null}
      </div>
    </div>
  );
};

export default DashBoard;
