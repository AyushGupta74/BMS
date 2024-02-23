import React from "react";

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Budget Management System</h1>
    </header>
  );
};

const headerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "20px",
};

export default Header;
