import React, { useState } from 'react';
import Product from './Product';

const Products = ({ products, addToCart }) => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, quantity) => {
    setQuantities({ ...quantities, [productId]: quantity });
  };

  const handleAddToCart = (productId) => {
    const quantity = quantities[productId] || 1;
    addToCart(productId, quantity);
    setQuantities({ ...quantities, [productId]: 1 });
  };

  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
          <input
            type="number"
            min="1"
            value={quantities[product.id] || ''}
            onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
          />
          <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
