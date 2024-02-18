import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";
import CardProductList from "../../components/CardProduct/CardProductList";
import Pagination from "../../components/Pagination/Pagination";

const Product = ({
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
}) => {
  const { category } = useParams();

  // fetch data to display each product based on category

  useEffect(() => {
    fetch(`http://localhost:3001/category/${category}/${currentPage}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setCurrentPage(data.current_page);
        setLastPage(data.last_page);
        setPerPage(data.per_page);
        setTotal(data.total);
      })
      .catch((err) => console.log(err.message));
  }, [category, currentPage]);

  return (
    <div id="product">
      <div className="product-con">
        <CardProductList products={products} />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          lastPage={lastPage}
          perPage={perPage}
          total={total}
        />
      </div>
    </div>
  );
};

export default Product;
