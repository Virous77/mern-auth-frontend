import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <header className="searchMain">
      <h2 className="--padding-up">All users</h2>

      <input
        type="text"
        placeholder="search Users"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </header>
  );
};

export default Search;
