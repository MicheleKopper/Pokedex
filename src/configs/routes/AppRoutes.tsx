import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Home } from "../../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <Navigate to={"/home"} />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
