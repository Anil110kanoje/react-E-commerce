import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "../styles/cart.css";

import { removeCartItem } from "./../Redux/CartSlice"
 

const Cart = () => {
  const dispatch = useDispatch()
  const [price, setPrice] = useState(0);
  const [currentItems, setCurrentItems] = useState();
  const lengthItems = useSelector((state) => state.cartDetail.value);

  const handleRemove = (e, item) => {
    dispatch(removeCartItem(item))
    setCurrentItems(lengthItems);
    alert("Remove from Cart");
  };

  const handlePrice = () => {
    let ans = 0;
    lengthItems?.map((item) => ans += item.price);
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
    setCurrentItems(lengthItems);

  }, [lengthItems]);

  return (
    <div className="mt-4 p-3  bg-success">
      {currentItems?.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.thumbnail} alt="" />
            <p className="fs-5">{item.title}</p>
          </div>
          <div>
            <span className="fs-5 ">{'Price :-' + ' ' + item.price}</span>
            <button className="btn btn-danger d-flex fs-5" onClick={(e) => handleRemove(e, item)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total text-dark d-flex justify-content-between">
        <h3>Total Price of your Cart</h3>
        <span className="fs-5">Rs :- {price}</span>
      </div>
    </div>
  );
};

export default Cart;
