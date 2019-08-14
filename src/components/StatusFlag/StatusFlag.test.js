import { cleanup, render } from "@testing-library/react";

import React from "react";
import StatusFlag from "../StatusFlag";
import renderer from "react-test-renderer";

afterEach(cleanup);

test("StatusFlag change color when pass a 'status' prop", () => {
  const status = "denied";
  const component = <StatusFlag status={status}>denied</StatusFlag>;
  const { getByText, container } = render(component);
  const node = container.firstChild;
  expect(getByText(/denied/i)).toBeTruthy();
  expect(node.classList.contains(`status-flag-${status}`)).toBe(true);
});
