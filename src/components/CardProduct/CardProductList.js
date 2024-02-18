import React, { useState } from "react";
import "./CardProductList.css";
import CardProduct from "./CardProduct";
import Modal from "../Modal/Modal";

const CardProductList = ({ products }) => {
  // display each product

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
    <>
      <div id="cardproductlist">
        <div className="cardproductlist-con">{productList}</div>
      </div>
    </>
  );
};

export default CardProductList;
