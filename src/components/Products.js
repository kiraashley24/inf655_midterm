//Receives product details and renders card
import React from 'react';
import ProductDetail from '../pages/ProductDetail';

const Products = ({ products, onAddToCart }) => {
  return (
    <div className="products">
      {products.map((product) => (
        <ProductDetail
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          description={product.description}
          price={product.price}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default Products;