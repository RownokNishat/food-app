import React, { useEffect, useState } from "react";

const Cart = () => {
  const [nodata, setNodata] = useState(true);
  const [data, setdata] = useState([]);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart"));

    if (localCart !== null) {
      setdata(localCart);
      setNodata(false);
    }
  }, [toggle]);
  console.log(data);

  const handleminus = (name) => {
    const localCart = JSON.parse(localStorage.getItem("cart"));
    console.log("minus");

    localCart.map((singleCart, i) => {
      if (name === singleCart.Name) {
        if (singleCart.quantity >= -3) {
          console.log(singleCart.quantity);
          localCart[i] = {
            ...singleCart,
            quantity: singleCart.quantity - 1,
            payablePrice: singleCart.Price * (singleCart.quantity - 1),
          };
          localStorage.setItem("cart", JSON.stringify(localCart));
          setToggle(!toggle);
        } else {
          alert("quantity cannot be negative");
        }
      }
    });
  };
  const handleplus = (name) => {
    const localCart = JSON.parse(localStorage.getItem("cart"));

    localCart.map((singleCart, i) => {
      if (name === singleCart.Name) {
        console.log(singleCart.quantity);
        localCart[i] = {
          ...singleCart,
          quantity: singleCart.quantity + 1,
          payablePrice: singleCart.Price * (singleCart.quantity + 1),
        };
        localStorage.setItem("cart", JSON.stringify(localCart));
        setToggle(!toggle);
      }
    });
  };

  return (
    <div>
      <h2>cart</h2>
      {data?.length > 0 ? (
        <h1>length:{data?.length}</h1>
      ) : (
        <h1>no data in cart</h1>
      )}
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>

                <th>Price</th>
                <th></th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.map((d) => {
                return (
                  <tr key={d.Name}>
                    <td>{d.Name}</td>
                    <td>{d.payablePrice}</td>
                    <td>
                      <button onClick={() => handleminus(d.Name)}>-</button>
                    </td>
                    <td>{d.quantity}</td>
                    <td>
                      <button onClick={() => handleplus(d.Name)}>+</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
