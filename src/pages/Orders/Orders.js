import React, { useEffect, useContext } from "react";
import CardOrderList from "../../components/CardOrder/CardOrderList";
import { OrderContext, UsernameContext } from "../../App";
import no_purchase from "../../assets/no_purchase.png";
import "./Orders.css";

const Orders = ({ userOrder, setUserOrder }) => {
  const username = useContext(UsernameContext);

  // fetch data to display each product of logged in user

  useEffect(() => {
    fetch(`http://localhost:3001/orders/${username}`)
      .then((res) => res.json())
      .then((user_order_details) => {
        setUserOrder(user_order_details);
      });
  }, [userOrder]);

  return (
    <>
      <div id="orders">
        {userOrder.length >= 1 ? (
          <>
            <p className="username">{username}'s Order Details</p>
            <CardOrderList order={userOrder} />
          </>
        ) : (
          <>
            <div>
              <img src={no_purchase} alt="no purchase" />
              <p className="message1">No orders yet!</p>
              <p className="message2">Purchased products will be added here</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Orders;
