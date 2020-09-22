import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

const mainBlack = "#000";
const mainWhite = "#fff";
const mainRed = "#e50914";
const blue = "#757ce8";
const orange = "#ffa00a";
// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    common: {
      black: mainBlack,
      white: mainWhite,
      blue: blue,
      red: mainRed,
      orange: orange,
    },
    primary: {
      main: mainBlack,
    },
    secondary: {
      main: mainWhite,
    },
    info: {
      main: blue,
    },
    error: {
      main: orange,
    },
  },
  typography: {
    h1: {
      color: mainWhite,
      fontSize: "3rem",
      fontWeight: 500,
      [breakpoints.down("sm")]: {
        fontSize: "2.5rem",
      },
      [breakpoints.down("xs")]: {
        fontSize: "1.75rem",
      },
    },
    h2: {
      color: mainWhite,
      fontSize: "1.75rem",
      fontWeight: 400,
      [breakpoints.down("sm")]: {
        fontSize: "1.5rem",
      },
      [breakpoints.down("xs")]: {
        fontSize: "1.25rem",
      },
    },
    h3: {
      color: mainWhite,
      fontSize: "1.5rem",
      fontWeight: 300,
      [breakpoints.down("sm")]: {
        fontSize: "1.25rem",
      },
      [breakpoints.down("xs")]: {
        fontSize: "1rem",
      },
    },
    a: {
      color: `${mainWhite} !important`,
    },
    body1: {
      color: mainWhite,
      fontSize: "22px",
      [breakpoints.down("sm")]: {
        fontSize: "20px",
      },
      [breakpoints.down("xs")]: {
        fontSize: "18px",
      },
    },
    button: {
      background: mainRed,
      letterSpacing: ".1em",
      "&.MuiButton-text": {
        padding: " 6px 16px !important",
      },

      "&.MuiButton-root:hover": {
        backgroundColor: `#fd2b36 !important`,
      },
      "& .MuiButton-label": {
        color: `${mainWhite} !important`,
      },
    },
  },
});

export default theme;
