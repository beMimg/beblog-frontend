import { Link, Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col  font-inter ">
      <header className="themeModalButton the sticky top-0 z-20 flex w-full animate-fade-in justify-center border-b-2 border-blue-500 p-4">
        <Nav />
      </header>
      <div className=" flex flex-1  flex-col  items-center">
        <Outlet />
      </div>
    </div>
  );
}
