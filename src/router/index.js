import React from "react";
import { Navigate } from "react-router-dom";

//实现懒加载。
const Home = React.lazy(() => import('@/views/home'))
const Entire = React.lazy(() => import('@/views/entire'))
const Detail = React.lazy(() => import('@/views/detail'))
const Demo = React.lazy(() => import('@/views/demo'))

const routes = [


    {
        path: '/',
        element: <Navigate to='/home' />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/entire',
        element: <Entire />
    },
    {
        path: '/detail',
        element: <Detail />
    },
    {
        path: '/demo',
        element: <Demo />
    }

];
export default routes;