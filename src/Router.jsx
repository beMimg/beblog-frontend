import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "./context/authProvider";

// Layout
import RootLayout from "./layouts/RootLayout";

// Pages
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import AuthenticatedOnly from "./pages/AuthenticatedOnly";

const Routes = () => {
  const { token } = useAuth();

  const routesForPublic = [
    {
      path: "/about-us",
      element: <AboutUs />,
    },
  ];

  const routesForAuthenticatedOnly = [
    {
      path: "/authenticated-only",
      element: <AuthenticatedOnly />,
    },
  ];

  const routesForNotAuthenticatedOnly = [
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    { path: "/login", element: <Login /> },
  ];

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...(token ? routesForAuthenticatedOnly : []),
        ...routesForPublic,
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
