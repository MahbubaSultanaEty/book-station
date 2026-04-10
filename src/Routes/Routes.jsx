import MainLayout from "../Layout/MainLayout";
import Books from "../Pages/Books/books";
import Homepage from "../Pages/homepage/Homepage";
import { createBrowserRouter } from "react-router";


export const router = createBrowserRouter([
  {
  path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>,
      },
      {
        path: "/books",
        element: <Books></Books>,
      }
  ]
  },
])