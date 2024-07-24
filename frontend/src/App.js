import React from 'react';
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EditorPage from './pages/EditorPage';

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/editor/:roomID",
      element: <EditorPage />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}