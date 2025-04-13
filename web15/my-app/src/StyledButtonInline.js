import React from "react";

const StyledButtonInline = () => {
  const buttonStyle = {
    backgroundColor: "blue",
    color: "white",
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px"
  };

  return <button style={buttonStyle}>Inline Styled Button</button>;
};

export default StyledButtonInline;
