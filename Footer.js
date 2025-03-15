import React from "react";

const Footer = () => (
  <footer className="footer">
    <p>© 2025 Blockchain Exam Portal. All rights reserved.</p>
  </footer>
);

export default Footer;

const styles = `
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #282c34;
    color: white;
    text-align: center;
    padding: 10px 0;
  }
`;

const styleElement = document.createElement("style");
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);
