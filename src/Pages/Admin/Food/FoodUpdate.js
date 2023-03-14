import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "../../../Shared/Modal/Modal";
import styles from "./FoodUpdate.module.css";
const FoodUpdate = () => {
  const [foods, setFoods] = useState(null);
  const [change, setChange] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://new-app-server-rownokjahannishat17-gmailcom.vercel.app/getAllFoods"
      )
      .then(function (res) {
        setFoods(res.data);
      })
      .catch((err) => console.log(err));
  }, [change]);

  const handleDelete = (id) => {
    var result = window.confirm("Are you sure Want to delete?");
    if (result) {
      axios
        .delete(
          `https://new-app-server-rownokjahannishat17-gmailcom.vercel.app/admin/foodDelete/${id}`
        )
        .then(function (response) {
          if (response.status == "200") {
            alert("Deleted successfully");
          } else {
            alert("Couldn't Delete");
          }
          setChange(!change);
        })
        .catch((err) => {
          alert(err);
          setChange(!change);
        });
    }
  };

  const handleModal = (d) => {
    setIsOpen(true);
    setData(d);
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
        Update the food
      </h2>

      <div className="overflow-x-auto w-full mt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Food</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Update </th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {foods?.map((d) => {
              return (
                <tr key={d._id}>
                  <td>
                    <img
                      style={{
                        width: "80px",
                        height: "80px",
                      }}
                      src={d.image}
                      alt=""
                    ></img>
                  </td>
                  <td>{d.foodName}</td>
                  <td>{d.price}</td>
                  <td>{d?.quantity ? d?.quantity : 0}</td>
                  <td>
                    <button
                      className={styles.primaryBtn}
                      onClick={() => {
                        handleModal(d);
                      }}
                    >
                      Update
                    </button>
                    {isOpen && (
                      <Modal
                        setIsOpen={setIsOpen}
                        data={data}
                        setChange={setChange}
                        change={change}
                      ></Modal>
                    )}
                  </td>
                  <td>
                    <button className="btn" onClick={() => handleDelete(d._id)}>
                      Delete
                    </button>
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

export default FoodUpdate;
