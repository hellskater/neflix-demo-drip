import React from "react";

const Search = ({ onSubmit, searchText, setSearchText }) => {
  return (
    <form onSubmit={onSubmit} id="search" className="Search">
      <input
        type="search"
        placeholder="Search for a title..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
};

export default Search;
