import React, { useContext, useEffect } from "react";
import CardCartList from "../../components/CardCart/CardCartList";
import "./Cart.css";
import empty_cart from "../../assets/empty_cart.png";
import { UserContext, SelectedItemContext } from "../../App";

const Cart = ({ userCart, setUserCart }) => {
  const username = useContext(UserContext);
  const { selectedItems } = useContext(SelectedItemContext);

  // fetch data to display each product of logged in user

  useEffect(() => {
    fetch(`http://localhost:3001/cart/${username}`)
      .then((res) => res.json())
      .then((user_cart) => {
        setUserCart(user_cart);
      });
  }, [userCart]);

  // shows total price of selected items in user cart

  const selectedItemsPrice = selectedItems
    .map((item) => item.total_price)
    .reduce((prev, curr) => prev + curr, 0);

  // to add selected items/products from user cart to user order page

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
              <p className="title bg-warning text-white p-3">Order Summary</p>
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
              <button
                className="btn btn-warning text-white"
                onClick={onCheckout}
              >
                Check out
              </button>
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
