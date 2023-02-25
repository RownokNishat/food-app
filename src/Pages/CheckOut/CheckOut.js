import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CheckOut = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);
  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.first.value} ${form.last.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.email.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };
  };
  return (
    <div
      className="bg-orange-300 p-20 mb-7
"
    >
      <h2 className="text-4xl text-white font-bold">
        You are about to order:{title}
      </h2>
      <h4 className="text-3xl  text-white font-bold mb-4 mt-4">
        Price:{price}
        TK
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
