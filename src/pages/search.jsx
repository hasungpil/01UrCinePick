import React from "react";
import Heading from "../components/Common/Heading";
import Visual from "../components/Common/Visual";
import visualImage from "../../public/visual1.webp";

const Search = () => {
  return (
    <>
      <Visual imageUrl={visualImage}>
        <Heading tag="h2" className={"sub-title"} subtitle="MOST POPULAR MOVIES" maintitle="MOVIE SEARCHING RESULTS" />
      </Visual>
      <div className="m0auto">test</div>
    </>
  );
};

export default Search;
