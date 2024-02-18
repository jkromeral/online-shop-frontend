import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer/Footer";
import Navigation from "./layout/Navigation/Navigation";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/Signup";
import Cart from "./pages/Cart/Cart";
import Orders from "./pages/Orders/Orders";
import Product from "./pages/Product/Product";

export const UsernameContext = React.createContext();
export const SelectedItemContext = React.createContext();

const App = () => {
  // CHECK IF LOGGED IN
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // USER INFORMATION
  const [username, setUsername] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");

  // DISPLAY PRODUCTS
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState();
  const [perPage, setPerPage] = useState();
  const [total, setTotal] = useState();

  // USER CART
  const [userCart, setUserCart] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  // USER ORDER
  const [userOrder, setUserOrder] = useState([]);

  const onEnterChange = (bool) => {
    setIsLoggedIn(bool);
  };

  const onUserChange = (account) => {
    setUsername(account);
  };

  const onUserFNameChange = (first_name) => {
    setUserFirstName(first_name);
  };

  const onUserLNameChange = (last_name) => {
    setUserLastName(last_name);
  };

  return (
    <UsernameContext.Provider value={username}>
      <SelectedItemContext.Provider value={{ selectedItems, setSelectedItems }}>
        <Navigation
          currentPage={currentPage}
          isLoggedIn={isLoggedIn}
          onEnterChange={onEnterChange}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <Login
                onEnterChange={onEnterChange}
                onUserChange={onUserChange}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <SignUp
                onEnterChange={onEnterChange}
                onUserChange={onUserChange}
                onUserFNameChange={onUserFNameChange}
                onUserLNameChange={onUserLNameChange}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route
            path="/cart"
            element={
              isLoggedIn ? (
                <Cart userCart={userCart} setUserCart={setUserCart} />
              ) : (
                <Home />
              )
            }
          />
          <Route
            path="/orders"
            element={
              isLoggedIn ? (
                <Orders userOrder={userOrder} setUserOrder={setUserOrder} />
              ) : (
                <Home />
              )
            }
          />
          <Route
            path="/category/:category/:currentPage"
            element={
              <Product
                products={products}
                setProducts={setProducts}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                lastPage={lastPage}
                setLastPage={setLastPage}
                perPage={perPage}
                setPerPage={setPerPage}
                total={total}
                setTotal={setTotal}
              />
            }
          />
        </Routes>
        <Footer />
      </SelectedItemContext.Provider>
    </UsernameContext.Provider>
  );
};

export default App;
