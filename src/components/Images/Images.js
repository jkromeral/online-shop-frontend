import React from "react";
import "./Images.css";
import home_image from "../../assets/home_image.jpg";

const Images = () => {
  return (
    <div id="images">
      <div className="images-con left">
        <img src={home_image} alt="home_image_left" />
      </div>
      <div className="images-con">
        <img src={home_image} alt="home_image_top" />
      </div>
      <div className="images-con">
        <img src={home_image} alt="home_image_top" />
      </div>
    </div>
  );
};

export default Images;
