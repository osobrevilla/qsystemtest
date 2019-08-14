import "./Button.css";

import React from "react";

const Button = ({
  className = "btn-primary",
  type = "button",
  children,
  ...props
}) => {
  const Type = type;
  return (
    <Type className={`btn ${className}`} {...props}>
      {children}
    </Type>
  );
};
export default Button;
