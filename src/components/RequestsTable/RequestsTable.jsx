import "./RequestsTable.css";

import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import StatusFlag from "../StatusFlag/";

const RequestsTable = ({ requests = [], filter }) => {
  requests = filter ? requests.filter(req => req.status === filter) : requests;
  filter = filter
    ? {
        pending: "PENDING",
        approved: "APPROVED",
        denied: "DENIED"
      }[filter]
    : "ALL";
  return (
    <div className="requests-table">
      <nav>
        <ul>
          <li>
            <NavLink exact to="/requests">
              ALL
            </NavLink>
          </li>
          <li>
            <NavLink to="/requests/pending">PENDING</NavLink>
          </li>
          <li>
            <NavLink to="/requests/approved">APPROVED</NavLink>
          </li>
          <li>
            <NavLink to="/requests/denied">DENIED</NavLink>
          </li>
        </ul>
      </nav>
      <h4>{filter} REQUESTS</h4>
      <table width="100%">
        <colgroup>
          <col width="20%" />
          <col width="60%" />
          <col width="20%" />
        </colgroup>
        <thead>
          <tr>
            <th>DATA</th>
            <th>REASON</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(req => {
            return (
              <tr key={req.id}>
                <td>{req.date}</td>
                <td>{req.reason}</td>
                <td>
                  <StatusFlag status={req.status}>{req.status}</StatusFlag>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

RequestsTable.propTypes = {
  filter: PropTypes.string
};

RequestsTable.defaultProps = {
  filter: ""
};

export default RequestsTable;
