import React from "react";

const Child = ({ message }) => {
  return <h2>Message from Parent: {message}</h2>;
};

const Parent = () => {
  return <Child message="Hello from Parent!" />;
};

export default Parent;
