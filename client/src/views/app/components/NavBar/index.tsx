import React, { useEffect } from "react";
import { useTheme, createUseStyles } from "react-jss";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { useAuth0 } from "../../react-auth0-spa";
import { Theme } from "../../../../types";

const useStyles = createUseStyles((theme: Theme) => ({
  root: {
    width: "100%",
    "& nav": {
      padding: "5px 5px",
      background: "transparent",
      color: theme.colors.black,
      minWidth: "100%",
    },
    "& button": {
      border: "none",
      background: theme.colors.primary,
      color: theme.colors.white,
      fontWeight: 100,
      padding: "10px 20px",
      textTransform: "uppercase",
      borderRadius: "6px",
      display: "inline-block",
      transition: "all 0.2s ease 0s",
      "&:hover": {
        color: theme.colors.primary,
        fontWeight: 700,
        letterSpacing: "1px",
        background: "none",
        "-webkit-box-shadow": "0px 5px 40px -10px",
        "-oz-box-shadow": "0px 5px 40px -10px",
        transition: "all 0.2s ease 0s",
      },
    },
  },
  menu: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputContainer: {
    marginLeft: "20px",
    position: "relative",
    "& label": {
      position: "absolute",
      top: "-12px",
      left: "0px",
      fontSize: "12px",
      color: theme.colors.black,
      transition: "all 0.5s ease-in-out",
    },
    "& input": {
      border: 0,
      borderBottom: `1px solid ${theme.colors.darkGray}`,
      background: "transparent",
      width: "100%",
      padding: "8px 0 5px 0",
      fontSize: "16px",
      color: theme.colors.black,
      "&:focus": {
        border: "none",
        outline: "none",
        borderBottom: `1px solid ${theme.colors.primary}`,
      },
    },
  },
  logo: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    fontSize: "24px",
    fontWeight: "bold",
    "& a": {
      color: "inherit",
      textDecoration: "none",
    },
  },
  profileLink: {
    display: "flex",
    alignContent: "center",
    color: "inherit",
    textDecoration: "none",
    fontSize: "14px",
    "& img": {
      marginRight: "10px",
      width: "40px",
      height: "40px",
      borderTopLeftRadius: "50% 50%",
      borderTopRightRadius: "50% 50%",
      borderBottomRightRadius: "50% 50%",
      borderBottomLeftRadius: "50% 50%",
    },
  },
  cta: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingRight: "30px",
  },
  isAuthenticated: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "18px",
    "& button": {
      marginRight: "10px",
      "& a": {
        color: "inherit",
        textDecoration: "none",
      },
    },
  },
  notAuthenticated: {
    display: "flex",
    alignItems: "center",
    fontSize: "18px",
    "& a": {
      marginLeft: "10px",
      color: "inherit",
      textDecoration: "none",
    },
  },
}));

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const theme = useTheme();
  const classes: Record<string, any> = useStyles({ theme });
  return (
    <div className={classes.root}>
      <nav>
        <ul className={classes.menu}>
          <li className={classes.logo}>
            <Router>
              <Link to="/">Happy Day</Link>
            </Router>
            <div className={classes.inputContainer}>
              <label>Search</label>
              <input type="text" />
            </div>
          </li>
          <li className={classes.cta}>
            {isAuthenticated && user ? (
              <div className={classes.isAuthenticated}>
                <Router>
                  <Link className={classes.profileLink} to="/user">
                    <img
                      src={user.picture}
                      alt=""
                      title={user.name + " profile"}
                    />
                  </Link>
                  <button>
                    <Link to="/settings">Settings</Link>
                  </button>
                </Router>
                <button onClick={() => logout()}>Logout</button>
              </div>
            ) : (
              <div className={classes.notAuthenticated}>
                <button onClick={() => loginWithRedirect()}>Login</button>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
