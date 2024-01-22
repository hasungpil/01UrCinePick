import React from "react";
import "./Gnb.scss";

const Gnb = () => {
  return (
    <nav>
      <ul className="gnb">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Movies</a>
        </li>
        <li>
          <a href="">Favorite</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Search</a>
        </li>
      </ul>
    </nav>
  );
};

export default Gnb;
