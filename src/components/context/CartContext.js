import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart, uuidv4 }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
