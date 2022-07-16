import React from "react";
import "./mainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <div
      className="layout-wrapper"
      style={{ maxWidth: "80vw", margin: "50px auto" }}
    >
      {children}
    </div>
  );
};

export default MainLayout;
