import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

import Rootlayouts from "../components/Rootlayouts";
import Error from "../Error";
import CategoryList from "../pages/CategoryList";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayouts />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category-list",
        element: <CategoryList />,
      },
    ],
  },
]);

export default routes;
