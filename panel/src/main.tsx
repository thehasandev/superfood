import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { ApiClient } from "./components/ApiClient.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <ApiClient baseUrl="https://backend-bay-kappa-25.vercel.app/">
      <App />
    </ApiClient>
  </ThemeProvider>
);
