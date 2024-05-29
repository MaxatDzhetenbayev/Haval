import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Models, News, Product, TestDrive } from "@pages/index";
import { BaseLayout } from "@layouts/BaseLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { CreateCar } from "@/pages/admin/CreateCar";
import { CreateNews } from "@/pages/admin/CreateNews";
import { NewsDetail } from "@/pages/news-detail/NewsDetail";
import { Contact } from "@/pages/contact/Contact";
import { SignIn } from "@/pages/sign-in/SignIn";
import { Admin } from "@/pages/admin/Admin";
import 'react-toastify/dist/ReactToastify.css';
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
        {
          path: "/signin",
          element: <SignIn />,
        }
      ],
    },
    {
      element: <AdminLayout />,
      children: [
        {
          path: "/admin",
          element: <Admin />,
        },
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
