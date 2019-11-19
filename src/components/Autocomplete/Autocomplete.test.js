import React from "react";
import { render } from "@testing-library/react";
import Autocomplete from "./Autocomplete";
describe("AlbumDetails connected component ", () => {
  it("should render and check the snapshot", () => {
    const stubLists = [
      {
        name: "foo"
      }
    ];
    const { asFragment } = render(<Autocomplete lists={stubLists} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
