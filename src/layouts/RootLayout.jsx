import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/authProvider";
import Nav from "../components/Nav";
import { useUser } from "../context/userProvider";

export default function Layout() {
  const { user } = useUser();
  console.log(user);

  return (
    <div className="flex min-h-screen flex-col  font-inter">
      <header className="themeModalButton the sticky top-0 z-20 animate-fade-in border-b-2 border-blue-500 p-4">
        <Nav />
      </header>
      <Outlet />
    </div>
  );
}
