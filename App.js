import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import "./assets/style.css";

const Home = () => (
  <div className="home-container">
    <h1>Blockchain Exam Portal</h1>
    <p>Secure & Decentralized Online Examination with Blockchain Technology</p>
    <div className="login-buttons">
      <Link to="/admin-login">
        <button className="admin-btn">Admin Login</button>
      </Link>
      <Link to="/student-login">
        <button className="student-btn">Student Login</button>
      </Link>
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<Login userType="admin" />} />
        <Route path="/student-login" element={<Login userType="student" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
