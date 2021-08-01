import React from "react";

//component imports
import ViewCart from "../cart/ViewCart";

//style imports
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header id={styles.header}>
      <div className="container" id={styles["header-container"]}>
        <h1>React Meals</h1>
        <ViewCart popupOpen={props.popupOpen}></ViewCart>
      </div>
    </header>
  );
};

export default Header;
