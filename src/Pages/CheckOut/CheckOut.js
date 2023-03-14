import { async } from "@firebase/util";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import colors from "tailwindcss/colors";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CheckOut = () => {
  const [localCartItem, setLocalCartItem] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart"));
    setLocalCartItem(localCart);

    setTotalPrice(
      localCart?.reduce(
        (totalPrice, currentValue) =>
          totalPrice + parseInt(currentValue.payableprice),
        0
      )
    );
  }, []);

  console.log(totalPrice);

  const { user } = useContext(AuthContext);

  console.log("user", user);
  const handlePlaceOrder = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.first.value} ${form.last.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.msg.value;
    const address = form.address.value;

    const order = {
      customer: name,
      email,
      phone,
      message,
      address,
      orderItem: localCartItem,
      orderPrice: totalPrice,
      status: "Request",
    };
    if (phone.length < 11) {
      alert("phone number should be 11 characters");
    }
    await axios
      .post(
        `https://new-app-server-rownokjahannishat17-gmailcom.vercel.app/orders`,
        order,
        {
          headers: {
            "Content-Type": "Application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);

        if (response.status === 200) {
          alert("Data inserted successfully");
        } else {
          alert("Couldn't insert the data");
        }
        form.reset();
        localStorage.removeItem("cart");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        form.reset();
      });
  };
  return (
    <div
      style={{
        // backgroundColor: "#46b5e8",
        backgroundColor: "#6498ed",
        marginTop: "16px",

        position: "relative",
        top: "15px",
      }}
      className="p-20 mb-7 max-w-screen-lg mx-auto"
    >
      <h2
        style={{
          listStyleType: "square",
          fontWeight: "700",
          fontSize: "25px",
          color: "#edeb9d",
        }}
      >
        You are about to order:
        <span className="text-white">
          <ul
            style={{
              listStyleType: "square",
              marginLeft: "20px",
              fontSize: "18px",
              color: "#edeb9d",
            }}
          >
            {localCartItem?.map((singleCart) => {
              return (
                <li className="text-1xl font-bold" key={singleCart?._id}>
                  {singleCart?.foodName}
                </li>
              );
            })}
          </ul>
        </span>
      </h2>
      <h4
        style={{
          listStyleType: "square",

          fontSize: "20px",
          color: "#edeb9d",
        }}
        className="text-xl  text-white font-bold mb-4 mt-4"
      >
        Price :
        <span
          style={{
            listStyleType: "square",
            marginLeft: "8px",
            fontSize: "22px",
            color: "#edeb9d",
          }}
          className="text-white"
        >
          {totalPrice} Tk
        </span>
      </h4>

      <form onSubmit={handlePlaceOrder}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered w-full input-bordered"
            name="first"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full"
            name="last"
          />
          <input
            type="text"
            placeholder="Your Phone"
            className="input input-bordered w-full"
            name="phone"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            defaultValue={user?.email}
            className="input input-bordered w-full"
            name="email"
            readOnly
          />
        </div>
        <textarea
          className="textarea textarea-bordered h-24 w-full mt-5"
          placeholder="Your message"
          name="msg"
          required
        ></textarea>
        <textarea
          className="textarea textarea-bordered h-24 w-full mt-5"
          placeholder="Your address"
          name="address"
          required
        ></textarea>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <input
            className="btn mt-5 
          border-0 text-red"
            style={{
              backgroundColor: "#edeb9d",
              color: "black",
            }}
            type="submit"
            value="Place your order"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
