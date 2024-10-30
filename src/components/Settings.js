// src/components/Settings.js
import React from 'react';

const Settings = () => {
  return (
    <div>
      <h2>Settings</h2>
      <form>
        <div>
          <label htmlFor="notifications">Notifications:</label>
          <select id="notifications" name="notifications">
            <option value="enabled">Enabled</option>
            <option value="disabled">Disabled</option>
          </select>
        </div>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
};

export default Settings;
