import React from "react";
import img1 from "../../new-assets/Banner/burger.jpg";
import img2 from "../../new-assets/Banner/images.jpg";
import img3 from "../../new-assets/Banner/pizza.jpg";
import img4 from "../../new-assets/Banner/কাচ্চি-বিরিয়ানি.png";

import BannerItem from "./BannerItem";

const bannerData = [
  {
    image: img2,
    pre: 1,
    id: 2,
    next: 3,
  },
  {
    image: img3,
    pre: 2,
    id: 3,
    next: 4,
  },
  {
    image: img4,
    pre: 3,
    id: 4,
    next: 1,
  },
  {
    image: img1,
    pre: 4,
    id: 1,
    next: 2,
  },
];

const Banner = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="carousel w-full py-10">
        {bannerData.map((slide) => (
          <BannerItem key={slide.id} slide={slide}></BannerItem>
        ))}
      </div>
    </div>
  );
};

export default Banner;
