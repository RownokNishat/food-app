import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const DeailsCard = ({ data, index }) => {
  const { id } = useParams();
  const { setIndex } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  const [disable, setDisable] = useState(false);
  const handleAddtoCart = (data) => {
    const localCart = JSON.parse(localStorage.getItem("cart"));
    data.quantity = 1;
    data.payablePrice = data.Price;
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
        if (singleObj.Name === data.Name) {
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
      if (singleObj.Name === data.Name) {
        count = count + 1;
        setDisable(true);
      }
    });
  }, []);
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
              disabled={disable}
              onClick={() => {
                handleAddtoCart(data);
              }}
              className="btn bg-blue-400 border-0"
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
