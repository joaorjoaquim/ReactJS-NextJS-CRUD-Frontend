import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import ErrorPage from '../Pages/ErrorPage';

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
