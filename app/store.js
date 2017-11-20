import {createStore} from "redux";
import reducer from "./reducer";

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  if (module.hot) {
    module.hot.accept("./reducer", () => {
      const nextReducer = require("./reducer").default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
