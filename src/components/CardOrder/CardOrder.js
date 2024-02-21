import React from "react";
import "./CardOrder.css";

const CardOrder = (props) => {
  const {
    product_id,
    product_image,
    product_name,
    product_price,
    product_quantity,
    product_total_price,
  } = props;
  return (
    <div id="cardorder">
      <div className="cardorder-con">
        <div className="image">
          <img src={product_image} alt="product" />
        </div>
        <p className="name">{product_name}</p>
        <div className="desc">
          <p>${product_price}</p>
          <p>{product_quantity} pcs</p>
          <p>${product_total_price}</p>
        </div>
      </div>
    </div>
  );
};

export default CardOrder;
