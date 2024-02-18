import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./Navigation.css";
import Dropdown from "../../components/Dropdown/Dropdown";
import SearchBox from "../../components/SearchBox/SearchBox";
import logo from "../../assets/logo.png";
import logout from "../../assets/logout.png";

const Navigation = ({ currentPage, isLoggedIn, onEnterChange }) => {
  const onSignout = () => {
    onEnterChange(false);
  };

  return (
    <div id="navigation">
      <div className="navigation-l">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navigation-m">
        <Dropdown currentPage={currentPage} />
        <SearchBox currentPage={currentPage} />
      </div>
      <div className="navigation-r">
        {isLoggedIn === false ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign up</Link>
          </>
        ) : (
          <>
            <Link to="/cart">Cart</Link>
            <Link to="/orders">Orders</Link>
            <img src={logout} alt="logout" onClick={onSignout} />
          </>
        )}
      </div>
    </div>
  );
};

export default Navigation;
