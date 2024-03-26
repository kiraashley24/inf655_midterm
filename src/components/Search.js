import React, { useState } from 'react';

const Search = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Update the search term in the parent component
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value); 
  };

  return (
    <div>
      {/*search-bar*/}
    </div>
  );
};

export default Search;
