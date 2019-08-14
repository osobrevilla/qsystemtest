import "./AttrList.css";

import { NavLink } from "react-router-dom";
import React from "react";

const AttrList = ({ list, schemeId }) => {
  return (
    <div className="attr-list">
      <ul>
        {list.map(attr => {
          return (
            <li key={attr.id}>
              <NavLink to={`/schemes/${attr.schemeId}/${attr.id}`}>
                {attr.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AttrList;
