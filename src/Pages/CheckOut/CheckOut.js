import { async } from "@firebase/util";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import colors from "tailwindcss/colors";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CheckOut = () => {
  const { id } = useParams();
  const { index } = useContext(AuthContext);
  console.log(id, index);
  const { facility } = useLoaderData();

  useEffect(() => {
    console.log(facility[index]);
  }, [facility, index]);

  const { Name, Price } = facility[index];

  // const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);
  const handlePlaceOrder = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.first.value} ${form.last.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.email.value;

    const order = {
      service: id,
      itemNumber: index,
      serviceName: Name,
      customer: name,
      email,
      phone,
      message,
    };
    if (phone.length < 11) {
      alert("phone number should be 11 characters");
    }
    await axios
      .post("http://localhost:5000/orders", order, {
        headers: {
          "Content-Type": "Application/json",
        },
      })
      .then(function (response) {
        console.log(response);

        if (response.status === 200) {
          alert("Data inserted successfully");
        } else {
          alert("Couldn't insert the data");
        }
      });
  };
  return (
    <div
      className="bg-orange-300 p-20 mb-7
"
    >
      <h2 className="text-2xl text-white font-bold">
        You are about to order:<span className="text-black">{Name}</span>
      </h2>
      <h4 className="text-xl  text-white font-bold mb-4 mt-4">
        Price:
        <span className="text-black">{Price}Tk</span>
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

        <input
          className="btn bg-orange-600 mt-5 
          border-0 text-red"
          type="submit"
          value="Place your order"
        />
      </form>
    </div>
  );
};

export default CheckOut;
