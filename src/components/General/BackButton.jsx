import React from "react";
import { Space, Button } from "antd";
import TextBold from "./TextBold";
import { useNavigate } from "react-router-dom";

const BackButton = ({ children }) => {
  const navigate = useNavigate();

  return (
    <>
      <Button
        onClick={() => {
          navigate(-1);
        }}
        style={{ border: "transparent", marginBottom: "1.3em", padding: "0" }}
      >
        <Space>
          <i className="fa-solid fa-arrow-left-long"></i>
          <TextBold>{children}</TextBold>
        </Space>
      </Button>
    </>
  );
};

export default BackButton;
