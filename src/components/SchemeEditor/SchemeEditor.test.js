import { applyMiddleware, createStore } from "redux";
import {
  cleanup,
  findByText,
  fireEvent,
  getByTestId,
  getByText,
  logDOM,
  render,
  wait,
  waitForDomChange,
  waitForElement
} from "@testing-library/react";

import { Provider } from "react-redux";
import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import SchemeEditor from "../SchemeEditor";
import dataGate from "../../reducers";
import renderer from "react-test-renderer";
import thunk from "redux-thunk";

global.fetch = require("node-fetch");

let store = createStore(dataGate, applyMiddleware(thunk));

afterEach(cleanup);

test("Correctly initial mount of scheme editor", async () => {
  const { container } = render(
    <Provider store={store}>
      <Router initialEntries={[`/schemes/1/`]}>
        <SchemeEditor schemeId="1" />
      </Router>
    </Provider>
  );

  const [attrList, emptyBox] = await waitForElement(
    () => [
      getByText(container, (content, element) => {
        return (
          element.tagName.toLowerCase() === "ul" &&
          element.parentNode.classList.contains("attr-list")
        );
      }),
      getByText(container, "Seleccione un attributo")
    ],
    { container }
  );
  expect(emptyBox.textContent).toMatch(/seleccione un/i);
  expect(attrList.children.length).toBeTruthy();
});
