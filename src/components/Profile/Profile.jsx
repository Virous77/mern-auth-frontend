import React, { useState } from "react";
import "./Profile.css";
import ProfileForm from "./ProfileForm";
import Image from "./Image";
import { useSelector } from "react-redux";
import { useSelectUser } from "../Redux/slices/authSlice/authSlice";

const Profile = () => {
  const [userImage, setUserImage] = useState(null);
  const [edit, setEdit] = useState(false);
  const user = useSelector(useSelectUser);

  console.log(user);

  const initialState = {
    name: "Reetesh Kumar",
    email: "Mohit12@gmail.com",
    mobile: 8210830957,
    bio: "I'm cool Boy!",
    verified: "admin",
  };

  const [userData, setUserData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

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
            <p className="--margin-bottom-EL">Reetesh Kumar</p>
            <span className="--font-sm">Role: admin</span>
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
