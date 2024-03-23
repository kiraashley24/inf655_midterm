import React from 'react';
import ItemDescript from '../components/ItemDescript';

const ProductDetail = () => {
  return (
    <div className="products">
      {ItemDescript.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <div className="product-card-body">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetail;
