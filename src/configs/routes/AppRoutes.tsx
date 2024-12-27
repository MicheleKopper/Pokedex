import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Home } from "../../pages/Home";
import { Details } from "@mui/icons-material";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/details/:id",
    element: <Details />,
  },
  {
    path: "/",
    element: <Navigate to={"/home"} />,
  },
  {
    path: "*",
    element: <Navigate to="/home" />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
