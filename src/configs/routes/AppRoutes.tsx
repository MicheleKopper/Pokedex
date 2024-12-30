import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Home } from "../../pages/Home";
import { Pokedex } from "../../pages/Pokedex";


const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/pokedex",
    element: <Pokedex />,
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
