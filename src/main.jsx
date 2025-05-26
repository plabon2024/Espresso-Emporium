import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layout/MainLayout";
import Home from "./pagess/Home";
import AddCoffee from "./pagess/AddCoffee";
import Error from "./pagess/Error";
import CoffeeDetails from "./pagess/CoffeeDetails";
import UpdateCoffee from "./pagess/UpdateCoffee";
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "/addcoffee", Component: AddCoffee },
      {
        path: "/updatecoffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffee/${params.id}`),
        Component: UpdateCoffee,
      },

      {
        path: "/coffee/:id",

        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffee/${params.id}`),

        Component: CoffeeDetails,
      },

      { path: "/*", Component: Error },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
