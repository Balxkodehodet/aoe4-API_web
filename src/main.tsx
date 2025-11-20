import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout.tsx";
import { AppProvider } from "./Components/AppContext.tsx";
import Player from "./Components/Player.tsx";
import LastTenGames from "./Components/LastTenGames.tsx";
import About from "./Components/About.tsx";
import ComparePlayers from "./Components/ComparePlayers.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <App /> },
        { path: "player/:id", element: <Player /> },
        { path: "last-ten-games/:id", element: <LastTenGames /> },
        { path: "about", element: <About /> },
        { path: "compare-players", element: <ComparePlayers /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL } // viktig!
);

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
