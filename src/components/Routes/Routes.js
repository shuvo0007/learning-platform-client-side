import { createBrowserRouter } from "react-router-dom";
import Cards from "../Layouts/Cards/Cards";
import Main from "../Layouts/Main/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Cards></Cards>,
      },
    ],
  },
]);
