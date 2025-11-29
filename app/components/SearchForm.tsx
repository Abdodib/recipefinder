"use client";
import React, { useState } from 'react';

const SearchForm = () => {
  const [search, setSearch] = useState('');
  const handleReset = () => setSearch('');

  return (
    <form className="flex items-center max-w-md mx-auto bg-white rounded-full shadow-md overflow-hidden"  >
      <input
        type="search"
        name="search"
        placeholder="Search for recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="grow px-4 py-2 outline-none text-gray-700"
      />
      {search && (
        <button
          type="button"
          onClick={handleReset}
          className="px-3 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full transition"
        >
          ✕
        </button>
      )}
    </form>
  );
};

export default SearchForm;
