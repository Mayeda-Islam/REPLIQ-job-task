import React, { useState } from "react";
import { useCart } from "../../utilities/cartContext";

const Cart = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const { cartItems, removeItemFromCart, clearCart } = useCart();
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };
  return (
    <div
      className={`fixed top-0 right-0 h-full w-1/3 bg-white shadow-lg transition-transform transform ${
        isDrawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {" "}
      <button className="p-4 text-right" onClick={handleCloseDrawer}>
        X
      </button>
      <div>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item?.title} - ${item.price}
              <button onClick={() => removeItemFromCart(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
