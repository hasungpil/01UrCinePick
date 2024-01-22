import React from "react";
import "./Ratings.scss";

const Ratings = () => {
  return (
    <ul className="ratings">
      <li>
        <strong>Internet Movie Database</strong>
        <div>8.4/10</div>
      </li>
      <li>
        <strong>Rotten Tomatoes</strong>
        <div>94%</div>
      </li>
      <li>
        <strong>Metacritic</strong>
        <div>78/100</div>
      </li>
    </ul>
  );
};

export default Ratings;
