import React from "react";
import { Link, useLocation } from "react-router-dom";
import { profileNav } from "../../utils/function";
import { useSelector } from "react-redux";
import { useSelectUser } from "../Redux/slices/authSlice/authSlice";

const ProfileNav = () => {
  const location = useLocation();
  const user = useSelector(useSelectUser);

  return (
    <nav className="profileNav --flex-center  --gap-two --justify-content">
      {profileNav.map((item, idx) => (
        <div key={idx}>
          {item.name === "Profile" || item.name === "Change Password" ? (
            <span className="--font-bold">
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
          ) : (
            ""
          )}

          {user?.role === "author" || user?.role === "admin" ? (
            <>
              {item.name === "Users" && (
                <span className="--font-bold">
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
              )}
            </>
          ) : (
            ""
          )}
        </div>
      ))}
    </nav>
  );
};

export default ProfileNav;
