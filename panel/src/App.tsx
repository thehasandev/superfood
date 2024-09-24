import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import Container from "./components/Container";
function App() {
  return (
    <Container>
      <RouterProvider router={routes}></RouterProvider>
    </Container>
  );
}

export default App;
