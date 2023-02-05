import React from "react";

const ProfileForm = ({ setEdit, edit, handleChange, userData }) => {
  return (
    <div className="form">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="--flex-start --flex-direction"
      >
        <fieldset>
          {edit ? (
            <>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={userData.name}
                onChange={handleChange}
              />
            </>
          ) : (
            <p>{userData.name}</p>
          )}
        </fieldset>

        <fieldset>
          <p>{userData.email}</p>
        </fieldset>

        <fieldset>
          {edit ? (
            <>
              <label htmlFor="number"> Mobile no:</label>
              <input
                type="text"
                id="number"
                name="mobile"
                value={userData.mobile}
                onChange={handleChange}
              />
            </>
          ) : (
            <p>{userData.mobile}</p>
          )}
        </fieldset>

        <fieldset>
          {edit ? (
            <>
              <label htmlFor="bio">Bio</label>
              <input
                type="text"
                id="bio"
                name="bio"
                value={userData.bio}
                onChange={handleChange}
              />
            </>
          ) : (
            <p>{userData.bio}</p>
          )}
        </fieldset>

        {edit && (
          <div className="action-profile --flex-center --gap-two ">
            <button type="button" onClick={() => setEdit(false)}>
              Cancel
            </button>
            <button
              style={{ backgroundColor: "blueviolet", color: "whitesmoke" }}
              type="button"
            >
              Update Profile
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ProfileForm;
