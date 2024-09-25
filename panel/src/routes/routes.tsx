import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

import Rootlayouts from "../components/Rootlayouts";
import Error from "../Error";
import CategoryList from "../pages/category/CategoryList";
import AddCategory from "../pages/category/AddCategory";
import EditCategory from "../pages/category/EditCategory";

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
        path: "/categories",
        element: <CategoryList />,
      },
      {
        path: "/category/add",
        element: <AddCategory />,
      },
      {
        path: "/categories/:id",
        element: <EditCategory />,
      },
    ],
  },
]);

export default routes;
