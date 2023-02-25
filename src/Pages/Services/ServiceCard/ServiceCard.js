import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ menu }) => {
  const { _id, foodImage, foodName, foodPrice, fooDetails } = menu;
  return (
    <div className="card card-compact w-5/6 bg-base-100 shadow-xl h-5/6 mt-6 mb-6">
      <figure>
        <img
          src={foodImage}
          className=" w-full"
          style={{ height: "200px" }}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{foodName}</h2>
        <p>
          {fooDetails.length > 100
            ? fooDetails.slice(0, 100) + "...."
            : fooDetails}
        </p>
        <h2 className="card-title">Price : {foodPrice} Tk</h2>
        <div className="card-actions justify-end">
          <Link to={`/details/${_id}`}>
            <button className="btn border-0 bg-orange-700">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
