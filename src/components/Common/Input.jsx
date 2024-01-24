import React, { forwardRef } from "react";
import "./Input.scss";

const Input = forwardRef(function Input({ ...props }, ref) {
  return <input ref={ref} className="input" {...props} />;
});

export default Input;
