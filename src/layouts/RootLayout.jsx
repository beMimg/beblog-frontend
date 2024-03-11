import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/authProvider";
import Nav from "../components/Nav";

export default function Layout() {
  const { token } = useAuth();

  return (
    <div className="flex min-h-screen flex-col  font-inter">
      <header className="themeModalButton  sticky top-0 z-20 border-b-2 border-blue-500 p-4">
        <Nav />
      </header>
      <Outlet />
    </div>
  );
}
