import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/authProvider";
import Nav from "../components/Nav";

export default function Layout() {
  const { token } = useAuth();

  return (
    <div className="flex min-h-screen flex-col font-inter">
      <header className=" p-4">
        <Nav />
      </header>
      <Outlet />
    </div>
  );
}
