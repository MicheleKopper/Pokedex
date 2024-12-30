import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Home } from "../../pages/Home";
import { Details } from "../../pages/Details";


const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/details",
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
