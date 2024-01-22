import React from "react";
import "./Input.scss";

const Input = ({ type, className, val, placeholder, onEvent }) => {
  const handleEvent = (e) => {
    const isValue = e.target.value;
    onEvent && onEvent(isValue);
  };
  return (
    <>
      <input
        className={className}
        type={type}
        value={val}
        placeholder={placeholder}
        onChange={handleEvent}
      />
    </>
  );
};

export default Input;
