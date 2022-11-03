import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./components/Main";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import AddProduct from "./components/AddNewProduct";
import { addcartItem } from "./Redux/CartSlice";
import ProductDetails from "./components/ProductDetails";

const App = () => {

  const [cart, setCart] = useState([]);
  const [productDetailspage, setProductDetailspage] = useState();
  const dispatch = useDispatch();

  const handleClick = (e, item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    try {
      dispatch(addcartItem(item));
      alert("Added to Cart");
    } catch (error) {
      alert("error");
    }
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  const handlePdp = (e, item) => {
    console.log(`item of pdp`, item)
    setProductDetailspage(item)
  }
  console.log(`productDetailspage`, productDetailspage)

  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={<Main handleClick={handleClick} handlePdp={handlePdp} />}
            ></Route>

            <Route
              exact
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  setCart={setCart}
                  handleChange={handleChange}
                />
              }
            ></Route>

            <Route exact path="/addProduct" element={<AddProduct />}></Route>
            <Route exact path="/productDetails" element={<ProductDetails handleClick={handleClick} productDetailspage={productDetailspage}/>}></Route>

          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
