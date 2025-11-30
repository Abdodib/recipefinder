"use client";
import React from "react";

type SearchFormProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const SearchForm = ({ search, setSearch }: SearchFormProps) => {
  const handleReset = () => setSearch("");

  return (
    <form className="flex items-center w-full bg-gray-100 rounded-full shadow-inner px-3 py-2">
      <input
        type="search"
        placeholder="Search for recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="grow px-4 py-2 bg-transparent outline-none text-gray-700 placeholder-gray-400"
      />
      {search && (
        <button
          type="button"
          onClick={handleReset}
          className="px-3 py-2 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-full transition"
        >
          ✕
        </button>
      )}
    </form>
  );
};

export default SearchForm;
