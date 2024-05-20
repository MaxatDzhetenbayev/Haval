import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Admin, Home, Models, News, Product, Stocks } from "@pages/index";
import { BaseLayout } from "@layouts/BaseLayout";
import { AdminLayout } from "./layouts/AdminLayout";

function App() {
  const router = createBrowserRouter([
    {
      element: <BaseLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/news",
          element: <News />,
        },
        {
          path: "/models",
          element: <Models />,
        },
        {
          path: "/models/:id",
          element: <Product />,
        },
        {
          path: "stocks",
          element: <Stocks />,
        },
      ],
    },
    {
      element: <AdminLayout/>,
      children: [
        {
          path: "/admin",
          element: <Admin />,
        },
      ]
    },
   
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
