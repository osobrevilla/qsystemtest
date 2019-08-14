import "./Header.css";

import Nav from "../Nav";
import React from "react";

export default () => (
  <header className="header">
    <div className="container header-inside">
      <div className="header-title">DATA GATE</div>
      <Nav />
    </div>
  </header>
);
