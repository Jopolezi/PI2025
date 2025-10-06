import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ProtectedRoute from "./protectedRoute";
import PublicRoute from "./publicRoute";
import Home from "../pages/home/Home";
import NotFound from "../pages/notfound/NotFound";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import Forgot from "../pages/auth/forgot/Forgot";
import Publish from "../pages/publish/Publish";
import Feed from "../pages/feed/Feed";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <PublicRoute>
            <Home />
          </PublicRoute>
        ),
      },
      { path: "*", element: <NotFound /> },
      {
        path: "publicar",
        element: (
          <Publish />
        ),
      },
      {
        path: "feed",
        element: <Feed />,
      },
    ],
  },
  {
    path: "entrar",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "cadastrar",
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },
  {
    path: "recuperar",
    element: (
      <PublicRoute>
        <Forgot />
      </PublicRoute>
    ),
  },
]);

export default router;
