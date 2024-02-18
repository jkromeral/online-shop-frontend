import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./Dropdown.css";
import { category } from "../../data/category";

const Dropdown = ({ currentPage }) => {
  return (
    <div id="dropdown">
      <button className="dropdown-btn">Categories</button>
      <div className="dropdown-con">
        {/* shows each category */}

        {category.map((category, index) => {
          return (
            <Link key={index} to={`/category/${category.path}/${currentPage}`}>
              {category.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
