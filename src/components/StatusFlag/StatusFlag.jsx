import "./StatusFlag.css";

import React from "react";
export default ({ status = "default", children }) => (
  <span className={`status-flag status-flag-${status}`}>{children}</span>
);
