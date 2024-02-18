import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";
import CardProductList from "../../components/CardProduct/CardProductList";
import Pagination from "../../components/Pagination/Pagination";
import { ProductsContext } from "../../App";

const ProductSearch = (
  {
    //   products,
    //   setProducts,
    //   currentPage,
    //   setCurrentPage,
    //   lastPage,
    //   setLastPage,
    //   perPage,
    //   setPerPage,
    //   total,
    //   setTotal,
    //   username,
  }
) => {
  return (
    <div id="product">
      {/* <CardProductList products={products} />
      <Pagination
        setCurrentPage={setCurrentPage}
        lastPage={lastPage}
        perPage={perPage}
        total={total}
      /> */}
    </div>
  );
};

export default ProductSearch;
