import React from "react"
import ReactDOM from "react-dom/client"

import { BrowserRouter } from "react-router-dom"

import { ThemeProvider } from "@mui/material"
import { getMainTheme } from "./themes"

import App from "./App"

const theme = getMainTheme()

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)