import React, { useState } from "react";
import { CartContext } from "../utilities/cartContext";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addItemToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  // Remove item from cart
  const removeItemFromCart = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
  };

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
  };

  const cartValue = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
};
