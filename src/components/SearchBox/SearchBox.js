import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./SearchBox.css";

const SearchBox = ({ currentPage, setCurrentPage }) => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({
    q: "",
    // page: "",
  });

  const q = searchParams.get("q");
  // const page = searchParams.get("page");

  const onButtonSearch = () => {
    fetch(`http://localhost:3001/search?q=${q}&page=${1}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div id="searchbox" className="bg-dark">
      <input
        type="text"
        placeholder="Search an item"
        onChange={(event) =>
          setSearchParams({
            q: event.target.value.replace(" ", "-"),
            // page: 1,
          })
        }
      />
      <button
        className="bg-dark text-white"
        type="submit"
        onClick={onButtonSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
