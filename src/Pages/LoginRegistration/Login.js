import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import img from "../../new-assets/resturant/image.login2.webp";

const Login = () => {
  const { signIn, role, setRole } = useContext(AuthContext);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        getUserInfo(user.email);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUserInfo = (email) => {
    const body = {
      email: email,
    };
    axios
      .put("http://localhost:5000/login", body, {
        headers: {
          "Content-Type": "Application/json",
        },
      })
      .then(function (res) {
        console.log("backend login user data", res);
        localStorage.setItem("userId", JSON.stringify(res.data._id));
        if (res.data.role === "admin") {
          localStorage.setItem("role", JSON.stringify(res.data.role));
        }
        setRole(res.data.role);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      data-theme="light"
      className="max-w-screen-lg mx-auto hero w-full my-20"
    >
      <div
        className="hero-content grid
      md:grid-cols-2 md:flex-col gap-10 lg:flex-row m "
      >
        <div style={{ width: "550px", height: "500px" }}>
          <img src={img} className="h-full" alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ml-14 mb-5">
          <h1 className="text-5xl font-bold text-center text-orange-800">
            Login now!
          </h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-orange-800">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered text-orange-800"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-orange-800">Password</span>
              </label>
              <input
                type="text"
                name="password"
                required
                placeholder="password"
                className="input input-bordered text-orange-800"
              />
              <label className="label">
                <a
                  href="#"
                  className=" text-orange-800 label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn   font-bold border-0 w-3/4 mx-auto text-lg bg-orange-800">
                Log-in
              </button>
            </div>
          </form>
          <p className="text-center mb-5 font-bold ">
            New in {""}
            <span className="text-yellow-400 font-bold text-lg">
              TASTYFOOD ?? {""}
            </span>
            <Link className="text-orange-600 font-bold" to="/signup">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
