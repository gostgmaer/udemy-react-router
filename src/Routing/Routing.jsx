import React from "react";
import { createBrowserRouter } from "react-router-dom";
import EditEvents from "../Pages/EditEvents/EditEvents";
import Error from "../Pages/ErrorPage/Error";
import EventDetails from "../Pages/EventDetails/EventDetails";
import EventPage from "../Pages/Eventpage/EventPage";
import HomePage from "../Pages/Home/HomePage";
import NewEvents from "../Pages/NewEvents/NewEvents";
import Products from "../Pages/Products/Products";
import Root from "../root";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/products", element: <Products></Products> },
            {
                path: "/events",
                element: <EventPage></EventPage>,
            },
            {
                path: "/events/:id",
                element: <EventDetails></EventDetails>,
            },
            {
                path: "/events/new",
                element: <NewEvents></NewEvents>,
            },
            {
                path: "/events/:id/edit",
                element: <EditEvents></EditEvents>,
            },
        ],
    },
]);

export default router;
