import React from "react";
import CardOrder from "./CardOrder";

const CardOrderList = ({ order }) => {
  const productList = order.map((product, i) => {
    return (
      <CardOrder
        key={i}
        product_id={order[i].product_id}
        product_image={order[i].product_image}
        product_name={order[i].product_name}
        product_price={order[i].product_price}
        product_rating={order[i].product_rating}
        product_quantity={order[i].quantity}
        product_total_price={order[i].total_price}
      />
    );
  });
  return <div id="cardorderlist">{productList}</div>;
};

export default CardOrderList;
