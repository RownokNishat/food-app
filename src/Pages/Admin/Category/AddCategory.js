import { async } from "@firebase/util";
import axios from "axios";
import React from "react";

const AddCategory = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const categoryName = form.foodName.value;
    const description = form.description.value;
    const image = form.image.value;

    const body = { categoryName, image, description };

    console.log(body);
    if (!categoryName || !image || !description) {
      return;
    }
    await axios
      .post(`http://localhost:5000/admin/AddFoodCategory`, body, {
        headers: {
          "Content-Type": "Application/json",
        },
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          if (response.data.message === "already in db") {
            alert("already inserted in database");
          }
          alert("successfully inserted data");
          form.reset();
        } else {
          alert("something wrong");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <h1 className="text-3xl text-center font-bold mb-5 mt--5 text-orange-700">
        Add the food category
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 ">
          <label htmlFor="Category Name">Category Name</label>
          <input
            type="text"
            placeholder="Food Name"
            className="input input-bordered w-full input-bordered"
            name="foodName"
            required
          />
          <label htmlFor="">Description</label>
          <textarea
            rows="10"
            cols="50"
            type="text"
            placeholder="Description of the food"
            className="input input-bordered w-full"
            name="description"
            required
          ></textarea>
          <label htmlFor="">Image URL</label>
          <input
            type="text"
            placeholder="Image of the food"
            className="input input-bordered w-full"
            name="image"
            required
          />
        </div>
        <button className="btn btn-success mt-5 mb-7 px-10">Submit</button>
      </form>
    </div>
  );
};

export default AddCategory;
