import React, { useState } from "react";
import UserStats from "./UserStats";
import "./Users.css";
import Search from "./Search";
import UserList from "./UserList";

const Users = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <main className="users">
      <h2 className="--padding-up head-title">User Stats</h2>
      <UserStats />
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <UserList />
    </main>
  );
};

export default Users;
