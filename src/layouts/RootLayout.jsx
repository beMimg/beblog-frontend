import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/authProvider";
export default function Layout() {
  return (
    <div>
      <header>h</header>
      <Outlet />
    </div>
  );
}
