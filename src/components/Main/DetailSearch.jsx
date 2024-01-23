import React, { useState } from "react";
import { TypeArray, YearArray } from "../../data/detailSearchoptions";
import { searchMovie } from "../../utils/fetch";
import Input from "../Common/Input";
import Select from "../Common/Select";
import Button from "../Common/Button";
import "./DetailSearch.scss";

const DetailSearch = () => {
  const [isYear, setIsYear] = useState("");
  const [isType, setIsType] = useState("");
  const [movieTitle, setMovieTitle] = useState("");

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
        <Button
          className="btn regular pink"
          text="Search"
          onClick={() => searchMovie(movieTitle, isYear, isType)}
        />
      </div>
    </>
  );
};

export default DetailSearch;
