import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";
import Gallery from "./Pages/Gallery";

export default function App() {
  const PageLayout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };

  const PageRoutes = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Gallery",
          element: <Gallery />,
        },
      ],
    },
  ]);

  return (
    <main className="bg-backdrop">
      <Toaster />
      <RouterProvider router={PageRoutes}></RouterProvider>
    </main>
  );
}
