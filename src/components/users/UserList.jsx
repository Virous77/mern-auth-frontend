import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import UserRole from "./UserRole";

const UserList = ({ searchUser, deleteUser }) => {
  return (
    <section className="user-table">
      <table>
        <thead>
          <tr>
            <th>s/n</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Change Role</th>
            <th>Action</th>
          </tr>
        </thead>

        {searchUser?.length > 0 ? (
          <tbody>
            {searchUser?.map((user, idx) => (
              <tr key={user._id}>
                <td>{idx + 1}</td>
                <td className="tdName">{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
                <td>
                  <UserRole user={user} />
                </td>
                <td>
                  <AiOutlineDelete
                    size={22}
                    cursor="pointer"
                    color="red"
                    className="delete"
                    onClick={() => deleteUser(user?._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <p className="notFound">Users not found!</p>
        )}
      </table>
    </section>
  );
};

export default UserList;
