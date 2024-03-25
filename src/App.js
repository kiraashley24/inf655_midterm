import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Products from './components/Products';
import Cart from './pages/Cart';
import ItemDescript from './components/ItemDescript';
import ProductDetail from './pages/ProductDetail';
import HomePage from './pages/HomePage';
import Checkout from './components/Checkout';
import ThankYou from './pages/thankyou';
import { CartProvider } from './components/context/CartContext'; 

//funcitonality being handled in APP ex.) search functionality
const App = () => {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products products={ItemDescript} />} />
          <Route path="/productdetail" element={<ProductDetail products={ItemDescript} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
};

export default App;