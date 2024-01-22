import React from "react";
import "./Button.scss";

const Button = ({ className, ariaLabel, text = "" }) => {
  const isLabel = ariaLabel ? { "aria-label": ariaLabel } : {};
  return (
    <>
      <button className={className} {...isLabel}>
        {text}
      </button>
    </>
  );
};

export default Button;
