import React, { useState } from 'react';
import { IoIosAddCircle } from 'react-icons/io';

const AddToCart = ({ onAddToCart }) => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productName.trim() || !price.trim()) {
      alert('Please enter a product name and price');
      return;
    }
    onAddToCart({ productName, price });
    setProductName('');
    setPrice('');
  };

  return (
    <form className="cart-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="productName">Product Name:</label>
        <input
          id="productName"
          type="text"
          placeholder="Enter product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="text"
          placeholder="Enter product price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button type="submit">Add to Cart <IoIosAddCircle /></button>
    </form>
  );
};

export default AddToCart;
