import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Models, News, Product, TestDrive } from "@pages/index";
import { BaseLayout } from "@layouts/BaseLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { AdminSignIn } from "@/widgets/admin-sign-in/ui/AdminSignIn";
import { CreateCar } from "@/pages/admin/CreateCar";
import { CreateNews } from "@/pages/admin/CreateNews";
import { NewsDetail } from "@/pages/news-detail/NewsDetail";
import { Contact } from "@/pages/contact/Contact";

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
          path: "/news/:id",
          element: <NewsDetail />,
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
          path: "/test-drive",
          element: <TestDrive />,
        },
        {
          path: "/contacts",
          element: <Contact />,
        },
      ],
    },
    {
      element: <AdminLayout />,
      children: [
        {
          path: "/admin/create-car",
          element: <CreateCar />,
        },
        {
          path: "/admin/create-news",
          element: <CreateNews />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
