import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Rootlayouts from "../components/Rootlayouts";
import Error from "../Error";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayouts />,
    errorElement:<Error/>,
    children: [
      {
        path: "contacts/:contactId",
        element: <Home />,
      },
      {
        path: "contacts/:contactId",
        element: <About />,
      },
    ],
  },
]);

export default routes;
