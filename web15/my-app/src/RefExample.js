import React, { useRef } from "react";

const RefExample = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>useRef Example</h2>
      <input ref={inputRef} type="text" placeholder="Enter text here" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default RefExample;


