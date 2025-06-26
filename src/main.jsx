import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/index.css';
import './styles/layout.css';

// Router components:
import App from "./App.jsx";
import AboutPage from "./pages/AboutPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error!</div>, // for all other errors than 404
    children: [
      {
          path: "/about",

      }
    ]
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "*", // "wild card" (all paths) route for 404
    element: <p>Error: 404 Not Found</p>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
