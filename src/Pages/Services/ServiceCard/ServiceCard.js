import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ menu }) => {
  const { _id, categoryName, image, description } = menu;
  return (
    <div className="card card-compact w-5/6 bg-base-100 shadow-xl h-5/6 mt-6 mb-6">
      <figure>
        <img
          src={image}
          className=" w-full"
          style={{ height: "180px" }}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{categoryName}</h2>
        <p>
          {description?.length > 80
            ? description?.slice(0, 80) + "...."
            : description}
        </p>

        <div className="card-actions justify-end">
          <Link to={`/details/${categoryName}`}>
            <button className="btn border-0 bg-orange-700">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
