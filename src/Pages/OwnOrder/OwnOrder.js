import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import styles from "./OwnOrder.module.css";
const OwnOrder = () => {
  const [orders, setOrders] = useState(null);
  const [change, setChange] = useState(true);

  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/orders?email=${user.email}`)
      .then(function (res) {
        setOrders(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [change]);

  const handleDelete = (status, id) => {
    const body = {
      status: status,
      id: id,
    };

    console.log(body);
    axios
      .put(`http://localhost:5000/changeOrdersStatus`, body)
      .then(function (res) {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      className="max-w-screen-lg mx-auto"
      style={{
        height: "100vh",
      }}
    >
      <h2
        style={{
          marginTop: "35px",
        }}
        className="text-3xl text-center font-bold mb-5 mt-4 text-orange-700"
      >
        Own Order
      </h2>

      <div className="overflow-x-auto w-full  mt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Order Items</th>
              <th>Price</th>
              <th>Message</th>
              <th>Order Status</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((d, i) => {
              return (
                <tr key={d._id}>
                  <td>{d.customer}</td>
                  <td>
                    <ul>
                      {d.orderItem.map((x) => {
                        return (
                          <>
                            <li>{x.foodName}</li>
                            <li> - {x.quantity} piece</li>
                          </>
                        );
                      })}
                    </ul>
                  </td>
                  <td>{d.orderPrice}</td>
                  <td>{d.message}</td>

                  <td>{d.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OwnOrder;
