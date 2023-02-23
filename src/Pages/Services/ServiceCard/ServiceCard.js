import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ menu }) => {
  const { _id, img, title, price, description } = menu;
  return (
    <div className="card card-compact w-5/6 bg-base-100 shadow-xl h-5/6 mt-6 mb-6">
      <figure>
        <img
          src={img}
          className=" w-full"
          style={{ height: "200px" }}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {description.length > 100
            ? description.slice(0, 100) + "...."
            : description}
        </p>
        <h2 className="card-title">Price : {price} Tk</h2>
        <div className="card-actions justify-end">
          <Link to={`/checkout/${_id}`}>
            <button className="btn border-0 bg-orange-700">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
