import React from "react";
import { useLoaderData } from "react-router-dom";
import DeailsCard from "./DeailsCard";

const Details = () => {
  const datas = useLoaderData();
  console.log(datas);
  return (
    <div>
      {datas.facility.map((data, i) => (
        <DeailsCard key={i} data={data} index={i}></DeailsCard>
      ))}
    </div>
  );
};

export default Details;
