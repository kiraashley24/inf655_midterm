import React, { useState } from 'react';

const Cart = ({ cart, removeFromCart }) => {
  const [items, setItems] = useState(cart);

  const handleRemoveFromCart = (productId) => {
    const updatedCart = items.filter((item) => item.id !== productId);
    setItems(updatedCart);
    removeFromCart(productId);
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {items.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove from Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
