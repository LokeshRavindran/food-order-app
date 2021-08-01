import React, { useContext } from "react";
import CartContext from "../context/cart-context";

//style imports
import styles from "./ViewCart.module.css";

const ViewCart = (props) => {
  const cartCtx = useContext(CartContext);
  const popupOpenHandler = () => {
    props.popupOpen(true);
  };
  return (
    <button id={styles["view-cart"]} onClick={popupOpenHandler}>
      <i className="fas fa-shopping-cart"></i>
      <p>Your Cart</p>
      <div id={styles.count}>{cartCtx.cart.totalCartItems}</div>
    </button>
  );
};

export default ViewCart;
