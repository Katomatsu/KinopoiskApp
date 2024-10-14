import React from 'react';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import MainPage from "./pages/MainPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";


const App = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Navigate to="/movies" />,
        },
        {
            path: '/movies',
            element: <MainPage />,
        },
        {
            path: '/movies/:movieId',
            element: <MovieDetailsPage/>
        }
    ])

    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
};

export default App;