import React from "react";

const Image = ({ setUserImage, userImage, edit, setImage }) => {
  const previewImage = (event) => {
    const targetFiles = event.target.files[0];
    setUserImage(URL.createObjectURL(targetFiles));
    setImage(targetFiles);
  };

  return (
    <div className="image">
      <img
        src={userImage || "https://i.ibb.co/4pDNDk1/avatar.png"}
        alt="user-active"
      />

      {edit && (
        <div>
          <label htmlFor="image">Edit</label>
          <input
            type="file"
            id="image"
            style={{ display: "none" }}
            onChange={previewImage}
          />
        </div>
      )}
    </div>
  );
};

export default Image;
