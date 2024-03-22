import React from 'react';
import Product from './Product';

const Products = ({ products, addToCart }) => {
  return (
    <div className="products">
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default Products;
