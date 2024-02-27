import React from "react";
import CardProduct from "../CardProduct/CardProduct";
import "./Carousel.css";
import Carousel from "./Carousel";

const CarouselList = ({ products }) => {
  const productList = products.map((product, i) => {
    return (
      <CardProduct
        key={i}
        id={products[i].p_id}
        product_id={products[i].product_id}
        product_image={products[i].product_image}
        product_name={products[i].product_name}
        product_category={products[i].product_category}
        product_price={products[i].product_price}
        product_rating={products[i].product_rating}
        product_reviews_count={products[i].product_reviews_count}
        product_description={products[i].product_description}
        product_contents={products[i].product_contents}
      />
    );
  });

  return (
    <div id="carousellist">
      <Carousel products={productList.slice(0, 12)} title="Most Viewed Items" />
      <Carousel products={productList.slice(12, 24)} title="New Releases" />
    </div>
  );
};

export default CarouselList;
