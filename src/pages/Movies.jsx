import React from "react";
import Heading from "../components/Common/Heading";
import Visual from "../components/Common/Visual";
import visualImage from "/visual2.webp";

const Movies = () => {
  return (
    <>
      <Visual imageUrl={visualImage}>
        <Heading
          tag="h2"
          className={"sub-title"}
          subtitle="MOST POPULAR MOVIES"
          maintitle="Recommended Movies"
        />
      </Visual>
    </>
  );
};

export default Movies;
