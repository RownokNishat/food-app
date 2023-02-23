import React from "react";
import img1 from "../../../new-assets/resturant/res2.jpg";
import img2 from "../../../new-assets/resturant/res-1.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative ">
          <img
            src={img1}
            alt=""
            style={{ height: "400px", width: "450px" }}
            className="rounded-lg shadow-2xl "
          />
          <img
            src={img2}
            alt=""
            style={{ height: "250px", width: "280px" }}
            className="rounded-lg shadow-2xl absolute w-40  h-40 right-0 top-2/4"
          />
        </div>
        <div className="w-1/2 p-8">
          <p className="text-2xl  text-orange-600 font-bold mb-5 ">About Us</p>
          <h1 className="text-5xl font-bold text-yellow-800">
            Tasty Food and Spices
          </h1>
          <p className="py-6 text-orange-600 font-bold">
            A taste of fresh and healthy ingredients & seasonal flavours
            <br />
            full of freshness and taste.
            <br /> Enjoy the food in a very peacfull place.
          </p>
          <button className="btn btn-primary  bg-amber-700 border-0">
            Order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
