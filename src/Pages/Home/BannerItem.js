import React from "react";
import "./Banner.css";

const BannerItem = ({ slide }) => {
  const { image, id, pre, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full ">
      <div className="carosuel-img" style={{ width: "100%", height: "100%" }}>
        <img
          src={image}
          style={{ width: "100%", height: "100%" }}
          className="rounded-xl"
        />
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 left-24   top-1/4">
        <h1 className="text-6xl font-bold text-white">
          People who love to eat <br />
          are always the
          <br /> best people
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24   top-1/2 w-2/5 ">
        <p className="text-white text-xl">
          We serve fresh food with the best taste. Every dish is cooked with a
          special recipe and exclusive spices. Enjoy a happy meal at the savoury
          restaurant.
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-24   bottom-44 w-2/5  ">
        <button className="btn btn-warning mr-20">Warning</button>
        <button className="btn btn-outline btn-warning">Warning</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-44 ">
        <a
          href={`#slide${pre}`}
          className="btn btn-circle mr-8 bg-white text-black"
        >
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle bg-orange-600">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
