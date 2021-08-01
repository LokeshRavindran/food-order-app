import React, { useContext } from "react";
import CartContext from "../context/cart-context";

//style imports
import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);

  const orderButtonHandler = () => {
    console.log("Ordering...");
  };

  const closeButtonHandler = () => {
    props.popupClose(false);
  };

  const reduceButtonHandler = (name, price) => {
    const tempItem = { name: name, amount: 1, price: price };
    cartCtx.removeItem(tempItem);
  };

  const increaseButtonHandler = (name, price) => {
    const tempItem = { name: name, amount: 1, price: price };
    cartCtx.addItem(tempItem);
  };

  let cartItem = cartCtx.cart.items.map((item, index) => {
    return (
      <div className={styles["cart-item"]} key={index}>
        <div className={styles["food-item"]}>
          <h2>{item.name}</h2>
          <div className={styles["amount"]}>
            <p>{`$ ${item.price}`}</p>
            <div>{`x ${item.amount}`}</div>
          </div>
        </div>
        <div className={styles["add-remove"]}>
          <button
            onClick={reduceButtonHandler.bind(null, item.name, item.price)}
          >
            -
          </button>
          <button
            onClick={increaseButtonHandler.bind(null, item.name, item.price)}
          >
            +
          </button>
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div id={styles["cart"]}>
        {cartItem}
        <div id={styles["total-amount"]}>
          <p>Total Amount</p>
          <p>{`$ ${cartCtx.cart.totalPrice}`}</p>
        </div>
        <div id={styles["confirm-close"]}>
          <button type="button" onClick={closeButtonHandler}>
            Close
          </button>
          <button type="button" onClick={orderButtonHandler}>
            Order
          </button>
        </div>
      </div>
      <div id={styles["background-blur"]}></div>
    </React.Fragment>
  );
};

export default CartItem;
