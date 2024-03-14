import Outlet from "react-router-dom";
import Nav from "../components/Nav";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col  font-inter">
      <header className="themeModalButton the sticky top-0 z-20 animate-fade-in border-b-2 border-blue-500 p-4">
        <Nav />
      </header>
      <Outlet />
    </div>
  );
}
