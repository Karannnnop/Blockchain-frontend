import React, { useState } from "react";
import studentIcon from "../assets/student-icon.png";
import adminIcon from "../assets/admin-icon.png";
import "./../styles.css";

const Login = ({ userType }) => {
  const [credentials, setCredentials] = useState({ username: "", did: "" });

  // Select the correct icon
  const iconSrc = userType.toLowerCase() === "student" ? studentIcon : adminIcon;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${userType} Login Attempted`, credentials);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src={iconSrc} alt={`${userType} Icon`} className="login-icon" />
        <h2>{userType} Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Enter your DID (e.g., did:example:123456)"
            value={credentials.did}
            onChange={(e) => setCredentials({ ...credentials, did: e.target.value })}
            required
            pattern="^did:[a-z0-9]+:[a-zA-Z0-9.-]+$"
            title="Enter a valid Decentralized Identifier (DID)"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
