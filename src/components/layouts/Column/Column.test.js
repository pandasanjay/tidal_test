import React from "react";
import { render } from "@testing-library/react";
import Column from "./Column";
describe("Column Layout component ", () => {
  it("should render and check the snapshot", () => {
    const { asFragment } = render(<Column />);
    expect(asFragment()).toMatchSnapshot();
  });
});
