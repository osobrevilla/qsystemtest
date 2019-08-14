import "./TextArea.css";

import React from "react";

const TextArea = ({ className, ...props }) => (
  <textarea
    className={`field-textarea ${className ? " " + className : ""}`}
    {...props}
  />
);
export default TextArea;
