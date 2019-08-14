import "./AttributeEditor.css";

import { Route, Switch as Router, withRouter } from "react-router-dom";

import Loadable from "react-loadable";
import Loading from "../Loading";
import React from "react";

const AttributeEdit = Loadable({
  loader: () => import("./AttributeEdit"),
  loading: Loading
});

const AttributePreview = Loadable({
  loader: () => import("./AttributePreview"),
  loading: Loading
});

const AttributeEditor = ({ attrs }) => {
  const { id, schemeId } = attrs;
  return (
    <div className="attribute-editor">
      <div className="attribute-editor-inside">
        <Router>
          <Route
            exact
            path={`/schemes/:${schemeId}/:${id}`}
            render={() => <AttributePreview {...attrs} />}
          />
          <Route
            exact
            path={`/schemes/:${schemeId}/:${id}/edit`}
            render={() => <AttributeEdit {...attrs} />}
          />
        </Router>
      </div>
    </div>
  );
};

export default withRouter(AttributeEditor);
