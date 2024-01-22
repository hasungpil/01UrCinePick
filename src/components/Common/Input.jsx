import React from "react";
import "./Input.scss";

const Input = ({ type, className, val, placeholder }) => {
  return (
    <>
      <input className={className} type={type} value={val} placeholder={placeholder} />
    </>
  );
};

export default Input;
