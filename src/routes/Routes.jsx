import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home";
import AllItems from "../Pages/AllItems";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddItem from "../Pages/AddItem";
import PrivateRoute from "./PrivateRoute";
import { baseURL } from "../utility/base_url";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/allItems",
        element: <AllItems />,
        loader: () => fetch(`${baseURL}/crafts`),
      },
      {
        path: "/addItem",
        element: (
          <PrivateRoute>
            <AddItem />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
