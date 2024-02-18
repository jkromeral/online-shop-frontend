import React from "react";
import "./Pagination.css";

const Pagination = ({
  currentPage,
  setCurrentPage,
  lastPage,
  perPage,
  total,
}) => {
  // count number of pages depending on selected category

  const pages = [];

  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pages.push(i);
  }

  return (
    <div id="pagination">
      <div className="buttons">
        {/* shows pages that can be selected */}

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
