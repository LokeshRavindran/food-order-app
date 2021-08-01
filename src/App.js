import React, { useState } from "react";

//style import
import styles from "./App.module.css";

//component imports
import CartItem from "./components/cart/CartItem";
import Header from "./components/header/Header";
import Items from "./components/items/Items";
import Main from "./components/main/Main";

function App() {
  const items = [
    { itemName: "Sushi", description: "Finest fish and veggies", price: 22.99 },
    { itemName: "Schnitzel", description: "A German speciality!", price: 16.5 },
    {
      itemName: "Barbecue Burger",
      description: "American, rawn meaty",
      price: 12.99,
    },
    { itemName: "Green Bowl", description: "Healthy and green", price: 18.99 },
  ];

  const [cartPopup, CartPopupUpdate] = useState(false);

  return (
    <div id={styles.main}>
      {cartPopup && <CartItem popupClose={CartPopupUpdate}></CartItem>}
      <Header popupOpen={CartPopupUpdate}></Header>
      <Main></Main>
      <Items items={items}></Items>
    </div>
  );
}

export default App;
