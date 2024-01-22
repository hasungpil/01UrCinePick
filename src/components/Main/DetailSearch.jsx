import React, { useState } from "react";
import Input from "../Common/Input";
import Select from "../Common/Select";
import Button from "../Common/Button";
import "./DetailSearch.scss";
import axios from "axios";
import { API } from "../../data/api";

const DetailSearch = () => {
  const [isYear, setIsYear] = useState("");
  const [isType, setIsType] = useState("");
  const [movieTitle, setMovieTitle] = useState("");

  const thisYear = new Date().getFullYear();
  const YearArray = [
    {
      value: thisYear,
      text: thisYear,
    },
    {
      value: thisYear - 1,
      text: thisYear - 1,
    },
    {
      value: thisYear - 2,
      text: thisYear - 2,
    },
    {
      value: thisYear - 3,
      text: thisYear - 3,
    },
    {
      value: thisYear - 4,
      text: thisYear - 4,
    },
    {
      value: "direct",
      text: "직접입력",
    },
  ];
  const TypeArray = [
    {
      value: "movie",
      text: "Movie",
    },
    {
      value: "series",
      text: "Series",
    },
    {
      value: "episode",
      text: "Episode",
    },
  ];

  const serachMovies = async () => {
    try {
      const responses = await axios.get(
        `${API}${"&s=" + movieTitle}${"&y=" + isYear}${"&type=" + isType}`
      );
      console.log(responses);
    } catch (error) {
      console.log("searchMovie Error : ", error);
    }
  };

  const handleTitle = (value) => {
    setMovieTitle(value);
    console.log(value);
  };

  return (
    <>
      <div className="detail-search">
        <Input type="search" className="input" placeholder="영화이름 입력" onEvent={handleTitle} />
        {isYear === "direct" ? (
          <Input type="number" className="input" placeholder="직접 입력" onEvent={setIsYear} />
        ) : (
          <Select placeholder="Year" options={YearArray} onSelectOption={setIsYear} />
        )}
        <Select placeholder="Type" options={TypeArray} onSelectOption={setIsType} />
        <Button className="btn regular pink" text="Search" onEvent={serachMovies} />
      </div>
    </>
  );
};

export default DetailSearch;
