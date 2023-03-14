import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";

const TotalOrders = () => {
  const { user, loading } = useContext(AuthContext);
  const [orders, setOrder] = useState([]);

  useEffect(() => {
    fetch(
      `https://new-app-server-rownokjahannishat17-gmailcom.vercel.app/orders?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [user, loading]);

  console.log(orders);
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>

              <th>Food Item</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <OrderRow key={order._id} order={order}></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalOrders;
