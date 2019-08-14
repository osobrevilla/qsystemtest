import "./Review.css";

import Empty from "../../components/Empty";
import Header from "../../components/Header";
import Layout from "../../layouts/SingleLayout";
import React from "react";

const ReviewPage = () => {
  return (
    <Layout
      header={<Header />}
      content={
        <div className="page page-manage-data container">
          <h2 className="page-title">Review</h2>
          <div className="page-content">
            <Empty>Nada que mostrar</Empty>
          </div>
        </div>
      }
    />
  );
};

export default ReviewPage;
