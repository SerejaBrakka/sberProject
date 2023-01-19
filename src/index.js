import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Auth from "./components/Auth/Auth";
import Basket from "./components/Basket/Basket";
import Login from "./components/Registry/Registry";
import Main from "./components/Main/Main";
import Products from "./components/Products/Products";
import Select from "./components/Select/Select";
import "./index.css";
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "signin", element: <Auth /> },
      { path: "", element: <Main /> },
      { path: "signup", element: <Login /> },
      { path: "products", element: <Products /> },
      { path: "basket", element: <Basket /> },
      { path: "select", element: <Select /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
