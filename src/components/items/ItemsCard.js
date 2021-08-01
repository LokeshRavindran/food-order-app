import { useContext, useRef } from "react";
import CartContext from "../context/cart-context";

import styles from "./ItemsCard.module.css";

const ItemsCard = (props) => {
  const cartCtx = useContext(CartContext);
  const amountInputRef = useRef();

  const addButtonHandler = (e) => {
    const tempItem = {
      name: props.itemName,
      amount: +amountInputRef.current.value,
      price: props.price,
    };
    cartCtx.addItem(tempItem);
    amountInputRef.current.value = "0";
  };

  return (
    <div className={styles["food-item"]}>
      <div className={styles["food-details"]}>
        <h3>{props.itemName}</h3>
        <p>
          <em>{props.description}</em>
        </p>
        <p>{props.price}</p>
      </div>
      <div className={styles["required-amount"]}>
        <div className={styles["quantity"]}>
          <label htmlFor="amount">Amount</label>
          <input
            ref={amountInputRef}
            type="number"
            defaultValue="0"
            min="1"
            step="1"
            id="amount"
            autoComplete="off"
          ></input>
        </div>
        <div className={styles["increase-quantity"]}>
          <button onClick={addButtonHandler}>+ Add</button>
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
