import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CreatePost from './components/CreatePost.jsx'
import {RouterProvider,  createBrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import  PostList  from './components/PostList.jsx'
import { createPostAction } from './components/CreatePost.jsx'
 const router = createBrowserRouter([
  {path:'/', element:<App/>,
   children:[ 
    {path:'/', element:<PostList/>},

    {path:'/create-post',
    element:<CreatePost/>,
     action: createPostAction,
    }]},
 
 ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
