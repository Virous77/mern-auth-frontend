import React from "react";
import { userStat } from "../../utils/function";

const UserStats = () => {
  const pag = ["first", "second", "third", "fourth"];

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
            <b>{item.id}</b>
          </div>
        </div>
      ))}
    </section>
  );
};

export default UserStats;
