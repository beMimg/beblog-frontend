import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../context/authProvider";

// Layout
import RootLayout from "./layouts/RootLayout";

// Pages
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const Routes = () => {
  const { token } = useAuth();

  const routesForPublic = [
    {
      path: "/about",
      // element: <Layout />,
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
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
