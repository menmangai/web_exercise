import React from "react";
import PropTypes from "prop-types";

const Child = ({ message }) => {
  return <h2>Message from Parent: {message}</h2>;
};

// Prop Validation
Child.propTypes = {
  message: PropTypes.string.isRequired,
};

const Parent1 = () => {
  return <Child message="Hello from Parent!" />;
};

export default Parent1;
