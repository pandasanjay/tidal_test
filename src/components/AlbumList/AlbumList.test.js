import React from "react";
import { render } from "@testing-library/react";
import AlbumList from "./AlbumList";
describe("AlbumDetails connected component ", () => {
  it("should render and check the snapshot", () => {
    const stubLists = [
      {
        id: "100",
        title: "foo",
        cover: "https://api.deezer.com/album/99754012/image"
      }
    ];
    const { asFragment } = render(<AlbumList lists={stubLists} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
