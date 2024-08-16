import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar.jsx";
import HomePage from "./screens/Home.jsx";
import DashboardPage from "./screens/Dashboard.jsx";
import LibraryPage from "./screens/Library.jsx";

import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "../static/theme.js";
import { useState } from "react";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = true;
  const [currentNavItem, setCurrentNavItem] = useState("Home");
  const homeProps = { currentNavItem, setCurrentNavItem };
  const navProps = { currentNavItem, setCurrentNavItem };

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          {/* Nav bar */}

          <NavBar {...navProps} />

          <Routes>
            <Route
              path="/"
              element={
                isAuth ? <HomePage {...homeProps} /> : <Navigate to="/home" />
              }
            />
            <Route
              path="/home"
              element={
                isAuth ? <HomePage {...homeProps} /> : <Navigate to="/home" />
              }
            />
            <Route
              path="/dashboard"
              element={isAuth ? <DashboardPage /> : <Navigate to="/home" />}
            />
            <Route
              path="/library"
              element={isAuth ? <LibraryPage /> : <Navigate to="/home" />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
