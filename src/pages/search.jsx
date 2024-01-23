import React from "react";
import Heading from "../components/Common/Heading";
import Visual from "../components/Common/Visual";
import visualImage from "/visual1.webp";
import MovieList from "../components/MovieList/MovieList";

const Search = () => {
  return (
    <>
      <Visual imageUrl={visualImage}>
        <Heading
          tag="h2"
          className={"sub-title"}
          subtitle="MOST POPULAR MOVIES"
          maintitle="MOVIE SEARCHING RESULTS"
        />
      </Visual>
      <div className="m0auto">
        <MovieList />
      </div>
    </>
  );
};

export default Search;
