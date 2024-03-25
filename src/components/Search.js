import React, { useState } from 'react';

const Search = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value); // Update the search term in the parent component
  };

  return (
    <div>
      {/* You can remove the input field and the button */}
    </div>
  );
};

export default Search;
