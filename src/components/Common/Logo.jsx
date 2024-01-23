import React from "react";
import "./Logo.scss";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <h1 className="logo">
      <Link to="/">UrCinePick</Link>
    </h1>
  );
};

export default Logo;
