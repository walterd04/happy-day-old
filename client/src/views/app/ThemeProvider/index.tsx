import React from "react";
import { ThemeProvider as JSSProvider, createUseStyles } from "react-jss";
import { Colors, Typography, Breakpoints, Mode, Theme } from "../../../types";

interface Props {
  children: React.ReactChild;
}

const colors: Colors = {
  primary: "#CD533B",
  secondary: "#F7567C",
  tertiary: "#713E5A",
  quarternary: "#226F54",
  green: "#018E42",
  white: "#F6F4D2",
  lightGray: "#D9D9D9",
  darkGray: "#595959",
  black: "#080705",
  red: "#DA2C38",
  blue: "#01FDF6",
};

const typography: Typography = {
  fontFamily: "'FranklinGothic URW Comp', Helvetica, sans-serif",
  color: "#000",
};

const breakpoints: Breakpoints = {
  large: 1100,
  medium: 786,
  small: 512,
};

const mode: Mode = {
  light: true,
  dark: false,
};

const theme: Theme = {
  colors,
  typography,
  breakpoints,
  mode,
};

const useStyles = createUseStyles({
  "@global": {
    "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite": {
      margin: "0",
      padding: "0",
      border: "0",
      font: "inherit",
      verticalAlign: "baseline",
    },
    "article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section": {
      display: "block",
    },
    "ol, ul": {
      listStyle: "none",
    },
    "html, body": {
      width: "100%",
      minHeight: "100%",
      fontFamily: theme.typography.fontFamily || "sans-serif",
      fontWeight: "normal",
      color: theme.colors.black,
      backgroundColor: theme.colors.white,
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
    },
    html: {
      boxSizing: "border-box",
      background: "transparent",
      fontSize: "100%",
    },
    "*, *:before, *:after": {
      boxSizing: "inherit",
    },
    button: {
      display: "inline-block",
      "-webkit-appearance": "none",
      "-moz-appearance": "none",
      userSelect: "none",
      textDecoration: "none",
      fontFamily: "inherit",
      fontSize: "inherit",
      color: "inherit",
      cursor: "pointer",
      border: "none",
      backgroundColor: "transparent",
      borderColor: "transparent",
      padding: "0",
      margin: "0",
      "&:disabled": {
        opacity: 0.6,
        cursor: "not-allowed",
      },
    },
    buttonPrimary: {
      display: "block",
      backgroundColor: theme.colors.primary,
      color: theme.colors.darkGray,
      border: "1px solid theme.colors.primary",
      borderRadius: "50px",
    },
  },
});

const ThemeProvider = ({ children }: Props) => {
  useStyles();
  return <JSSProvider theme={theme}>{children}</JSSProvider>;
};

export default ThemeProvider;
