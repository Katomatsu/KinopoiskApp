import React from 'react';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import MainPage from "./pages/MainPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MainLayout from "./components/MainLayout/MainLayout";
import RandomMovie from "./components/RandomMovie/RandomMovie";
import ErrorPage from "./pages/ErrorPage";
import RandomMoviePage from "./pages/RandomMoviePage";


const App = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <MainLayout/>,
            children: [
                {
                    index: true,
                    element: <MainPage/>,
                },
                {
                    path: ':movieId',
                    element: <MovieDetailsPage/>
                },
                {
                    path: 'random',
                    element: <RandomMoviePage/>
                },
                {
                    path: '*',
                    element: <ErrorPage message={'Page not found!'}/>,
                },
            ]
        },


    ])

    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
};

export default App;