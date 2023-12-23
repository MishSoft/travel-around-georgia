// import React from 'react'
import "./SearchInput.css";
import { LuSearch } from "react-icons/lu";

function SearchInput() {
  return (
    <div className="search-input-component">
      <h2>Search easily</h2>
      <form className="search-input-form">
        <button className="search-button">
          <LuSearch />
        </button>
        <input type="text" placeholder="Search..." />
      </form>
    </div>
  );
}

export default SearchInput;
