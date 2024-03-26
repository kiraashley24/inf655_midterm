import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };
  

  const handleSubmit = (formData) => {
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Optionally clear the cart after submission
    
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, handleSubmit }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
