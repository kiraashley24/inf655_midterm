import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemDescript from '../components/ItemDescript';
import { RiHeartAddLine } from "react-icons/ri";
import { VscRemove } from "react-icons/vsc";
import { CartContext } from '../components/context/CartContext';

const Cart = () => {
  const { cart, removeFromCart} = useContext(CartContext);
  const [items, setItems] = useState([]);
  const [quantities, setQuantities] = useState({}); // Store quantities for each item
  const navigate = useNavigate();

  const handleAddToCart = (productId) => {
    const product = ItemDescript.find((item) => item.id === productId);
    if (product && quantities[productId] > 0) {
      const updatedCart = [...items, { ...product, quantity: quantities[productId] }];
      setItems(updatedCart);
      setQuantities({ ...quantities, [productId]: 0 }); // Reset quantity to 0 after adding to cart
    } else {
      alert('You must add at least one item.');
    }
  };

  const handleQuantityChange = (productId, newQuantity) => {
    setQuantities({ ...quantities, [productId]: newQuantity });
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = items.filter((item) => item.id !== productId);
    setItems(updatedCart);
    removeFromCart(productId);
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      alert('Your cart is empty. Please add items to your cart before checking out.');
      return;
    }
    navigate({
      pathname: '/checkout',
      state: { items: items, totalPrice: totalPrice }
    });
  };

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Items</h5>
          <div className="medium-items">
            {ItemDescript.map((item) => (
              <div key={item.id} className="medium-card">
              <img src={item.image} alt={item.name} className="card-img-top" />
              <div className="medium-card-body">
                <h5 className="medium-card-title">{item.name}</h5>
                <p className="medium-card-text">Price: ${item.price.toFixed(2)}</p><br />
                <div className="quantity-container">
                  <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                  <input
                    type="number"
                    id={`quantity-${item.id}`}
                    min="1"
                    value={quantities[item.id] || 0}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  />
                  <button
                  onClick={() => handleAddToCart(item.id)}
                  className="btn btn-add btn-primary"
                >
                  <RiHeartAddLine />
                </button>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div> 
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">Shopping Cart</h5>
          <div className="small-items">
            {items.map((item) => (
              <div key={item.id} className="small-card">
                <div className="small-card-content">
                  <img src={item.image} alt={item.name} className="small-image" />
                  <div className="small-details">
                    <h6 className="small-card-title">{item.name}</h6>
                    <p className="small-card-price">Price: ${item.price.toFixed(2)}</p>
                    <p className="small-card-quantity">Quantity: {item.quantity}</p>
                  </div>
                  <button onClick={() => handleRemoveFromCart(item.id)} className="btn btn-delete btn-danger">
                  <VscRemove />
                  </button>
                </div>
              </div>
            ))}
            <div>
              <h5>Total Price: ${totalPrice.toFixed(2)}</h5>
            </div>
            <button type="submit" className="btn btn-order" onClick={handleCheckout}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
