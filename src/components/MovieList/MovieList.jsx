import React from "react";

import "./MovieList.scss";
import MovieListFav from "./MovieListFav";
import MovieListCard from "./MovieListCard";
import MovieListGallery from "./MovieListGallery";
import MovieListList from "./MovieListList";

const MovieList = ({ type }) => {
  const renderMovieList = () => {
    if (type === "fav") {
      return <MovieListFav />;
    } else if (type === "card") {
      return <MovieListCard />;
    } else if (type === "gallery") {
      return <MovieListGallery />;
    } else if (type === "list") {
      return <MovieListList />;
    }
  };
  return <ul className={"movie-list " + type}>{renderMovieList()}</ul>;
};

export default MovieList;
