import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import UserRole from "./UserRole";

const UserList = () => {
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
        <tbody>
          <tr>
            <td>1</td>
            <td>Reetesh Kumar</td>
            <td>Sani546@gmail.com</td>
            <td>Admin</td>
            <td>
              <UserRole />
            </td>
            <td>
              <AiOutlineDelete
                size={22}
                cursor="pointer"
                color="red"
                className="delete"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default UserList;
