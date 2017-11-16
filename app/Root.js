import React from "react";
import {Provider} from "react-redux";
import {MuiThemeProvider, createMuiTheme} from "material-ui/styles";
import App from "./components/App/App";

const Root = ({store}) => (
  <Provider store={store}>
    <MuiThemeProvider theme={createMuiTheme()}>
      <App/>
    </MuiThemeProvider>
  </Provider>
);

export default Root;
