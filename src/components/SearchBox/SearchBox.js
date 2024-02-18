import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./SearchBox.css";

const SearchBox = () => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({
    item: "",
    currentPage: 1,
  });

  const item = searchParams.get("item");
  const currentPage = searchParams.get("currentPage");

  const onButtonSearch = () => {
    fetch(`http://localhost:3001/search/${item}/1`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  console.log(products);

  return (
    <div id="searchbox">
      <input
        type="text"
        placeholder="Search an item"
        onChange={(event) =>
          setSearchParams({ item: event.target.value.replace(" ", "-") })
        }
      />
      <button type="submit" onClick={onButtonSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBox;
