import React from "react";

const TextBold = ({ children, style }) => {
  return <div style={{ fontWeight: "bold", ...style }}>{children}</div>;
};

export default TextBold;
