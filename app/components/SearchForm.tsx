"use client";
import React from "react";

type SearchFormProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const SearchForm = ({ search, setSearch }: SearchFormProps) => {
  const handleReset = () => setSearch("");

  return (
    <form className="flex items-center w-full bg-brand-cream rounded-full shadow-inner px-3 py-2 border border-brand-orange/30">
      <input
        type="search"
        placeholder="Search for recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="grow px-4 py-2 bg-transparent outline-none text-brand-dark placeholder:text-brand-dark/50"
      />

      {search && (
        <button
          type="button"
          onClick={handleReset}
          className="px-3 py-2 bg-brand-orange text-white hover:bg-brand-dark rounded-full transition"
        >
          ✕
        </button>
      )}
    </form>
  );
};

export default SearchForm;
