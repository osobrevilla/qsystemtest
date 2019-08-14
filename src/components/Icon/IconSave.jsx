import Icon from "./Icon";
import React from "react";
import save from "./svgs/icon-save.svg";

export default ({ fill = "black", size = {} }) => {
  let style = { display: "inline-block", width: 12, height: 12, ...size };
  return (
    <Icon>
      <img src={save} style={style} />
    </Icon>
  );
};
