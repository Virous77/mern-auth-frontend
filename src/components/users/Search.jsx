import React from "react";

const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <header className="searchMain">
      <h2 className="--padding-up">All users</h2>

      <form className="search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="search Users"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </header>
  );
};

export default Search;
