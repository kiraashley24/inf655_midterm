import React, { useState } from 'react';
import Product from './Product';
import Search from './Search'; // Import the Search component

const Products = ({ products, onAddToCart }) => {
  const [searchResults, setSearchResults] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const renderProducts = () => {
    if (!searchTerm || searchResults.length === 0) {
      return products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          onAddToCart={onAddToCart}
        />
      ));
    } else {
      return searchResults.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          onAddToCart={onAddToCart}
        />
      ));
    }
  };

  return (
    <div className="products">
      <Search handleSearch={handleSearch} /> {/* Add the Search component */}
      {renderProducts()}
    </div>
  );
};

export default Products;
