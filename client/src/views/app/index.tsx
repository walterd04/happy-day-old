//@ts-nocheck
import React from "react";
import { render } from "react-dom";
import App from "./App";

import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json";
import history from "./utils/history";

const container = document.getElementById("root");

const onRedirectCallback = (appState: any) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname,
  );
};

render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  container,
);

if (module.hot) {
  module.hot.accept();
}
