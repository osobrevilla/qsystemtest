import {
  cleanup,
  findByText,
  fireEvent,
  getByText,
  logDOM,
  render,
  wait,
  waitForDomChange
} from "@testing-library/react";

import React from "react";
import RequestTable from "../RequestsTable";
import { MemoryRouter as Router } from "react-router-dom";
import fetch from "node-fetch";
import renderer from "react-test-renderer";

afterEach(cleanup);

const filterChangeFn = filter => {
  return async () => {
    const url = "https://5d4f8ba923144c001417dd5b.mockapi.io/api/v1/requests";

    const requests = await fetch(url)
      .then(response => response.json())
      .then(json => json.data);

    const { container } = render(
      <Router initialEntries={[`/requests/${filter.toLowerCase()}`]}>
        <RequestTable requests={requests} />
      </Router>
    );

    const activeLink = container.querySelector("nav a.active");
    const activeText = activeLink.textContent;

    expect(activeText).toMatch(new RegExp(filter, "i"));
  };
};

["pending", "approved", "denied"].forEach(filter =>
  test("Filter set as: " + filter, filterChangeFn(filter))
);
