import React from "react";
import Profile from "../components/Profile/Profile";
import ProfileNav from "../components/Profile/ProfileNav";
import UsersPage from "./UsersPage";
import { Route, Routes } from "react-router-dom";
import ResetPass from "../components/Auth/ResetPass";

const ProfilePage = () => {
  return (
    <main className="--padding-one">
      <ProfileNav />
      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="reset" element={<ResetPass title="profile" />} />
      </Routes>
    </main>
  );
};

export default ProfilePage;
