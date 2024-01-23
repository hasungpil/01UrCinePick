import React, { useContext, useEffect, useState } from "react";
import "./MovieList.scss";
import MovieListFav from "./MovieListFav";
import MovieListCard from "./MovieListCard";
import MovieListGallery from "./MovieListGallery";
import MovieListList from "./MovieListList";
import { recommendedMovies } from "../../utils/fetch";
import { MovieContext } from "../../context/MovieContext";
import { useLocation } from "react-router-dom";

const MovieList = ({ type = "gallery" }) => {
  const { movies, setMovies } = useContext(MovieContext);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      recommendedMovies(setMovies);
    }
  }, [pathname, setMovies]);

  // 리스트형태
  const renderMovieList = () => {
    if (type === "fav") {
      return <MovieListFav />;
    } else if (type === "card") {
      return <MovieListCard movies={movies} />;
    } else if (type === "gallery") {
      return <MovieListGallery movies={movies} />;
    } else if (type === "list") {
      return <MovieListList movies={movies} />;
    }
  };

  return <ul className={"movie-list " + type}>{renderMovieList()}</ul>;
};

export default MovieList;
