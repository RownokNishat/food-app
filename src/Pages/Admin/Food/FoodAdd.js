import axios from "axios";
import React, { useEffect, useState } from "react";

const FoodAdd = () => {
  const [category, setCategory] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://new-app-server-rownokjahannishat17-gmailcom.vercel.app/admin/getCatagories`
      )
      .then(function (response) {
        console.log("categoryres", response);
        setCategory(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(category);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const categoryName = form.categoryName.value;
    const foodName = form.foodName.value;
    const description = form.description.value;
    const image = form.image.value;
    const price = form.price.value;

    const body = { categoryName, foodName, image, description, price };

    console.log(body);
    if (!categoryName || !foodName || !image || !description || !price) {
      return;
    }
    await axios
      .post(
        `https://new-app-server-rownokjahannishat17-gmailcom.vercel.app/admin/addFood`,
        body,
        {
          headers: {
            "Content-Type": "Application/json",
          },
        }
      )
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
      <h1 className="text-3xl text-center font-bold mb-5 mt-4 text-orange-700">
        Add Food
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 ">
          <label htmlFor="Category Name">Category Name</label>
          <select
            className="select select-bordered w-full max-w-xs"
            name="categoryName"
          >
            <option disabled selected>
              Category Name
            </option>
            {category?.map((c) => {
              return (
                <option className="text-black" value={c?.categoryName}>
                  {c?.categoryName}
                </option>
              );
            })}
          </select>

          <label htmlFor="Food Name">Food Name</label>
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
          <label htmlFor="">Price</label>
          <input
            type="text"
            placeholder="Price of the food"
            className="input input-bordered w-full"
            name="price"
            required
          />
        </div>
        <button className="btn btn-success mt-5 mb-7 px-10">Submit</button>
      </form>
    </div>
  );
};

export default FoodAdd;
