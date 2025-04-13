import React from "react";

const StyledButtonInternal = () => {
  return (
    <>
      <style>
        {`
          .internal-button {
            background-color: green;
            color: white;
            padding: 10px 20px;
            font-size: 16px;
            border: none;
            cursor: pointer;
            border-radius: 5px;
          }
        `}
      </style>
      <button className="internal-button">Internally Styled Button</button>
    </>
  );
};

export default StyledButtonInternal;
