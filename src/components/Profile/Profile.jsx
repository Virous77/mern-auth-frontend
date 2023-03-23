import React, { useEffect, useState } from "react";
import "./Profile.css";
import ProfileForm from "./ProfileForm";
import Image from "./Image";
import { useSelector } from "react-redux";
import { useSelectUser } from "../Redux/slices/authSlice/authSlice";

const Profile = () => {
  const [userImage, setUserImage] = useState(null);
  const [edit, setEdit] = useState(false);
  const user = useSelector(useSelectUser);

  const initialState = {
    name: user?.name,
    email: user?.email,
    mobile: user?.phone,
    bio: user?.bio,
    verified: user?.isVerified,
  };

  const [userData, setUserData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  useEffect(() => {
    const data = {
      name: user?.name,
      email: user?.email,
      mobile: user?.phone,
      bio: user?.bio,
      verified: user?.isVerified,
    };
    setUserData(data);
    setUserImage(user?.photo);
  }, [user]);

  return (
    <>
      <h2 className="--padding-up head-title">Profile</h2>

      <section className="profile">
        <div className="imageFrame --flex-center --flex-direction --gap-one --justify-content  ">
          <Image
            userImage={userImage}
            setUserImage={setUserImage}
            edit={edit}
          />
          <div
            className="--text-align --font-bold
          --text-uppercase --primary-font-color
          "
          >
            <p className="--margin-bottom-EL">{user?.name}</p>
            <span className="--font-sm">Role: {user?.role}</span>
          </div>

          <span onClick={() => setEdit(!edit)} className="edit-profile">
            {edit ? "Cancel" : "Edit Profile"}
          </span>
        </div>
        <ProfileForm
          edit={edit}
          setEdit={setEdit}
          handleChange={handleChange}
          userData={userData}
        />
      </section>
    </>
  );
};

export default Profile;
