import React, { useState } from 'react';
import ItemDescript from '../components/ItemDescript';
import Search from '../components/Search'; 

const ProductDetail = ({ handleSearch }) => {
  // Assume ItemDescript is an array of products
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter products based on search term
  const filteredProducts = ItemDescript.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handler for updating search term
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="products">
      <Search handleSearch={handleSearch} /> {/* Add the Search component */}
      <input
        type="text"
        placeholder="Search product by name"
        value={searchTerm}
        onChange={handleChange}
      />
      {filteredProducts.map((product) => (
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