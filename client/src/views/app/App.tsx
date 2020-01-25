import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ThemeProvider from "./ThemeProvider";
import { useAuth0 } from "./react-auth0-spa";

const App = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    isInitializing,
  } = useAuth0();

  if (isInitializing) {
    return (
      <div>
        <h1>This is the happy-day app server side rendered loading.</h1>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div>
        {!isAuthenticated && (
          <button onClick={() => loginWithRedirect({})}>Log in</button>
        )}

        {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      </div>
    </ThemeProvider>
  );
};

export default App;
