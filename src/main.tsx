import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout.tsx";
import { AppProvider } from "./Components/AppContext.tsx";
import Player from "./Components/Player.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: "player/:id", element: <Player /> },
    ],
  },
]);

function Root() {
  return (
    <StrictMode>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")!).render(<Root />);
