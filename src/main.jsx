import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import GeneralContextProvider from "./context/GeneralContextProvider";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Panel from "./pages/Panel.jsx";
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
    element: <Panel />,
  },
  {
    path: "/gestion",
    element: <div>Pendiente</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GeneralContextProvider>
      <RouterProvider router={router} />
    </GeneralContextProvider>
  </StrictMode>,
);
