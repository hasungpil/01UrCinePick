import React from "react";
import "./Select.scss";

const Select = ({ placeholder, options = {}, onSelectOption }) => {
  const handleOption = (e) => {
    const selectedValue = e.target.value;
    onSelectOption(selectedValue);
  };
  return (
    <>
      <select className="select" onChange={handleOption}>
        {placeholder && <option hidden>{placeholder}</option>}
        {options.map((optionItem, index) => (
          <option key={index} value={optionItem.value}>
            {optionItem.text}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
