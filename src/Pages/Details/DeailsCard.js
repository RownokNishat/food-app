import React, { useState } from "react";
import { Link } from "react-router-dom";

const DeailsCard = ({ data, index }) => {
  const [cart, setCart] = useState([]);
  const handleAddtoCart = (data) => {
    const localCart = JSON.parse(localStorage.getItem("cart"));
    if (!localCart) {
      localStorage.setItem("cart", JSON.stringify(data));
      setCart(data);
    } else {
      var newCart = [...localCart];
      newCart.push(data);
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };
  const { Image, Description, Name, Price } = data;
  return (
    <div>
      <div
        className="card card-side bg-base-100 shadow-xl mb-7 bg-s Subscribe
shadow-blue-500/50"
      >
        <figure>
          <img
            style={{
              height: "220px",
              width: "220px",
              borderRadius: "20px",
              marginLeft: "20px",
            }}
            src={Image}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{Name}</h2>
          <p>{Description}</p>
          <h2>Price: {Price} Tk</h2>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleAddtoCart(data)}
              className="btn bg-blue-400 border-0"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeailsCard;
