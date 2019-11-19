import React from "react";
import { render } from "@testing-library/react";
import Row from "./Row";
describe("Row Layout component ", () => {
  it("should render and check the snapshot", () => {
    const { asFragment } = render(<Row />);
    expect(asFragment()).toMatchSnapshot();
  });
});
