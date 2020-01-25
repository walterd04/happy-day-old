export interface Colors {
  primary: string;
  secondary: string;
  tertiary: string;
  quarternary: string;
  black: string;
  white: string;
  darkGray: string;
  lightGray: string;
  blue: string;
  green: string;
  red: string;
}

export interface Typography {
  fontFamily: string;
  color: string;
}

export interface Breakpoints {
  large: number;
  medium: number;
  small: number;
}

export interface Mode {
  light: boolean;
  dark: boolean;
}

export interface Theme {
  colors: Colors;
  typography: Typography;
  breakpoints: Breakpoints;
  mode: Mode;
}
