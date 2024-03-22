import React from 'react';
import Product from './Product';
import ItemDescript from './ItemDescript';

const Products = ({ onAddToCart }) => {
  return (
    <div className="products">
      {ItemDescript.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default Products;
