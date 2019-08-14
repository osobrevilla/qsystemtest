import React from "react";
export default ({ header, content }) => {
  return (
    <div className="s-lyt">
      {header && <div className="s-lyt-header">{header}</div>}
      <div className="s-lyt-main">
        {content && <div className="s-lyt-content">{content}</div>}
      </div>
    </div>
  );
};
