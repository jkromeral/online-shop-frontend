import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./Dropdown.css";
import { category } from "../../data/category";

const Dropdown = ({ setCurrentPage }) => {
  return (
    <div id="dropdown">
      <button className="dropdown-btn bg-dark text-white">Categories</button>
      <div className="dropdown-con">
        {/* shows each category */}

        {category.map((category, index) => {
          return (
            <Link
              className="text-dark"
              key={index}
              to={`/category/${category.path}`}
              onClick={() => setCurrentPage(1)}
            >
              {category.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
