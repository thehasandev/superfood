import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

import Rootlayouts from "../components/Rootlayouts";
import Error from "../Error";
import CategoryList from "../pages/category/CategoryList";
import ProductList from "../pages/product/ProductList";
import ProductAdd from "../pages/product/ProductAdd";
import CategoryAdd from "../pages/category/CategoryAdd";
import CategoryEdit from "../pages/category/CategoryEdit";
import ProductEdit from "../pages/product/ProductEdit";
import Login from "../pages/login/Login";

const routes = createBrowserRouter([
  {
    element: <Rootlayouts />,
    errorElement: <Error />,
    children: [
      {
        path: "/home",
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
      {
        path: "/products/:id",
        element: <ProductEdit />,
      },
    ],
  },
  {
    path: "/",
    element: <Login />,
  },
]);

export default routes;
