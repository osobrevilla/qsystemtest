import "./Empty.css";

import React from "react";

export default ({ center = false, children }) => (
  <div className={`empty${center ? " empty-center" : ""}`}>{children}</div>
);
