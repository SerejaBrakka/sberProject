import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Auth from "./components/Auth/Auth";
import "./index.css";
import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import Products from "./components/Products/Products";
import Basket from "./components/Basket/Basket";
import Select from "./components/Select/Select";

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
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
