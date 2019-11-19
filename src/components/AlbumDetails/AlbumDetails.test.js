import React from "react";
import { render } from "@testing-library/react";
import AlbumDetails from "./AlbumDetails";

jest.mock("../Tracks/Tracks", () => "div");
describe("AlbumDetails connected component ", () => {
  it("should render and check the snapshot", () => {
    const stubDetails = {
      cover: "https://api.deezer.com/album/99754012/image",
      title: "foo",
      tracks: {
        data: []
      },
      release_date: "01-02-2019"
    };
    const { asFragment } = render(<AlbumDetails details={stubDetails} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
