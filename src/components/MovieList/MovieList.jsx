import React, { useEffect, useState } from "react";
import "./MovieList.scss";
import MovieListFav from "./MovieListFav";
import MovieListCard from "./MovieListCard";
import MovieListGallery from "./MovieListGallery";
import MovieListList from "./MovieListList";
import { recommendMovieList } from "../data/recommendMovie";
import axios from "axios";

const MovieList = ({ type }) => {
  const [movies, setMovies] = useState([]);
  const API = "https://omdbapi.com/?apikey=ef297970";

  // index추천영화
  const recommendedMovies = async () => {
    try {
      const apiResponses = await Promise.all(
        recommendMovieList.map((id) => {
          return axios.get(`${API}&i=${id}`);
        })
      );
      const movieDataList = apiResponses.map((response) => response.data);
      setMovies(movieDataList);
    } catch (error) {
      console.log("recommendedMovies Error : ", error);
    }
  };

  useEffect(() => {
    recommendedMovies();
  }, []);

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
