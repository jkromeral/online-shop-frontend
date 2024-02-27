import React from "react";
import "./SearchBox.css";

const SearchBox = ({ setCurrentPage, setSearchParams }) => {
  const onButtonSearch = () => {
    window.location.pathname = "/search";
    setCurrentPage(1);
  };

  return (
    <div id="searchbox" className="bg-dark">
      <input
        type="text"
        placeholder="Search an item"
        onChange={(event) =>
          setSearchParams({
            q: event.target.value.replace(" ", "-"),
          })
        }
      />
      <button
        className="btn btn-dark text-white"
        type="submit"
        onClick={onButtonSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
