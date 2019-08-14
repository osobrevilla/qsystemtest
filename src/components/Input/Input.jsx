import "./Input.css";

import React from "react";

const Input = ({ className, ...props }) => (
  <input
    className={`field-input${className ? " " + className : ""}`}
    {...props}
  />
);

export default Input;
