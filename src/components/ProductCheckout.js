import React, { useState } from "react";
import GradeIcon from "@mui/icons-material/Grade";
import "./ProductCheckout.css";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import { removeFromBasket } from "../context/AppReducer";

const ProductCheckout = (props) => {
  const { basket, dispatch } = useContext(GlobalContext);
  console.log(basket);

  return (
    <div className="product-checkout" key={props.id}>
      <div className="left-product-checkout">
        <img src={props.image} alt="product-img" />
      </div>
      <div className="right-product-checkout">
        <p className="title text-muted">{props.des}</p>
        <span className="price">
          <small>$</small>
          <strong>{props.price}</strong>
        </span>
        <div className="rating">
          <GradeIcon />
          <GradeIcon />
          <GradeIcon />
          <GradeIcon />
          <GradeIcon />
        </div>
        {!props.hiddenButton ? (
          <button
            className="remove-btn"
            onClick={() => {
              dispatch(removeFromBasket(props.id));
            }}
          >
            Remove from Basket
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProductCheckout;
