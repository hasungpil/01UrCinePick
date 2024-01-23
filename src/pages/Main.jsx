import React, { useState } from "react";
import Heading from "../components/Common/Heading";
import DetailSearch from "../components/Main/DetailSearch";
import Sort from "../components/Main/Sort";
import MovieList from "../components/MovieList/MovieList";

const Main = () => {
  const [isSort, setIsSort] = useState("gallery");
  const handleSortData = (sortValue) => {
    setIsSort(sortValue);
  };
  return (
    <>
      <div className="m0auto">
        <DetailSearch />
        <div className="align both vm">
          <Heading tag="h2" text="Recommended Movies" className="heading regular" />
          <Sort onSortOption={handleSortData} />
        </div>
        <MovieList type={isSort} />
      </div>
    </>
  );
};

export default Main;
