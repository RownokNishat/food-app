import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {
  const [Datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/foodService")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  return (
    <div>
      <div className="text-center ">
        <p className="text-2xl font-bold text-orange-600">Services</p>
        <h2
          className="text-5xl font-bold text-orange-900 mb-5 mt-3
        "
        >
          Our Menu Card
        </h2>
        <p className="text-xl font-semibold text-orange-600">
          Providing food and drink services to guests in hotels and restaurants.
          <br />
          showing attentiveness, and understanding of their needs and
          expectations.
        </p>
      </div>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {Datas.map((data) => (
          <ServiceCard key={data._id} menu={data}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
