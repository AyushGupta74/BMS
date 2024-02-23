import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Budget Management System</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

export default Footer;
