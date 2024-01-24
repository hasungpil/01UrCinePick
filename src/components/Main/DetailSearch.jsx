import React, { useContext, useRef, useState } from "react";
import Input from "../Common/Input";
import Select from "../Common/Select";
import Button from "../Common/Button";
import "./DetailSearch.scss";
import { TypeArray, YearArray } from "../../data/detailSearchOptions";
import { searchMovies } from "../../utils/fetch";
import { MovieContext } from "../../context/MovieContext";
import { useNavigate } from "react-router-dom";

const DetailSearch = () => {
  const titleRef = useRef();
  const yearRef = useRef();
  const typeRef = useRef();

  // 직접입력을 하기 위한 값을 받아내는 state
  const [selectedYear, setSelectedYear] = useState("");

  const { setMovies } = useContext(MovieContext);
  const navigate = useNavigate();

  const isValidDirectInput = selectedYear === "direct";

  function onSearchHandler() {
    const searchData = {
      title: titleRef.current.value,
      year: yearRef.current.value,
      type: typeRef.current.value,
    };
    searchMovies(searchData, setMovies);
    navigate("/search");
  }

  return (
    <div className="detail-search">
      <Input ref={titleRef} placeholder="영화이름 입력" />

      {isValidDirectInput && <Input ref={yearRef} placeholder="직접 입력" />}

      {!isValidDirectInput && (
        <Select
          ref={yearRef}
          placeholder="Year"
          options={YearArray}
          onChange={(e) => setSelectedYear(e.target.value)}
        />
      )}

      <Select ref={typeRef} placeholder="Type" options={TypeArray} />
      <Button
        className="btn regular pink"
        text="Search"
        onClick={onSearchHandler}
      />
    </div>
  );
};

export default DetailSearch;
