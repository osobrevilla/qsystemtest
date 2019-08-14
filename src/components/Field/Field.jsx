import "./Field.css";

import React from "react";

const Field = ({ title, children }) => {
  return (
    <dl className="field">
      {title && <dt>{title}</dt>}
      <dd>{children}</dd>
    </dl>
  );
};
export default Field;
