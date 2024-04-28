import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home";
import AllItems from "../Pages/AllItems";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddItem from "../Pages/AddItem";
import PrivateRoute from "./PrivateRoute";
import { baseURL } from "../utility/base_url";
import ItemDetails from "../Pages/ItemDetails";
import MyList from "../Pages/MyList";
import UpdateItem from "../Pages/UpdateItem";

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
        path: "/craftItems/:id",
        element: (
          <PrivateRoute>
            <ItemDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`${baseURL}/crafts/${params.id}`),
      },
      {
        path: "/addItem",
        element: (
          <PrivateRoute>
            <AddItem />
          </PrivateRoute>
        ),
      },
      {
        path: "/myList",
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
        loader: () => fetch(`${baseURL}/crafts`),
      },
      {
        path: "/updateItem/:id",
        element: (
          <PrivateRoute>
            <UpdateItem />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`${baseURL}/crafts/${params.id}`),
      },
    ],
  },
]);

export default router;
