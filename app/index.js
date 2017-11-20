import React from "react";
import {render} from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import configureStore from "./store";
import reducer from "./reducer";
import {INPUT} from "./components/Criteria/actions";

injectTapEventPlugin();

const initialState = reducer({
  criteria: {
    amount: 1000,
    rate: 5,
    period: 90,
    duration: 4
  }
}, {type: INPUT});

const store = configureStore(initialState);

function renderRoot() {
  const Root = require("./Root").default;
  render(<Root store={store}/>, document.getElementById("app"));
}

renderRoot();

if (module.hot) {
  module.hot.accept(["./Root", "./reducer"], renderRoot);
}
