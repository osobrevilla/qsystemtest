import "./SchemeEditor.css";

import AttrList from "../AttrList";
import AttributeEditor from "../AttributeEditor";
import Empty from "../Empty";
import Loading from "../Loading";
import React from "react";
import { connect } from "react-redux";
import { loadScheme } from "../../actions";
import { withRouter } from "react-router-dom";

class SchemeEditor extends React.Component {
  componentDidMount() {
    if (!this.props.scheme) this.props.loadScheme(this.props.schemeId);
  }
  render() {
    const { scheme, attrs, list, schemeId, attrId } = this.props;

    if (!scheme) return <Loading />;

    return (
      <div className="scheme-editor">
        <div className="scheme-editor-list">
          <AttrList list={list} schemeId={schemeId} />
        </div>
        <div className="scheme-editor-content">
          {attrs[+attrId] ? (
            <AttributeEditor schemeId={schemeId} attrs={attrs[+attrId]} />
          ) : (
            <Empty center>Seleccione un attributo</Empty>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ schemeEditor }, { schemeId }) => {
  const { schemes, attrs } = schemeEditor;
  const scheme = schemes[schemeId];
  return {
    attrs,
    scheme,
    list: scheme ? scheme.attrs.map(id => attrs[id]) : []
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { loadScheme }
  )(SchemeEditor)
);
