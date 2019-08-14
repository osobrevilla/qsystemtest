import "../page.css";
import "./Manage.css";

import Header from "../../components/Header";
import Layout from "../../layouts/SingleLayout";
import React from "react";
import SchemeEditor from "../../components/SchemeEditor/SchemeEditor";
import { withRouter } from "react-router-dom";

class ManagePage extends React.Component {
  render() {
    const { schemeId, attrId } = this.props.match.params;
    return (
      <Layout
        header={<Header />}
        content={
          <div className="page page-manage container">
            <h2 className="page-title">Manage Data</h2>
            <div className="page-content">
              <SchemeEditor schemeId={schemeId} attrId={attrId} />
            </div>
          </div>
        }
      />
    );
  }
}

export default withRouter(ManagePage);
