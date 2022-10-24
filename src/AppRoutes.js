import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

export default function AppRoutes() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Login />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/home',
            element: <Home />,
            errorElement: <ErrorPage />,
        },
    ]);

    return <RouterProvider router={router} />;
}
