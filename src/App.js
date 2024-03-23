import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Header';
import Products from './components/Products';
import Cart from './pages/Cart';
import ItemDescript from './components/ItemDescript';
import ProductDetail from './pages/ProductDetail';
import HomePage from './pages/HomePage';
import Checkout from './components/Checkout';
import ThankYou from './pages/thankyou'; 



const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleSubmit = (formData) => {
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products products={ItemDescript} addToCart={addToCart} />} />
          <Route path="/products/:id" element={<ProductDetail products={ItemDescript} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} total={calculateTotal()} setCart={setCart} handleSubmit={handleSubmit} />} />
          <Route path="/thankyou" element={<ThankYou />} /> 
        </Routes>
      </div>
    </Router>
  );
};


export default App;
