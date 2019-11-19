import React from "react";
import { render } from "@testing-library/react";
import Tracks from "./Tracks";
describe("AlbumDetails connected component ", () => {
  it("should render and check the snapshot", () => {
    const stubLists = [
      {
        title: "foo",
        artist: {
          name: "bar"
        },
        duration: 422
      }
    ];
    const { asFragment } = render(
      <Tracks lists={stubLists} releaseyear="2019" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
