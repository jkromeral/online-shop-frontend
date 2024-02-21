import React, { useState, useContext } from "react";
import "./Buttons.css";
import { UserContext } from "../../App";

const Buttons = ({
  quantity,
  setQuantity,
  product_id,
  product_price,
  setTotal,
}) => {
  const username = useContext(UserContext);

  // increase item quantity in user cart

  const onIncreaseQuantity = () => {
    fetch(`http://localhost:3001/increase-quantity`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        product_id: product_id,
        product_price: product_price,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setQuantity(data[0].quantity);
        setTotal(data[0].total_price);
      });
  };

  // decrease item quantity in user cart

  const onDecreaseQuantity = () => {
    fetch(`http://localhost:3001/decrease-quantity`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        product_id: product_id,
        product_price: product_price,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setQuantity(data[0].quantity);
        setTotal(data[0].total_price);
      });
  };

  return (
    <div id="buttons">
      <button
        className="btn text-white"
        onClick={onDecreaseQuantity}
        disabled={quantity === 1}
      >
        -
      </button>
      <input value={quantity} onChange={() => quantity}></input>
      <button className="btn  text-white" onClick={onIncreaseQuantity}>
        +
      </button>
    </div>
  );
};

export default Buttons;
