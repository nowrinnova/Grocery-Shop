import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import Cart from './routes/Cart.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
      children:[{
        path:"cart" ,element:<Cart/>
      },]
    
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
