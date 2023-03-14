import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import logo from "../../new-assets/logo/Tasty-food-vector-icon.jpg";

const Header = () => {
  const { user, role, logOut } = useContext(AuthContext);

  // let role = "";
  // useEffect(() => {
  //   role = JSON.parse(localStorage.getItem("role"));

  //   console.log("role", role);
  // }, [user]);
  const menuItem = (
    <>
      <li className="font-semibold">
        <Link to="/">Home</Link>
      </li>

      <li className="font-semibold">
        {user ? <Link to="/cart">Cart</Link> : <Link to="/login">Cart</Link>}
      </li>
      <li>
        {role === "admin" ? (
          <Link to="/admin/dashboard">AdminDashboard</Link>
        ) : null}
      </li>
      <li>
        {role !== "admin" ? <Link to="/user/dashboard">Dashboard</Link> : null}
      </li>
    </>
  );
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="navbar bg-base-100 h-20 mb-12 pt-12 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">
            <img className="w-24" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItem}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button onClick={logOut} className="btn btn-outline btn-warning">
              Logout
            </button>
          ) : (
            <button className="btn btn-outline btn-warning">
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
