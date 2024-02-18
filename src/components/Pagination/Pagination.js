import React from "react";
import "./Pagination.css";

const Pagination = ({
  currentPage,
  setCurrentPage,
  lastPage,
  perPage,
  total,
}) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pages.push(i);
  }

  return (
    <div id="pagination">
      <div className="buttons">
        {pages.map((page, index) => {
          return (
            <button
              key={index}
              className={currentPage === page ? "active" : ""}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
