import React, { useState } from "react";
import Heading from "../components/Common/Heading";
import DetailSearch from "../components/Main/DetailSearch";
import MovieList from "../components/MovieList/MovieList";
import Select from "../components/Common/Select";
import { selectedTypes } from "../data/selectedType";

const Main = () => {
  const [type, setType] = useState("gallery");

  return (
    <>
      <div className="m0auto">
        <DetailSearch />
        <div className="align both vm">
          <Heading
            tag="h2"
            text="Recommended Movies"
            className="heading regular"
          />
          <Select
            placeholder="선택하세요"
            options={selectedTypes}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <MovieList type={type} />
      </div>
    </>
  );
};

export default Main;
