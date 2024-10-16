// Entry point of the application that sets up routing and providers
import React from 'react'
import ReactDOM from 'react-dom/client'
import Customer from './Customer.jsx'
import {ChakraProvider, Text} from '@chakra-ui/react'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login/Login.jsx";
import AuthProvider from "./components/context/AuthContext.jsx";
import ProtectedRoute from "./components/shared/ProtectedRoute.jsx";
import Signup from "./components/signup/Signup";
import { createStandaloneToast } from '@chakra-ui/react'
import Home from "./Home.jsx";

const { ToastContainer } = createStandaloneToast();

// Define application routes
const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "dashboard",
        element: <ProtectedRoute><Home/></ProtectedRoute>
    },
    {
        path: "dashboard/customers",
        element: <ProtectedRoute><Customer /></ProtectedRoute>
    }
])

// Render the application
ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <ChakraProvider>
                <AuthProvider>
                    <RouterProvider router={router} />
                </AuthProvider>
                <ToastContainer />
            </ChakraProvider>

        </React.StrictMode>,
    )