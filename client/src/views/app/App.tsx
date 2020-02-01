import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createUseStyles, useTheme } from "react-jss";

import ThemeProvider from "./ThemeProvider";
import { useAuth0 } from "./react-auth0-spa";
import { Theme } from "../../types";

import NavBar from "./components/NavBar";
import LandingPage from "./views/LandingPage";
import Home from "./views/Home";
import UserProfile from "./views/UserProfile";

const useStyles = createUseStyles((theme: Theme) => {});

const App = () => {
  const theme = useTheme();
  const classes: Record<string, any> = useStyles({ theme });
  const { isAuthenticated } = useAuth0();

  return (
    <ThemeProvider>
      <>
        <NavBar />
        <Router>
          {!isAuthenticated ? (
            <Switch>
              <Route exact path="/" component={LandingPage} />
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/user" component={UserProfile} />
            </Switch>
          )}
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
