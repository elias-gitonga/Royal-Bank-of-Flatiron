import React from "react";

function Search({ searchTerm, onSearchChange }) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={searchTerm}
        onChange={onSearchChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
