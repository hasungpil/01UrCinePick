import React from "react";

const MovieListList = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => {
        const posterSize = movie.Poster.replace("X300", "X700");
        return (
          <li key={movie.imdbID}>
            <a href="">
              <div className="movie-list__info">
                <div className="movie-list__poster">
                  <img src={posterSize} alt="" />
                </div>
                <div className="movie-list__title">{movie.Title}</div>
                <div className="movie-list__year">{movie.Year}</div>
              </div>
            </a>
          </li>
        );
      })}
    </>
  );
};

export default MovieListList;
