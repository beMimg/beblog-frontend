import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./context/authProvider.jsx";
import Routes from "./Router.jsx";
import ThemeProvider from "./context/themeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
);
