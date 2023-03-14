import axios from "axios";
import React, { useState } from "react";
import styles from "./Modal.module.css";

const Modal = ({ setIsOpen, data, setChange, change }) => {
  const [state, setState] = useState({
    formData: {
      categoryName: data?.categoryName,
      foodName: data?.foodName,
      price: data?.price,
      description: data?.description,
      image: data?.image,
      quantity: data?.quantity,
    },
  });

  // categoryName, foodName, image, description, price;
  console.log(data);
  const handleEdit = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      formData: {
        ...state.formData,
        [name]: value,
      },
    });
  };

  const handleSubmit = () => {
    console.log(state.formData);
    axios
      .put(
        `https://new-app-server-rownokjahannishat17-gmailcom.vercel.app/admin/foodUpdate/${data?._id}`,
        state.formData
      )
      .then(function (response) {
        if (response.status == "200") {
          alert("Updated successfully");
        } else {
          alert("Couldn't Delete");
        }
        setChange(!change);
      })
      .catch((err) => {
        alert(err);
        setChange(!change);
      });
  };
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Food Update</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            {" "}
            X
          </button>
          <div className={styles.modalContent}>
            <input
              type="text"
              placeholder="Food Name"
              className="input input-bordered w-full input-bordered mt-2"
              value={state?.formData?.categoryName}
              disabled={true}
            ></input>
            <br></br>{" "}
            <input
              type="text"
              placeholder="Food Name"
              className="input input-bordered w-full input-bordered mt-2"
              value={state?.formData?.foodName}
              name="foodName"
              onChange={handleEdit}
            ></input>
            <br></br>{" "}
            <input
              type="text"
              placeholder="Food price"
              className="input input-bordered w-full input-bordered mt-2"
              value={state?.formData?.price}
              name="price"
              onChange={handleEdit}
            ></input>
            <br></br>
            <textarea
              style={{
                height: "100px",
              }}
              type="text"
              placeholder="Food description"
              className="input input-bordered w-full input-bordered mt-2"
              rows="10"
              cols="50"
              value={state?.formData?.description}
              name="description"
              onChange={handleEdit}
            ></textarea>
            <br></br>{" "}
            <input
              type="text"
              placeholder="Food Image Url"
              className="input input-bordered w-full input-bordered mt-2"
              value={state?.formData?.image}
              name="image"
              onChange={handleEdit}
            ></input>
            <br></br>{" "}
            <input
              type="text"
              placeholder="Food Quantity"
              className="input input-bordered w-full input-bordered mt-2"
              value={state?.formData?.quantity}
              name="quantity"
              onChange={handleEdit}
            ></input>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.deleteBtn}
                onClick={() => {
                  setIsOpen(false);
                  handleSubmit();
                }}
              >
                Submit
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
