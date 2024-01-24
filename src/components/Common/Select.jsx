import React, { forwardRef } from "react";
import "./Select.scss";

const Select = forwardRef(function Select(
  { placeholder, options, ...props },
  ref
) {
  return (
    //<div className="align right sort">
    <select ref={ref} className="select" {...props}>
      {placeholder && <option hidden>{placeholder}</option>}
      {options.map(({ value, text }) => (
        <option key={value} value={value}>
          {text}
        </option>
      ))}
    </select>
    // </div>
  );
});

export default Select;
