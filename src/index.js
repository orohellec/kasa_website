import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import housingData from './data/housing.json'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    loader: async () => housingData
  },
  {
    path: "a-propos",
    element: <AboutPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
