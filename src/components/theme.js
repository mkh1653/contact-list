import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "IRANSans",
    htmlFontSize: 18,
    body1: {
      lineHeight: 1.9,
    },
    body2: {
      lineHeight: 1.7,
    },
  },
  palette: {
    mode: "dark",
    text: {
      primary: "#b8b8b8",
    },
  },
});

export default theme;
