import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../components/context/CartContext';

const Checkout = () => {
  const { cart, setCart, handleSubmit, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Call the handleSubmit function from the CartContext
    handleSubmit({ name, email, address, items: cart, totalPrice });
    // Reset the form state
    setName('');
    setEmail('');
    setAddress('');
    // Clear the cart
    setCart([]);
    navigate({
      pathname: '/thankyou'
    });
  };

  return (
    <div className="checkout-container">
      <div className="card checkout-card">
        <div className="checkout">
          <h2>Checkout</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" value={name} onChange={handleNameChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={handleEmailChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <textarea id="address" value={address} onChange={handleAddressChange} required />
            </div>
            <button type="submit" className="btn btn-order">Place Order</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;