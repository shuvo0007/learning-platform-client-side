import { createBrowserRouter } from "react-router-dom";
import Courses from "../Layouts/Courses/Courses";
import Home from "../Layouts/Home/Home";
import Main from "../Layouts/Main/Main";
import Private from "../Layouts/Private/Private";
import Login from "../Layouts/UserPage/Login";
import Registration from "../Layouts/UserPage/Registration";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      
    ],
    loader: () => fetch(`http://localhost:5000/category`),
  },
  {
    path: "/courses",
    element: <Main></Main>,
    children: [
      {
        path: "/courses/:id",
        element: <Courses></Courses>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/courses/private/:id",
        element: (
          <Private>
            <Courses></Courses>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
  
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/registration",
    element: <Registration></Registration>,
  },
]);
