import React from 'react';
import ItemDescript from '../components/ItemDescript';


const Cart = () => {
  return (
    <div className="cart">
      {ItemDescript.map((item) => (
        <div key={item.id} className="cart-item">
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Description: {item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
