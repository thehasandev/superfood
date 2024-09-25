import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

import Rootlayouts from "../components/Rootlayouts";
import Error from "../Error";
import CategoryList from "../pages/category/CategoryList";
import AddCategory from "../pages/category/AddCategory";

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
        path: "/categorie/add",
        element: <AddCategory />,
      },
    ],
  },
]);

export default routes;
