import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import SearchBar from "./SearchBar";

const mockStore = configureStore([]);
const store = mockStore({
  app: {},
  autocomplete: [],
  findAlbumOfArtist: jest.fn()
});
it("renders without crashing", () => {
  const { asFragment } = render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
