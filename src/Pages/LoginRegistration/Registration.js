import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../new-assets/signup.webp";
import img2 from "../../new-assets/imgsignup2.jpg";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero w-full my-20">
      <div
        className="hero-content grid
      md:grid-cols-2 md:flex-col gap-10 lg:flex-row m "
      >
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ml-14 mb-5 mt-10">
          <h1 className="text-5xl font-bold text-center text-blue-00">
            Signup!
          </h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue-800"> Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered text-blue-800"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue-800">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered text-blue-800"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue-800">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered text-blue-800"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn   font-bold border-0 w-3/4 mx-auto text-lg bg-blue-500">
                SignUp
              </button>
            </div>
          </form>
          <p className="text-center mb-5 font-bold ">
            Already Have An Account in {""}
            <span className="text-blue-400 font-bold text-lg">
              TASTYFOOD ?? {""}
            </span>
            <Link className="text-blue-500 font-bold" to="/login">
              Login
            </Link>
          </p>
        </div>
        <div className="relative mb-20">
          <img
            src={img}
            style={{ width: "450px", height: "400px" }}
            className="h-full"
            alt=""
          />
          <img
            className="absolute ,h-full left-32 top-36 "
            style={{ width: "400px", height: "350px" }}
            src={img2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Registration;
