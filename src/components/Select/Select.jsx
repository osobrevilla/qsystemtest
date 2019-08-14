import "./Select.css";

import React from "react";

export const Select = ({ className, children, ...props }) => (
  <span className="field-select-after">
    <select
      className={`field-select${className ? " " + className : ""}`}
      {...props}
    >
      {children}
    </select>
  </span>
);

export const Option = ({ className, children, ...props }) => (
  <option
    className={`field-select-option${className ? " " + className : ""}`}
    {...props}
  >
    {children}
  </option>
);

Select.Option = Option;

export default Select;
