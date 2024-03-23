import React, { useState } from 'react';
import ItemDescript from '../components/ItemDescript';
;

const Cart = ({ cart, removeFromCart }) => {
  const [items, setItems] = useState(cart);

  const handleRemoveFromCart = (productId) => {
    const updatedCart = items.filter((item) => item.id !== productId);
    setItems(updatedCart);
    removeFromCart(productId);
  };

  const handleAddToCart = (productId, quantity) => {
    const product = ItemDescript.find((item) => item.id === productId);
    if (product) {
      const updatedCart = [...items, { ...product, quantity }];
      setItems(updatedCart);
    }
  };

  return (
    <div className="cart">
      <div className="add-to-cart">
        <h2>Add to Cart</h2>
        {ItemDescript.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: ${item.price.toFixed(2)}</p>
            <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
            <input
              type="number"
              id={`quantity-${item.id}`}
              min="0"
              defaultValue="0"
              onChange={(e) => {
                const quantity = parseInt(e.target.value, 10);
                if (!isNaN(quantity)) {
                  handleAddToCart(item.id, quantity);
                }
              }}
            />
            <button onClick={() => handleAddToCart(item.id, parseInt(document.getElementById(`quantity-${item.id}`).value))}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
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
    </div>
  );
};

export default Cart;
