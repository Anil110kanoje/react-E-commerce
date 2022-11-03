import React, { useState, useEffect } from "react";
import axios from "axios";

import ClearIcon from "@mui/icons-material/Clear";

import RecipeReviewCard from "./RecipeReviewCard";
import "../styles/main.css";
import NextPage from "./NextPage";


const Main = ({ handleClick, handlePdp }) => {

  const [allProducts, setAllProducts] = useState();
  const [productList, setProductList] = useState();
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [isSorting, setSorting] = useState(false);

  useEffect(() => {
    (async function fetchProductList() {
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products?limit=100`
        );
        const slicedProduct = data?.products?.slice(0, 10);

        setAllProducts(data.products);
        setProductList(slicedProduct);

      } catch (error) {
        console.log(`error in getting product list`, error);
        alert("error");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 4500);
      }
    })();
  }, []);

  useEffect(() => {
    setLoading(true);
    const pageChangeProduct = allProducts?.slice(page * 10 - 10, 10 * page);
    setTimeout(() => {
      setLoading(false);
    }, 4500);
    setProductList(pageChangeProduct);
    setSorting(false);
  }, [page]);

  console.log(`productList`, productList);
  console.log(`allProducts`, allProducts);

  const handleSort = () => {
    setSorting(!isSorting);
    productList?.sort((a, b) => a.price - b.price);
    alert("Apply sorting Low to High");
  };

  const handleClose = () => {
    setSorting(!isSorting);
    productList?.sort((a, b) => a.id - b.id);
    alert("Remove sorting");
  };

  return (
    <div>
      <div className="mt-5 d-flex justify-content-center">
        <NextPage setPage={setPage} />
      </div>
      {!isLoading && (
        <div className="mx-5 position-absolute end-0">
          {!isSorting && (
            <button className="btn btn-danger fw-bold" onClick={handleSort}>
              Sort by Price
            </button>
          )}
          {isSorting && (
            <button
              className="btn btn-dark d-flex align-items-center mx-2"
              onClick={handleClose}
            >
              <span>Close</span>
              <ClearIcon />
            </button>
          )}
        </div>
      )}
      <section>
            {productList?.map((item) => (
              <RecipeReviewCard
                key={item.id}
                item={item}
                handleClick={handleClick}
                setProductList={setProductList}
                productList={productList}
                handlePdp={handlePdp}
              />
            ))}
      </section>
    </div>
  );
};

export default Main;
