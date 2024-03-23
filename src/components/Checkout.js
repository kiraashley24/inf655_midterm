import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = ({ cart, total }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, such as sending the order to a backend server
    console.log('Order submitted!');
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <textarea id="address" required />
        </div>
        <h3>Order Summary:</h3>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price ? item.price.toFixed(2) : ''} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
        <p>Total: ${total ? total.toFixed(2) : ''}</p>
        <button type="submit">Place Order</button>
      </form>
      <Link to="/cart">Back to Cart</Link>
    </div>
  );
};

export default Checkout;
