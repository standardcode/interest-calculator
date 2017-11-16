import React from "react";
import {render} from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import configureStore from "./store";

injectTapEventPlugin();

const initialState = {
  criteria: {
    amount: 0,
    rate: 0
  },
  results: {
    interest: 0
  }
};

const store = configureStore(initialState);

function renderRoot() {
  const Root = require("./Root").default;
  render(<Root store={store}/>, document.getElementById("app"));
}

renderRoot();

if (module.hot) {
  module.hot.accept(["./Root", "./reducers"], renderRoot);
}
