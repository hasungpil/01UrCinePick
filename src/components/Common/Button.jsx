import React from "react";
import "./Button.scss";

const Button = ({ className, ariaLabel, text = "", onEvent }) => {
  const isLabel = ariaLabel ? { "aria-label": ariaLabel } : {};
  const handleEvent = () => {
    onEvent && onEvent();
  };
  return (
    <>
      <button className={className} {...isLabel} onClick={handleEvent}>
        {text}
      </button>
    </>
  );
};

export default Button;
