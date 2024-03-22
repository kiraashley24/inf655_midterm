import React from 'react';

const Product = ({ id, name, image, price, onAddToCart }) => {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(id)}>Add to Cart</button>
    </div>
  );
};

export default Product;
