import "./Review.css";

import EmptyContent from "../../components/EmptyContent";
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
            <EmptyContent>Nada que mostrar</EmptyContent>
          </div>
        </div>
      }
    />
  );
};

export default ReviewPage;
