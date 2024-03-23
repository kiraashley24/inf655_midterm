import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemDescript from '../components/ItemDescript';

const Cart = ({ cart, removeFromCart }) => {
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState(1); // Default quantity to 1

  const handleAddToCart = (productId) => {
    const product = ItemDescript.find((item) => item.id === productId);
    if (product) {
      const updatedCart = [...items, { ...product, quantity }];
      setItems(updatedCart);
      setQuantity(1); // Reset quantity to 1 after adding to cart
    }
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = items.filter((item) => item.id !== productId);
    setItems(updatedCart);
    removeFromCart(productId);
  };

  return (
    <div className="cart">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Add to Cart</h5>
          {ItemDescript.map((item) => (
            <div key={item.id} className="cart-item">
              <h6>{item.name}</h6>
              <p>Price: ${item.price.toFixed(2)}</p>
              <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
              <input
                type="number"
                id={`quantity-${item.id}`}
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
              />
              <button
                onClick={() => handleAddToCart(item.id)}
                className="btn btn-primary"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">Shopping Cart</h5>
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <h6>{item.name}</h6>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="btn btn-danger"
              >
                Remove from Cart
              </button>
            </div>
          ))}
          <Link to="/checkout" className="btn btn-success">Buy Products</Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
