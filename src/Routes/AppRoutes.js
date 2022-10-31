import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import ErrorPage from '../Pages/ErrorPage';
import Users from '../Pages/Users';
import Projects from '../Pages/Projects';
import Tasks from '../Pages/Tasks';
import { AuthProvider } from '../Contexts/Auth';

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
        {
            path: '/users',
            element: <Users />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/projects',
            element: <Projects />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/tasks',
            element: <Tasks />,
            errorElement: <ErrorPage />,
        },
    ]);

    //user != null -> authenticated = true

    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
}
