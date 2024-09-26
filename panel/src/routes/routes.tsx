import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

import Rootlayouts from "../components/Rootlayouts";
import Error from "../Error";
import CategoryList from "../pages/category/CategoryList";
import ProductList from "../pages/product/ProductList";
import ProductAdd from "../pages/product/ProductAdd";
import CategoryAdd from "../pages/category/CategoryAdd";
import CategoryEdit from "../pages/category/CategoryEdit";

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
        element: <CategoryAdd />,
      },
      {
        path: "/categories/:id",
        element: <CategoryEdit />,
      },
      {
        path: "/products",
        element: <ProductList />,
      },
      {
        path: "/product/add",
        element: <ProductAdd />,
      },
    ],
  },
]);

export default routes;
