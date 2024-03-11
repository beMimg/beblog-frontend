import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./context/authProvider.jsx";
import Routes from "./Router.jsx";
import ThemeProvider from "./context/themeProvider.jsx";
import UserProvider from "./context/userProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>,
);
