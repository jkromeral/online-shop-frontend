import React, { useEffect } from "react";
import "./Product.css";
import CardProductList from "../../components/CardProduct/CardProductList";
import Pagination from "../../components/Pagination/Pagination";
import search_none from "../../assets/search_none.png";

const ProductSearch = ({
  products,
  setProducts,
  currentPage,
  setCurrentPage,
  lastPage,
  setLastPage,
  perPage,
  setPerPage,
  total,
  setTotal,
  searchParams,
}) => {
  const q = searchParams.get("q");

  // fetch data to display each product based on search

  useEffect(() => {
    fetch(`http://localhost:3001/search?q=${q}&page=${currentPage}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setCurrentPage(data.current_page);
        setLastPage(data.last_page);
        setPerPage(data.per_page);
        setTotal(data.total);
        window.scrollTo({ top: 0 });
      })
      .catch((err) => console.log(err.message));
  }, [currentPage]);

  return (
    <div id="product">
      <div className="product-con">
        {products.length >= 1 ? (
          <>
            <CardProductList products={products} />
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              lastPage={lastPage}
              perPage={perPage}
              total={total}
            />
          </>
        ) : (
          <div>
            <img src={search_none} className="search-none" alt="search none" />
            <p className="message1">No result!</p>
            <p className="message2">
              We cannot find the item you're looking for
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;
