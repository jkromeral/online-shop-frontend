import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./Navigation.css";
import Dropdown from "../../components/Dropdown/Dropdown";
import SearchBox from "../../components/SearchBox/SearchBox";
import logo from "../../assets/logo.png";
import logout from "../../assets/logout.png";

const Navigation = ({
  setCurrentPage,
  isLoggedIn,
  onEnterChange,
  searchParams,
  setSearchParams,
}) => {
  // isLoggedIn: false

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
        <Dropdown setCurrentPage={setCurrentPage} />
        <SearchBox
          setCurrentPage={setCurrentPage}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </div>
      <div className="navigation-r">
        {/* changes when user is logged in  */}

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
