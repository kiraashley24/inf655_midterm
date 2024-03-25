import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Checkout = ({ cart, setCart, handleSubmit, totalPrice }) => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Call the handleSubmit function passed from props
    handleSubmit({ name, email, address, items: cart, totalPrice });
    // Reset the form state
    setName('');
    setEmail('');
    setAddress('');
    // Clear the cart
    setCart([]);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <textarea id="address" value={address} onChange={handleAddressChange} required />
        </div>
        <h3>Order Summary:</h3>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
        <p>Total: ${totalPrice.toFixed(2)}</p>

        <button type="submit">Place Order</button>
      </form>
      <Link to="/cart">Back to Cart</Link>
    </div>
  );
};

export default Checkout;
