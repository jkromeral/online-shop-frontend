import React, { useState, useContext } from "react";
import "./CardProduct.css";
import Modal from "../Modal/Modal";
import { UsernameContext } from "../../App";

const CardProduct = (props) => {
  const { product_image, product_name, product_price, product_rating } = props;

  const [modal, setModal] = useState(false);
  const username = useContext(UsernameContext);

  // shows more item description

  const onSetModal = (bool) => {
    setModal(bool);
  };

  return (
    <>
      <div id="cardproduct" onClick={() => onSetModal(true)}>
        <div className="cardproduct-image">
          <img src={product_image} alt="product_image" />
        </div>
        <p className="cardproduct-title">{product_name}</p>
        <div className="cardproduct-con">
          <p>$ {product_price}</p>
          <p>{product_rating} Ratings</p>
        </div>
      </div>
      {modal && (
        <Modal props={props} onSetModal={onSetModal} username={username} />
      )}
    </>
  );
};

export default CardProduct;
