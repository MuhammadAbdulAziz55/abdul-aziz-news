import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";
import Category from "../../Pages/Category/Category/Category";
import News from "../../Pages/News/News/News";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import TermsAndCondition from "../../Pages/Other/TermsAndCondition";
import Profile from "../../Pages/Other/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`http://localhost:5000/news`),
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoutes>
            <News />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/term-and-condition",
        element: <TermsAndCondition />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
