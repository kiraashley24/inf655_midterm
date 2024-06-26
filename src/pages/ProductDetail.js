import React, { useState } from 'react';
import Search from '../components/Search'; // Search component

const ProductDetail = ({ products, handleSearch }) => {
  // Assume ItemDescript is an array of products
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handler for updating search term
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="products">
      <Search handleSearch={handleSearch} />
      <input
        type="text"
        className='search-bar'
        placeholder="Search product by flower name"
        value={searchTerm}
        onChange={handleChange}
      />
      {filteredProducts.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
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
