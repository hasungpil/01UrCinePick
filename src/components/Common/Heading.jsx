import React from "react";
import "./Heading.scss";

const Heading = ({ tag, className, text, subtitle, maintitle }) => {
  const config = {
    visualClassName: "sub-title",
    baseClass: "heading ",
  };
  const HeadingName = tag;
  const isClass = config.baseClass + className;
  return (
    <>
      {className === config.visualClassName ? (
        <HeadingName className={config.visualClassName}>
          <strong>{subtitle}</strong>
          <span>{maintitle}</span>
        </HeadingName>
      ) : (
        <HeadingName className={isClass}>{text}</HeadingName>
      )}
    </>
  );
};

export default Heading;
