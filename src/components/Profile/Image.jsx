import React from "react";
import reetesh from "../../assets/reetesh.jpeg";

const Image = ({ setUserImage, userImage, edit }) => {
  const previewImage = (event) => {
    const targetFiles = event.target.files[0];
    setUserImage(URL.createObjectURL(targetFiles));
  };

  return (
    <div className="image">
      <img src={userImage || reetesh} alt="user-active" />

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
