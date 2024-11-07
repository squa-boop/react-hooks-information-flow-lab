// src/components/Filter.js
import React from 'react';

function Filter({ onCategoryChange }) {
  return (
    <div>
      <label htmlFor="category">Select Category</label>
      <select
        id="category"
        role="combobox"
        onChange={(e) => onCategoryChange(e.target.value)} // Call the prop function on change
      >
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Dairy">Dairy</option>
      </select>
    </div>
  );
}

export default Filter;
