import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "../styles/navbar.css";


const Navbar = () => {
  const lengthItems = useSelector((state) => state.cartDetail.value);
  console.log(`lengthItems`, lengthItems);
  return (
    <div className="navbar">
      <div className="nav_box">
        <span className="my_shop">
          <Link to={`/react-E-commerce`} style={{ color: "white", textDecoration: "none" }}>
            E-commerce
          </Link>

          <Link to={`/addProduct`} style={{ textDecoration: "none" }}>
            <span className="mx-5 text-white" style={{ fontSize: "23px" }}>
              Add a Product+
            </span>
          </Link>
        </span>

        <div className="cart">
          <span className="fw-bold text-white" style={{ fontSize: "25px" }} >
            John Doe
          </span>

          <Link to={`/Cart`} style={{ textDecoration: "none" }}>
            <span>
              <i className="ms-3 fas fa-cart-plus"></i>
            </span>
            <span>{lengthItems?.length}</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
