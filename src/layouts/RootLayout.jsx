import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/authProvider";
export default function Layout() {
  const { token } = useAuth();
  console.log(token);
  return (
    <div>
      <header>
        <p>Root Layout</p>
      </header>
      <Outlet />
    </div>
  );
}
