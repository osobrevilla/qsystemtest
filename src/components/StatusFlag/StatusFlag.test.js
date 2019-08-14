import React from "react";
import StatusFlag from "../StatusFlag";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
test("Flag change color when pass a status prop", () => {
  const component = <StatusFlag status="denied">denied</StatusFlag>;
  const { getByText } = render(component);
  //const comp = renderer.create(component);
  expect(getByText(/denied/i)).toBeTruthy();
});
