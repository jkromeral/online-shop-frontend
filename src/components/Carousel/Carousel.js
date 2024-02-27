import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ products, title }) => {
  const [slide, setSlide] = useState(0);

  const prevButton = () => {
    setSlide(0);
  };

  const nextButton = () => {
    setSlide(1);
  };

  return (
    <div id="carousel">
      <p className="title">{title}</p>
      <div className={slide === 0 ? "slide" : "slide-hidden"}>
        {products.slice(0, 6)}
      </div>
      <div className={slide === 1 ? "slide" : "slide-hidden"}>
        {products.slice(6, 13)}
      </div>
      <a className={slide === 0 ? "prev-disable" : "prev"} onClick={prevButton}>
        ❮
      </a>
      <a className={slide === 1 ? "next-disable" : "next"} onClick={nextButton}>
        ❯
      </a>
    </div>
  );
};

export default Carousel;
