import React, { useState } from "react";
import "./Modal.css";
import Buttons from "../Buttons/Buttons";
const Modal = ({ props, onSetModal, username }) => {
  const {
    product_id,
    product_image,
    product_name,
    product_category,
    product_price,
    product_rating,
    product_reviews_count,
    product_description,
    product_contents,
  } = props;

  const [quantity, setQuantity] = useState(1);

  // to add an item in user cart

  const onAddtoCart = () => {
    fetch("http://localhost:3001/add-to-cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        product_id: product_id,
        product_image: product_image,
        product_name: product_name,
        product_price: product_price,
        quantity: quantity,
        total_price: product_price * quantity,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div id="modal">
      <div id="modal-layover" onClick={() => onSetModal(false)}></div>
      <div className="modal-con">
        <div className="modal-image">
          <img src={product_image} />
        </div>
        <div className="modal-desc">
          <div className="top">
            <p>{product_name}</p>
            <p>{product_category}</p>
            <p>$ {product_price}</p>
            <p>{product_rating} Ratings</p>
            <p>{product_reviews_count} Reviews</p>
          </div>
          <div className="middle">
            <Buttons quantity={quantity} setQuantity={setQuantity} />
            <button type="submit" className="add-btn" onClick={onAddtoCart}>
              ADD TO CART
            </button>
          </div>
          <div className="bottom">
            <p>{product_description}</p>
            <p>{product_contents}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
