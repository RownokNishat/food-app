import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../../new-assets/signup.webp";
import img2 from "../../new-assets/imgsignup2.jpg";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import { userRegistration } from "../../REST_API/user_api";

const Registration = () => {
  const { createUser, setNewUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const address = form.address.value;
    const phone = form.number.value;
    const image = form.image.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });

    // axios
    //   .post(
    //     "http://localhost:5000/users",
    //     {
    //       email: email,
    //       password: password,
    //       name: name,
    //       address: address,
    //       phone: phone,
    //       image: image,
    //       role: "user",
    //     },
    //     {
    //       headers: {
    //         "Content-Type": "Application/json",
    //       },
    //     }
    //   )
    const data = {
      email: email,
      password: password,
      name: name,
      address: address,
      phone: phone,
      image: image,
      role: "user",
    };

    const header = {
      headers: {
        "Content-Type": "Application/json",
      },
    };

    axios
      .post(`http://localhost:5000/users`, data, header)
      .then(function (response) {
        console.log(response);

        if (response.status === 200) {
          console.log("success", response);
          localStorage.setItem(
            "userId",
            JSON.stringify(response.data.insertedId)
          );

          alert("Data inserted successfully");
        } else {
          alert("Couldn't insert the data");
        }
      })
      .catch(function (error) {
        console.log(error);

        alert("Something went wrong");
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
                <span className="label-text text-blue-800">Number</span>
              </label>
              <input
                type="text"
                placeholder="Phone number"
                name="number"
                className="input input-bordered text-blue-800"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue-800">
                  Profile Picture
                </span>
              </label>
              <input
                type="text"
                placeholder="Image"
                name="image"
                className="input input-bordered text-blue-800"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-blue-800">Address</span>
              </label>
              <input
                type="text"
                placeholder="Address"
                name="address"
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
