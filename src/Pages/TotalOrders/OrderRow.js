import React from "react";

const OrderRow = ({ order }) => {
  const { serviceName, email, customer, phone } = order;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          {" "}
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
      </td>
      <td>
        <th>
          <button className="btn btn-ghost btn-xs">{email}</button>
        </th>
      </td>
    </tr>
  );
};

export default OrderRow;
