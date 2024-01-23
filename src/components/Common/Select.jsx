import React from "react";
import "./Select.scss";

const Select = ({ placeholder, options, onChangeOption }) => {
  return (
    //<div className="align right sort">
    <select className="select" onChange={(e) => onChangeOption(e.target.value)}>
      {placeholder && <option hidden>{placeholder}</option>}
      {options.map(({ value, text }) => (
        <option key={value} value={value}>
          {text}
        </option>
      ))}
    </select>
    // </div>
  );
};

export default Select;
