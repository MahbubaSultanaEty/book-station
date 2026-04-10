import MainLayout from "../Layout/MainLayout";
import BookDetails from "../Pages/BookDetails/BookDetails";
import Books from "../Pages/Books/books";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

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
        },
        {
            path: "/bookDetails/:id",
            Component: BookDetails,
            loader: ()=> fetch("/public/BooksData.json")
      }
        ],
  errorElement: <ErrorPage></ErrorPage>
  },
])