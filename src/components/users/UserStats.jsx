import React from "react";
import { userStat } from "../../utils/function";

const UserStats = ({ users }) => {
  const pag = ["first", "second", "third", "fourth"];

  const totalUsers = users?.length;
  const verifiedUser = users?.filter(
    (user) => user?.isVerified === true
  )?.length;
  const unVerifiedUser = users?.filter(
    (user) => user.isVerified === false
  )?.length;
  const suspendedUser = users?.filter(
    (user) => user.role === "suspend"
  )?.length;

  const data = [totalUsers, verifiedUser, unVerifiedUser, suspendedUser];

  return (
    <section className="statsMain">
      {userStat.map((item, idx) => (
        <div
          className={`statList --primary-font-color --padding-one ${pag[idx]}`}
          key={item.id}
        >
          <p>{item.icon}</p>

          <div className="--flex-start --flex-direction  ">
            <span className="--margin-bottom-EL --font-sm">{item.name}</span>
            <b>{data[idx]}</b>
          </div>
        </div>
      ))}
    </section>
  );
};

export default UserStats;
