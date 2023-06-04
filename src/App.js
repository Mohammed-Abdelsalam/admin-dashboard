import React, { useEffect } from "react";

// MUI
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import SignIn from "./scenes/signin";
import Profile from "./scenes/profile";
import DashboardLayout from "./scenes/container";
import { Route, Routes, useNavigate } from "react-router-dom";

let mount = false;
function App() {
  const [theme, colorMode] = useMode();
  const navigate = useNavigate();
  let keys = Object.keys(localStorage);
  let isAdmin = localStorage.getItem("isAdmin");
  let isUser = localStorage.getItem("isUser");

  useEffect(() => {
    mount = true;
    if (!isUser && !isAdmin) {
      navigate("/");
      console.log(!!keys);
      console.log("no user // no admin");
    } else if (isAdmin) {
      navigate("/dashboardlayout");
      console.log("admin");
    } else if (isUser) {
      navigate("/Profile");
      console.log("user");
    }
  }, [isUser, isAdmin]);

  if (!mount) {
    return;   
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {isUser && <Profile />}
        {keys.length === 0 && <SignIn />}
        {isAdmin && <DashboardLayout />}
        {/* <DashboardLayout /> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
