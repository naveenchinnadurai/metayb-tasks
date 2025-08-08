import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00b3ba",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h6: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
      letterSpacing: "5px",
    },
    body1: {
      fontSize: 14,
    },
  },
});

export default theme;
