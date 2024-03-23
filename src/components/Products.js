import React from 'react';
import ProductDetail from '../pages/ProductDetail';

const Products = ({ products }) => {
  return (
    <div className="products">
      {products.map((product) => (
        <ProductDetail
          key={product.id}
          name={product.name}
          image={product.image}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Products;
