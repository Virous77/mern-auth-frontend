import React, { useEffect, useState } from "react";
import "./Profile.css";
import ProfileForm from "./ProfileForm";
import Image from "./Image";
import { useSelector, useDispatch } from "react-redux";
import { useSelectUser } from "../Redux/slices/authSlice/authSlice";
import { getUpdateUser } from "../Redux/slices/authSlice/authThunk";
import { useGlobalContext } from "../store/globalContext";
import Verify from "../Auth/Verify";
import Loader from "../Layout/Loader/Loader";

const Profile = () => {
  const [userImage, setUserImage] = useState(null);
  const [image, setImage] = useState(null);
  const [edit, setEdit] = useState(false);
  const user = useSelector(useSelectUser);
  const { isLoading, message, mainLoading } = useSelector(
    (state) => state.auth
  );

  const initialState = {
    name: user?.name,
    email: user?.email,
    mobile: user?.phone,
    bio: user?.bio,
    verified: user?.isVerified,
  };

  const [userFormData, setUserData] = useState(initialState);

  const dispatch = useDispatch();
  const { handleNotification } = useGlobalContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userFormData, [name]: value });
  };

  const cloud_name = import.meta.env.VITE_CLOUDINARY_NAME;
  const cloud_preset = import.meta.env.VITE_CLOUDINARY_PRESET;

  const handleSubmit = async () => {
    let imageURL;

    try {
      if (image) {
        const uploadImage = new FormData();

        uploadImage.append("file", image);
        uploadImage.append("cloud_name", cloud_name);
        uploadImage.append("upload_preset", cloud_preset);

        //save image to cloudinary

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
          {
            method: "post",
            body: uploadImage,
          }
        );
        const imgData = await res.json();
        imageURL = imgData?.url?.toString();
      }

      //update user to db
      const userData = {
        name: userFormData.name,
        phone: userFormData.mobile,
        bio: userFormData.bio,
        photo: image ? imageURL : userImage,
      };

      dispatch(getUpdateUser(userData));
      setEdit(false);
    } catch (error) {
      handleNotification({
        message: error.message,
        status: "error",
      });
    }
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

  useEffect(() => {
    if (message) {
      handleNotification({
        message,
        status: message === " Verification email sent!" ? "success" : "error",
      });
    }
  }, [message]);

  if (mainLoading) return <Loader />;

  return (
    <>
      {!user?.isVerified && <Verify />}

      <h2 className="--padding-up head-title">Profile</h2>

      <section className="profile">
        <div className="imageFrame --flex-center --flex-direction --gap-one --justify-content  ">
          <Image
            userImage={userImage}
            setUserImage={setUserImage}
            setImage={setImage}
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
          userData={userFormData}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </section>
    </>
  );
};

export default Profile;
