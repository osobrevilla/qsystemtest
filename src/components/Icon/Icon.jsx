import "./Icon.css";

import React from "react";

const Icon = ({ children, ...props }) => {
  return (
    <i className="icon" style={({width: 12, height: 12})} {...props}>
      {children}
    </i>
  );
};

export default Icon;
