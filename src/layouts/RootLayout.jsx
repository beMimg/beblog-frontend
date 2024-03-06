import { useState } from "react";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login";

export default function Layout() {
  const [token, setToken] = useState();
  console.log(token);
  return (
    <div>
      <header>
        <p>Root Layout</p>
        {!token ? <Login setToken={setToken} /> : <p>You are logged in</p>}
      </header>
      <Outlet />
    </div>
  );
}
