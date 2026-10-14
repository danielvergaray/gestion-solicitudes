import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    path: "/panel",
    element: <div>Pendiente</div>,
  },
  {
    path: "/gestion",
    element: <div>Pendiente</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
