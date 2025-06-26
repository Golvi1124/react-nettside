import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import "./styles/layout.css";
import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";

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
        index: true, //this will be shown by default
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/products",
        element: <ProductsPage/>,
      },
      {
        path: "/product/:productId",
        element: <ProductPage />,
      },
    ],
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
