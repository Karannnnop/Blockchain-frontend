import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <h1>Blockchain Exam Portal</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/admin-login">Admin</Link>
      <Link to="/student-login">Student</Link>
    </nav>
  </header>
);

export default Header;
