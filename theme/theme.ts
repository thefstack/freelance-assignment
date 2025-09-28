"use client"

import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#3b6eea" }, // brand blue close to screenshots
    secondary: { main: "#111827" }, // near-black for strong contrast
    background: {
      default: "#f3f4f6",
      paper: "#ffffff",
    },
    text: {
      primary: "#111827",
      secondary: "#4b5563",
    },
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily: ["Inter", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
    h1: { fontWeight: 700, letterSpacing: -0.5 },
    h2: { fontWeight: 700, letterSpacing: -0.25 },
    h3: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiContainer: {
      defaultProps: { maxWidth: "lg" },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          // purely via MUI system; no custom CSS files
        },
      },
    },
  },
})

export default theme
