import React from "react";
import "./Gnb.scss";
import { Link } from "react-router-dom";

const Gnb = () => {
  return (
    <nav>
      <ul className="gnb">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/favorite">Favorite</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Gnb;
