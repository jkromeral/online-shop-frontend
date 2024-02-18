import React from "react";
import CardCart from "./CardCart";

const CardCartList = ({ cart }) => {
  const productList = cart.map((product, i) => {
    return (
      <CardCart
        key={i}
        product_id={cart[i].product_id}
        product_image={cart[i].product_image}
        product_name={cart[i].product_name}
        product_price={cart[i].product_price}
        product_rating={cart[i].product_rating}
        product_quantity={cart[i].quantity}
        product_total_price={cart[i].total_price}
      />
    );
  });
  return <div id="cardcartlist">{productList}</div>;
};

export default CardCartList;
