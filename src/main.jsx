import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Github from './components/github/Github.jsx'
import User from './components/User/User.jsx'

// const router= createBrowserRouter([
//     //1st obj
//     {
//       path: "/", // '/' is a top level element . under it nesting happens. it renders the following elements
//       element : <App />,
//       children: [
//         {
//           path: "home",
//           element: <Home />

//         },
//         {
//           path: "about",
//           element : <About />
//         },
//         {
//           path: "contact",
//           element : <Contact />
//         },
//         {
//           path: "github",
//           element : <Github />
//         }
//       ]
//     }

// ]) // takes the list of every obj that is needed in an array

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
    <Route path='Home' element={<Home/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='Contact' element={<Contact/>}/>
    <Route path='Github' element={<Github/>}/>
    <Route path='User/:userid' element={<User/>}/>
    </Route>

));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
    {/*routerprovider always takes a props  that is router*/}

  </React.StrictMode>,
)
