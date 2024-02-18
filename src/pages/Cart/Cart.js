import React, { useState, useContext, useEffect } from "react";
import CardCartList from "../../components/CardCart/CardCartList";
import "./Cart.css";
import empty_cart from "../../assets/empty_cart.png";
import { UsernameContext, SelectedItemContext } from "../../App";

const Cart = ({ userCart, setUserCart }) => {
  const username = useContext(UsernameContext);
  const { selectedItems } = useContext(SelectedItemContext);

  useEffect(() => {
    fetch(`http://localhost:3001/cart/${username}`)
      .then((res) => res.json())
      .then((user_cart) => {
        setUserCart(user_cart);
      });
  }, [userCart]);

  const selectedItemsPrice = selectedItems
    .map((item) => item.total_price)
    .reduce((prev, curr) => prev + curr, 0);

  const onCheckout = () => {
    fetch(`http://localhost:3001/add-to-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedItems),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <div id="cart">
        {userCart.length >= 1 ? (
          <>
            <p className="username">{username}'s Cart</p>
            <CardCartList cart={userCart} />
            <div className="cart-summary">
              <p className="title">Order Summary</p>
              <hr></hr>
              <div className="details">
                <div>
                  <p>Items</p>
                  <p>{selectedItems.length}</p>
                </div>
                <div>
                  <p>Subtotal</p>
                  <p>
                    {selectedItemsPrice === 0
                      ? selectedItemsPrice
                      : `$${selectedItemsPrice.toFixed(2)}`}
                  </p>
                </div>
                <div>
                  <p>Shipping Fee</p>
                  <p>$10</p>
                </div>
                <div>
                  <p>Estimated Total</p>
                  <p>
                    {selectedItemsPrice === 0
                      ? selectedItemsPrice
                      : `$${(selectedItemsPrice + 10).toFixed(2)}`}
                  </p>
                </div>
              </div>
              <button onClick={onCheckout}>Check out</button>
            </div>
          </>
        ) : (
          <div>
            <img src={empty_cart} className="image-empty" alt="empty cart" />
            <p className="message1">Your cart is empty!</p>
            <p className="message2">
              Looks like you haven't added anything to your cart
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
