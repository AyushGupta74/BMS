import React, { useState, useEffect } from "react";
import axios from "axios";

const UserProfile = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/user/profile"
        );
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setError("Error fetching user profile. Please try again.");
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <div style={{ color: "red" }}>{error}</div>
      ) : (
        <div>
          <p>
            <strong>Username:</strong> {userData.username}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          {/* Add additional user profile fields here */}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
