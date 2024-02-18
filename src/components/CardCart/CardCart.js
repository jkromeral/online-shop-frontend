import React, { useState, useContext } from "react";
import Buttons from "../Buttons/Buttons";
import "./CardCart.css";
import trash from "../../assets/trash.png";
import { UsernameContext, SelectedItemContext } from "../../App";

const CardCart = (props) => {
  const {
    product_id,
    product_image,
    product_name,
    product_price,
    product_quantity,
    product_total_price,
  } = props;

  const [quantity, setQuantity] = useState(product_quantity);
  const [total, setTotal] = useState(product_total_price);

  const username = useContext(UsernameContext);

  const onRemoveItem = () => {
    fetch(`http://localhost:3001/remove-item`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        product_id: product_id,
      }),
    })
      .then((res) => res.json())
      .then((message) => console.log(message));
  };

  const { selectedItems, setSelectedItems } = useContext(SelectedItemContext);

  const onSelectedItem = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedItems([
        ...selectedItems,
        {
          username: username,
          product_id: value,
          product_image: props.product_image,
          product_name: props.product_name,
          product_price: Number(props.product_price),
          quantity: props.product_quantity,
          total_price: Number(props.product_total_price),
        },
      ]);
    } else {
      setSelectedItems(
        selectedItems.filter((item) => item.product_id !== value)
      );
    }
  };

  return (
    <>
      <div id="cardcart">
        <div className="cardcart-option">
          <input type="checkbox" value={product_id} onChange={onSelectedItem} />
          <img src={trash} alt="trash" onClick={onRemoveItem} />
        </div>
        <div className="cardcart-image">
          <img src={product_image} alt="product_image" />
        </div>
        <div className="cardcart-desc">
          <p className="name">{product_name}</p>
          <p>${product_price}</p>
          <Buttons
            quantity={quantity}
            setQuantity={setQuantity}
            product_id={product_id}
            product_price={product_price}
            total={total}
            setTotal={setTotal}
          />
          <p>{total}</p>
        </div>
      </div>
    </>
  );
};

export default CardCart;
