import { createContext, useContext } from "react";

// Create a new context
export const CartContext = createContext();

// Custom hook to access the cart context
export const useCart = () => {
  return useContext(CartContext);
};
