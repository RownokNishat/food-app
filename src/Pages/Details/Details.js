import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DeailsCard from "./DeailsCard";

const Details = () => {
  const { categoryName } = useParams();
  const [datas, setDatas] = useState(null);
  console.log(categoryName);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/categoryFood?categoryName=${categoryName}`)
      .then(function (response) {
        setDatas(response.data);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);
  return (
    <div className="max-w-screen-lg mx-auto">
      {datas?.map((data, i) => (
        <DeailsCard key={i} data={data} index={i}></DeailsCard>
      ))}
    </div>
  );
};

export default Details;
