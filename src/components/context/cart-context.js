import React, { useReducer } from "react";

const CartContext = React.createContext({
  addItem: () => {},
  removeItem: () => {},
  cart: {},
});

const defaultCartItems = { items: [], totalCartItems: 0, totalPrice: 0 };

const totalNumberOfItems = (items) => {
  let total = 0;
  let totalPrice = 0;
  items.forEach((item) => {
    total += item.amount;
    totalPrice += item.price * item.amount;
  });
  return { totalItems: total, totalPrice: Math.floor(totalPrice) };
};

const itemsReducer = (state, action) => {
  if (action.type === "ADD") {
    //to check if item is already present
    const existingItemIndex = state.items.findIndex((item) => {
      return item.name === action.val.name;
    });
    const existingItem = state.items[existingItemIndex];
    let updatedItems;
    //if item is already present
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.val.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.val);
    }
    //calculate the total cost and items in cart
    const { totalItems, totalPrice } = totalNumberOfItems(updatedItems);
    return {
      items: updatedItems,
      totalCartItems: totalItems,
      totalPrice: totalPrice,
    };
  } else if (action.type === "DEL") {
    let updatedItems;
    const existingItemIndex = state.items.findIndex(
      (item) => item.name === action.val.name
    );
    const existingItem = state.items[existingItemIndex];
    if (existingItem.amount === 1) {
      state.items.splice(existingItemIndex, 1);
      updatedItems = [...state.items];
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - action.val.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }
    //calculate the total cost and items in cart
    const { totalItems, totalPrice } = totalNumberOfItems(updatedItems);
    return {
      items: updatedItems,
      totalCartItems: totalItems,
      totalPrice: totalPrice,
    };
  }

  return defaultCartItems;
};

export const CartContextProvider = (props) => {
  const [items, dispatchItem] = useReducer(itemsReducer, defaultCartItems);

  const addItemHandler = (item) => {
    console.log("item added");
    if (item.amount > 0 && item.amount !== undefined) {
      dispatchItem({
        type: "ADD",
        val: item,
      });
    }
  };

  const removeItemHandler = (item) => {
    console.log("removed item");
    if (item.amount > 0 && item.amount !== undefined) {
      dispatchItem({
        type: "DEL",
        val: item,
      });
    }
  };

  return (
    <CartContext.Provider
      value={{
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        cart: items,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
