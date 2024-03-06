import { createBrowserRouter } from "react-router-dom";

// Layout
import RootLayout from "./layouts/RootLayout";

// Pages
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "sign-up", element: <SignUp /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

export default router;
