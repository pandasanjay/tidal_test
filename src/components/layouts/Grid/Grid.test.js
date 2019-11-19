import React from "react";
import { render } from "@testing-library/react";
import Grid from "./Grid";
describe("Grid Layout component ", () => {
  it("should render and check the snapshot", () => {
    const { asFragment } = render(<Grid />);
    expect(asFragment()).toMatchSnapshot();
  });
});
