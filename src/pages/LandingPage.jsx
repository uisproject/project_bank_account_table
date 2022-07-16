import React from "react";
import AccountTable from "../components/LandingPage/AccountTable";
import MainLayout from "../layouts/MainLayout";

const LandingPage = () => {
  return (
    <MainLayout>
      <AccountTable />
      <div style={{ width: "100%", height: "75px" }}></div>
      <div
        style={{
          width: "100%",
          background:
            "linear-gradient(0deg, rgba(255,255,255,1) 71%, rgba(255,255,255,0.5277103559870551) 87%)",
          height: "75px",
          position: "fixed",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      ></div>
    </MainLayout>
  );
};

export default LandingPage;
