import React from "react";
import "./Button.scss";

const Button = ({ className, ariaLabel, text = "", ...props }) => {
  const isLabel = ariaLabel ? { "aria-label": ariaLabel } : {};
  return (
    <>
      <button className={className} {...isLabel} {...props}>
        {text}
      </button>
    </>
  );
};

export default Button;
