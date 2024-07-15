import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './Components/Home';
import About from './Components/About';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route exact path='/' element={<Layout/>}>  {/* yaha bhi path aur element danay ho gay */}
     <Route  exact path='' element={<Home />}/>
     <Route  exact path='/about' element={<About />}/>

    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);


