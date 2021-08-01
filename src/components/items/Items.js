//style import
import styles from "./Items.module.css";

// import { useRef, useState } from "react";
import ItemsCard from "./ItemsCard";

const Items = (props) => {
  const allItems = props.items.map((item, index) => (
    <ItemsCard
      key={index}
      itemName={item.itemName}
      description={item.description}
      price={item.price}
    ></ItemsCard>
  ));
  return (
    <div id={styles["items"]} className="container">
      {allItems}
    </div>
  );
};

export default Items;
