import React from "react";
import "./Button.scss";

const Link = ({ url, className, ariaLabel, text }) => {
  const isLabel = ariaLabel ? { "aria-label": ariaLabel } : {};
  return (
    <>
      <a href={url} className={className} {...isLabel}>
        {text ? text : ""}
      </a>
    </>
  );
};

export default Link;
