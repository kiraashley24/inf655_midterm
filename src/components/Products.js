import React from 'react';
import Product from './Product';

const Products = ({ products, onAddToCart }) => {
  return (
    <div className="products">
      {products.map((product) => (
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
