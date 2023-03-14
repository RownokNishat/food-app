import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./HandleOrder.module.css";
const HandleOrder = () => {
  const [orders, setOrders] = useState(null);
  const [change, setChange] = useState(true);
  useEffect(() => {
    axios
      .get(
        "https://new-app-server-rownokjahannishat17-gmailcom.vercel.app/orders"
      )
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
      .put(
        `https://new-app-server-rownokjahannishat17-gmailcom.vercel.app/changeOrdersStatus`,
        body
      )
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
        Handle Order
      </h2>

      <div className="overflow-x-auto w-full  mt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Order Items</th>
              <th>Price</th>
              <th>Message</th>

              <th>Accept</th>
              <th>Reject</th>
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

                  <td>
                    {d.status === "Request" ? (
                      <button
                        className="btn btn-success"
                        onClick={() => {
                          handleDelete("Accept", d._id);
                          setChange(!change);
                        }}
                      >
                        Accept
                      </button>
                    ) : d.status === "Accept" ? (
                      <button className="btn" disabled={true}>
                        Accepted
                      </button>
                    ) : null}
                  </td>
                  <td>
                    {d.status === "Request" ? (
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          handleDelete("Reject", d._id);
                          setChange(!change);
                        }}
                      >
                        Reject
                      </button>
                    ) : d.status === "Reject" ? (
                      <button className="btn" disabled={true}>
                        Rejected
                      </button>
                    ) : null}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HandleOrder;
