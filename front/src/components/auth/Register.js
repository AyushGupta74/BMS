import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      const response = await axios.post("http://localhost:8080/api/register", {
        username,
        email,
        password,
      });
      console.log("Registration successful!", response.data);
      // Redirect to login page or dashboard upon successful registration
    } catch (error) {
      console.error("Registration failed:", error);
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
