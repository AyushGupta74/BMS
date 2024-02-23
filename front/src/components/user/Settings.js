import React, { useState } from "react";
import axios from "axios";

const Settings = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.newPassword !== formData.confirmNewPassword) {
        setError("New passwords do not match");
        return;
      }
      const response = await axios.post(
        "http://localhost:8080/api/settings",
        formData
      );
      console.log("Settings updated successfully!", response.data);
      // Optionally, reset form fields
    } catch (error) {
      console.error("Error updating settings:", error);
      setError("Error updating settings. Please try again.");
    }
  };

  return (
    <div>
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Current Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm New Password:</label>
          <input
            type="password"
            name="confirmNewPassword"
            value={formData.confirmNewPassword}
            onChange={handleChange}
          />
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <button type="submit">Update Settings</button>
      </form>
    </div>
  );
};

export default Settings;
