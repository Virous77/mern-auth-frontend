import React from "react";
import { Link, useLocation } from "react-router-dom";
import { profileNav } from "../../utils/function";

const ProfileNav = () => {
  const location = useLocation();

  return (
    <nav className="profileNav --flex-center  --gap-two --justify-content">
      {profileNav.map((item, idx) => (
        <span key={idx} className="--font-bold">
          <Link
            className={
              location.pathname === item.link
                ? "--secondary-font-color"
                : "--primary-font-color"
            }
            to={item.link}
          >
            {item.name}
          </Link>
        </span>
      ))}
    </nav>
  );
};

export default ProfileNav;
