import Icon from "./Icon";
import React from "react";
import pencil from "./svgs/icon-pencil.svg";

export default ({ fill = "black", size = {} }) => {
  let style = { display: "inline-block", width: 12, height: 12, ...size };
  return (
    <Icon>
      <img src={pencil} style={style} />
    </Icon>
  );
};
