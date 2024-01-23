import React, { useState } from "react";
import Select from "../Common/Select";
import "./Sort.scss";

const Sort = ({ onSortOption }) => {
  const optionArray = [
    {
      value: "gallery",
      text: "갤러리보기",
    },
    {
      value: "list",
      text: "리스트보기",
    },
    {
      value: "card",
      text: "카드보기",
    },
  ];
  const handleSelect = (selectedOption) => {
    onSortOption(selectedOption);
  };
  return (
    <div className="align right sort">
      <Select placeholder="선택하세요" options={optionArray} onSelectOption={handleSelect} />
    </div>
  );
};

export default Sort;
