import React from "react";
import "./Visual.scss";

const Visual = ({ children, imageUrl }) => {
  return (
    <>
      <div className="visual">
        <img src={imageUrl} alt="" />
        {children}
      </div>
    </>
  );
};

export default Visual;
