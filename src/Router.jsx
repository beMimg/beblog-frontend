import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "./context/authProvider";

// Layout
import RootLayout from "./layouts/RootLayout";

// Pages
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";

const Routes = () => {
  const { token } = useAuth();

  const routesForPublic = [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/about-us",
          element: <AboutUs />,
        },
      ],
    },
  ];

  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <RootLayout />,
    },
  ];

  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/sign-up",
          element: <SignUp />,
        },
        { path: "/login", element: <Login /> },
      ],
    },
  ];

  const router = createBrowserRouter([
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
    ...routesForPublic,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
