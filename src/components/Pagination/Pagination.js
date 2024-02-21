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

  const pageNumbers = [...pages].slice(
    Number(currentPage) - 1,
    Number(currentPage) + 9
  );

  return (
    <div id="pagination">
      <div className="buttons">
        {/* shows pages that can be selected */}

        {pageNumbers.map((page, index) => {
          return (
            <button
              key={index}
              className={currentPage == page ? "btn active" : "btn bg-light"}
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
