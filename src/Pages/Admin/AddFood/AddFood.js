import axios from "axios";
import React, { useEffect, useState } from "react";
import "./AddFood.css";

const AddFood = () => {
  const [ratingError, setRatingError] = useState(false);
  const [description, setDescription] = useState("");
  const [food, setFood] = useState([
    { Name: "", Price: "", Image: "", Description: "" },
  ]);

  const [state, setState] = useState({
    isLoading: false,
    formData: {
      foodName: "",
      foodPrice: "",
      fooDetails: "",
      foodImage: "",
      facility: "",
    },
  });

  useEffect(() => {
    setState({
      ...state,
      formData: {
        ...state.formData,
        facility: food,
      },
    });
  }, [food]);

  const onEdit = (e) => {
    const formData = state.formData;
    const name = e.target.name;
    const value = e.target.value;
    console.log("formdata", formData);

    setState({
      ...state,
      formData: {
        ...formData,
        [name]: value,
      },
    });
    console.log(state.formData);
  };

  const handlefoodInput = (e, index) => {
    const { name, value } = e.target;
    const list = [...food];
    list[index][name] = value;
    setFood(list);
  };

  const removefood = (index) => {
    const list = [...food];
    list.splice(index, 1);
    setFood(list);
  };

  const addfood = () => {
    setFood([...food, { Name: "", Price: "", Image: "", Description: "" }]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setState({ ...state, isLoading: true });
    food.map((f, i) => {
      if (!f.Name || !f.Description || !f.Image || !f.Price) {
        food.splice(i, 1);
      }
      setFood(food);
    });

    await axios
      .post(
        `https://new-app-server-rownokjahannishat17-gmailcom.vercel.app/catagories`,
        state.formData,
        {
          headers: {
            "Content-Type": "Application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        setState({ ...state, isLoading: false });
        if (response.status === 200) {
          alert("Data inserted successfully");
        } else {
          alert("Couldn't insert the data");
        }
      })
      .catch(function (error) {
        console.log(error);
        setState({ ...state, isLoading: false });
        alert("Something went wrong");
      });
  };
  return (
    <div>
      {state.isLoading ? (
        <div className="loader loader-blue w-6 h-6 mx-auto"></div>
      ) : (
        <div className="seminar_form_div">
          <h2 className="seminar_form_heading">Give Review</h2>
          <div className="form_div">
            <p>Your Rating:</p>

            <form onSubmit={handleSubmit}>
              <input
                name="foodName"
                onChange={onEdit}
                type="text"
                placeholder="Name of the food"
              ></input>
              <input
                name="foodPrice"
                onChange={onEdit}
                type="text"
                placeholder="Price of the food"
              ></input>
              <input
                name="foodImage"
                onChange={onEdit}
                type="text"
                placeholder="Image of the food"
              ></input>

              <textarea
                name="fooDetails"
                onChange={onEdit}
                rows="4"
                cols="50"
                className="input2"
                type="textarea"
                placeholder="Details of the food"
              ></textarea>
              {food.map((x, i) => {
                return (
                  <div key={i} className="">
                    <div className="d-flex">
                      <p className="mt-2">{i + 1}</p>

                      <div className="row">
                        <div className="col-5">
                          <input
                            className="form-control w-100"
                            name="Name"
                            placeholder="name"
                            value={x.name}
                            onChange={(e) => handlefoodInput(e, i)}
                          />
                        </div>
                        <div className="col-5">
                          <input
                            className="form-control w-100"
                            name="Image"
                            placeholder="image"
                            value={x.Image}
                            onChange={(e) => handlefoodInput(e, i)}
                          />
                        </div>
                        <div className="col-5">
                          <input
                            className="form-control w-100"
                            name="Price"
                            placeholder="price"
                            value={x.Price}
                            onChange={(e) => handlefoodInput(e, i)}
                          />
                        </div>
                        <div className="col-5">
                          <input
                            className="form-control w-100"
                            name="Description"
                            placeholder="Description"
                            value={x.Description}
                            onChange={(e) => handlefoodInput(e, i)}
                          />
                        </div>
                        <div className="col-2 d-flex">
                          {" "}
                          <div className="row">
                            <div className="col-6">
                              {food.length !== 1 && (
                                <button
                                  className="pastHisremoveButton"
                                  onClick={() => removefood(i)}
                                >
                                  remove
                                  <i
                                    className="fa fa-trash"
                                    aria-hidden="true"
                                  ></i>
                                </button>
                              )}
                            </div>

                            <div className="col-6">
                              {food.length - 1 === i && (
                                <button
                                  type="button"
                                  //className="btn btn-success"
                                  className="pastHisaddButton"
                                  onClick={addfood}
                                >
                                  Add
                                  <i
                                    className="fa fa-plus"
                                    aria-hidden="true"
                                  ></i>
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <button type="submit" className="seminar_join_button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddFood;
