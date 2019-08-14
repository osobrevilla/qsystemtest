import "./LoadingScreen.css";

import Loading from "../Loading";
import React from "react";

const LoadingScreen = (center = true) => {
  return (
    <div className={`loadingscreen`}>
      <Loading />
    </div>
  );
};

export default LoadingScreen;
