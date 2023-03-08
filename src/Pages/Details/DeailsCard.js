import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import "./DetailsCard.css";
const DeailsCard = ({ data, index }) => {
  const { id } = useParams();
  const { setIndex } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  const [disable, setDisable] = useState(false);
  const handleAddtoCart = (data) => {
    const localCart = JSON.parse(localStorage.getItem("cart"));
    data.quantity = 1;
    data.payableprice = data.price;
    if (localCart === null) {
      var arr = [];
      arr.push(data);
      console.log("nocart");
      localStorage.setItem("cart", JSON.stringify(arr));
      setCart(data);
      setDisable(true);
    } else {
      var count = 0;
      localCart?.map((singleObj) => {
        if (singleObj.foodName === data.foodName) {
          count = count + 1;
        }
      });
      if (count > 0) {
        alert("Data already in cart");
      } else {
        localCart.push(data);
        localStorage.setItem("cart", JSON.stringify(localCart));
        setDisable(true);
      }
    }
  };

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart"));
    var count = 0;
    localCart?.map((singleObj) => {
      if (singleObj.foodName === data.foodName) {
        count = count + 1;
        setDisable(true);
      }
    });
  }, []);
  const { image, description, foodName, price } = data;
  return (
    <div>
      <div
        style={{
          display: "flex",
          margin: "15px 0px 15px 0px",
          backgroundColor: "whitesmoke",
          padding: "2%",
          borderRadius: "3%",
          boxShadow: "5px 5px lightGray",
        }}
        classfoodName="card card-side bg-base-100 shadow-xl mb-7 bg-s Subscribe
shadow-blue-500/50"
      >
        <div
          style={{
            width: "25%",
          }}
        >
          <figure>
            <img
              style={{
                height: "220px",
                width: "220px",
                borderRadius: "20px",
                marginLeft: "5px",
              }}
              src={image}
              alt="Movie"
            />
          </figure>
        </div>
        <div
          style={{ width: "75%", paddingLeft: "1%" }}
          classfoodName="card-body"
        >
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "700",
            }}
            classfoodName="card-title"
          >
            {foodName}
          </h2>
          <p
            style={{
              fontSize: "15px",
              fontWeight: "500",
              marginTop: "15px",
            }}
          >
            {description}
          </p>

          <h2
            style={{
              fontSize: "20px",
              fontWeight: "700",

              marginTop: "15px",
            }}
          >
            Price: {price} Tk
          </h2>
          <div classfoodName="card-actions justify-end">
            <button
              className={disable ? "disabledButton" : "addToCartButton"}
              disabled={disable}
              onClick={() => {
                handleAddtoCart(data);
              }}
            >
              {disable ? "Already Added" : "Add To Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeailsCard;
