import React, { useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Personnels from "./Pages/Personnels";
import News from "./Pages/News";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const PageLayout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
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
          element: (
            <Home
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          ),
        },
        {
          path: "/Gallery",
          element: <Gallery />,
        },
        {
          path: "/Contact",
          element: <Contact />,
        },
        {
          path: "/News",
          element: <News />,
        },
        {
          path: "/Personnels",
          element: <Personnels />,
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
