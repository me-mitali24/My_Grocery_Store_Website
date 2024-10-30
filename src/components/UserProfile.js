// src/components/UserProfile.js
// src/components/UserProfile.js
import React from 'react';

const UserProfile = () => {
  return (
    <div>
      <h2>User Profile</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;
