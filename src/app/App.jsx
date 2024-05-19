import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Models, News, Stocks } from "@pages/index";
import { BaseLayout } from "@layouts/BaseLayout";

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
          path: "stocks",
          element: <Stocks />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
