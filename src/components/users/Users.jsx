import React, { useEffect, useState } from "react";
import UserStats from "./UserStats";
import "./Users.css";
import Search from "./Search";
import UserList from "./UserList";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUsers,
  getDeleteUser,
} from "../Redux/slices/authSlice/authThunk";
import { useGlobalContext } from "../store/globalContext";
import Loader from "../Layout/Loader/Loader";
import Pagination from "../pagination/Pagination";

const Users = () => {
  const [search, setSearch] = useState("");

  const { isLoading, message, users, mainLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const { handleNotification } = useGlobalContext();

  const searchUser = users?.filter((user) =>
    user?.name?.toLowerCase()?.includes(search.toLowerCase())
  );

  const deleteUser = (id) => {
    dispatch(getDeleteUser(id));
  };

  ////Pagination

  const itemsPerPage = 10;
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = searchUser?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(searchUser?.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % searchUser?.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  useEffect(() => {
    if (message) {
      handleNotification({
        message,
        status: "success",
      });
    }
  }, [message]);

  if (mainLoading) return <Loader />;

  return (
    <main className="users">
      <h2 className="--padding-up head-title">User Stats</h2>
      <UserStats users={users} />
      <Search search={search} setSearch={setSearch} />
      <UserList searchUser={currentItems} deleteUser={deleteUser} />
      <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
    </main>
  );
};

export default Users;
