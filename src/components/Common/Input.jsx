import React from "react";
import "./Input.scss";

const Input = ({ type, className, val, placeholder, props }) => {
  return (
    <>
      <input className={className} type={type} value={val} placeholder={placeholder} {...props} />
    </>
  );
};

export default Input;
