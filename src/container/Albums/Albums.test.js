import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import Albums from "./Albums";

const mockStore = configureStore([]);
const store = mockStore({
  app: {
    searchText: "Foo",
    albums: [],
    findAlbumDetailsByArtist: jest.fn(),
    albumsDetails: {}
  }
});
jest.mock("../../components/AlbumList/AlbumList", () => "div");
jest.mock("../../components/AlbumDetails/AlbumDetails", () => "div");

it("renders without crashing", () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Albums />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
