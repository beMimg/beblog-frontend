import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/authProvider";
import Nav from "../components/Nav";
export default function Layout() {
  const { token } = useAuth();
  console.log(token);

  return (
    <div className="font-inter min-h-screen">
      <header className="p-4 bg-slate-400">
        <Nav />
      </header>
      <Outlet />
    </div>
  );
}
