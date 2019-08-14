import "../page.css";
import "./Requests.css";

import Header from "../../components/Header";
import Layout from "../../layouts/SingleLayout";
import Loading from "../../components/Loading";
import React from "react";
import RequestsTable from "../../components/RequestsTable";
import { connect } from "react-redux";
import { fetchRequests } from "../../actions";
import { withRouter } from "react-router-dom";

class ManagePage extends React.Component {
  componentDidMount() {
    this.props.fetchRequests();
  }

  render() {
    const { requests, fetching } = this.props;
    const { filter } = this.props.match.params;
    return (
      <Layout
        header={<Header />}
        content={
          <div className="page page-request container">
            <h2 className="page-title">Requests</h2>
            <div className="page-content">
              {fetching ? (
                <Loading />
              ) : (
                <RequestsTable requests={requests} filter={filter} />
              )}
            </div>
          </div>
        }
      />
    );
  }
}

const mapStateToProps = ({ requests: { fetching, all } }, props) => {
  return {
    fetching,
    requests: all
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchRequests }
  )(ManagePage)
);
