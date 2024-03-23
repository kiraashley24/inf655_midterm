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
      <div className="card">
        <div className="card-body">
          <h2>Checkout</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <textarea id="address" className="form-control" required />
            </div>
            <button type="submit" className="btn btn-primary">Place Order</button>
          </form>
          <Link to="/cart">Back to Cart</Link>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-body">
          <h3>Order Summary:</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price.toFixed(2)} - Quantity: {item.quantity}
              </li>
            ))}
          </ul>
          <p>Total: ${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
