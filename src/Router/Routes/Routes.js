import { createBrowserRouter } from "react-router-dom";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home/Home";
import Main from "../../pages/layout/Main";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
  ]);

  export default router;