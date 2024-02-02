"use client";

import { useState } from "react";
import { SearchBrands } from "./";

const SearchBar = () => {
  const [brand, setBrand] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchBrands brand={brand} setBrand={setBrand} />
      </div>
    </form>
  );
};

export default SearchBar;
