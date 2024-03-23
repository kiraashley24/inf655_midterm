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

  return (
    <Router>
      <div className="app">
        <Header />
        <h1>Shopping Cart</h1>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path="/products" element={<Products products={ItemDescript} addToCart={addToCart} />} />
          <Route path="/products/:id" element={<ProductDetail products={ItemDescript} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
