import React, { useContext, useState } from "react";
import Input from "../Common/Input";
import Select from "../Common/Select";
import Button from "../Common/Button";
import "./DetailSearch.scss";
import { TypeArray, YearArray } from "../../data/detailSearchOptions";
import { searchMovies } from "../../utils/fetch";
import { MovieContext } from "../../context/MovieContext";
import { useNavigate } from "react-router-dom";

const DetailSearch = () => {
  const [searchData, setSearchData] = useState({
    title: "",
    year: "",
    type: "movie",
  });

  const { setMovies } = useContext(MovieContext);
  const navigate = useNavigate();

  const isValidDirectInput = searchData.year === "direct";

  function titleChangeHandler(enteredTitle) {
    setSearchData((prev) => {
      return {
        ...prev,
        title: enteredTitle,
      };
    });
  }

  function yearChangeHandler(enteredYear) {
    setSearchData((prev) => {
      return {
        ...prev,
        year: enteredYear,
      };
    });
  }

  function typeChangeHandler(enteredType) {
    setSearchData((prev) => {
      return {
        ...prev,
        type: enteredType,
      };
    });
  }

  function onSearchHandler() {
    searchMovies(searchData, setMovies);
    navigate("/search");
  }

  return (
    <div className="detail-search">
      <Input
        placeholder="영화이름 입력"
        onChange={(e) => titleChangeHandler(e.target.value)}
      />

      {isValidDirectInput && (
        <Input
          placeholder="직접 입력"
          onChange={(e) => yearChangeHandler(e.target.value)}
        />
      )}

      {!isValidDirectInput && (
        <Select
          placeholder="Year"
          options={YearArray}
          onChangeOption={yearChangeHandler}
        />
      )}

      <Select
        placeholder="Type"
        options={TypeArray}
        onChangeOption={typeChangeHandler}
      />
      <Button
        className="btn regular pink"
        text="Search"
        onClick={onSearchHandler}
      />
    </div>
  );
};

export default DetailSearch;
