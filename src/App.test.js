import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import App from "./App";

const mockStore = configureStore([]);
const store = mockStore({
  app: {}
});
it("renders without crashing", () => {
  const { asFragment } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
