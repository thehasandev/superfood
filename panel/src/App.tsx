import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import Container from "./components/Container";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <Container>
      <AuthProvider>
        <RouterProvider router={routes}></RouterProvider>
      </AuthProvider>
    </Container>
  );
}

export default App;
