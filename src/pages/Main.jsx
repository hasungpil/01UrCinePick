import React, { useState } from "react";
import Heading from "../components/Common/Heading";
import DetailSearch from "../components/Main/DetailSearch";
import Sort from "../components/Main/Sort";
import MovieList from "../components/MovieList/MovieList";

const Main = () => {
  const [isSort, setIsSort] = useState("");
  const handleSortData = (sortValue) => {
    setIsSort(sortValue);
  };
  return (
    <>
      <DetailSearch />
      <div className="align both vm">
        <Heading tag="h2" text="Recommended Movies" className="heading regular" />
        <Sort onSortOption={handleSortData} />
      </div>
      {isSort ? <MovieList type={isSort} /> : <MovieList type="gallery" />}
    </>
  );
};

export default Main;
