import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import HomePage from "./Pages/Home/HomePage";
import Products from "./Pages/Products/Products";
import Root from "./root";
import Error from "./Pages/ErrorPage/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <Products></Products> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
