import React from 'react';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import MainPage from "./pages/MainPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MainLayout from "./components/MainLayout/MainLayout";
import RandomMovie from "./components/RandomMovie/RandomMovie";


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/movies"/>,
    },
    {
      path: '/movies',
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
          element: <RandomMovie/>
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;