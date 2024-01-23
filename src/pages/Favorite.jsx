import React from "react";
import Heading from "../components/Common/Heading";
import Visual from "../components/Common/Visual";
import visualImage from "/visual3.jpg";

const Favorite = () => {
  return (
    <>
      <Visual imageUrl={visualImage}>
        <Heading
          tag="h2"
          className={"sub-title"}
          subtitle="MOST POPULAR MOVIES"
          maintitle="Favorite Movies"
        />
      </Visual>
    </>
  );
};

export default Favorite;
