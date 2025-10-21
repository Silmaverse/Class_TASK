import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayOutOne from './LayOuts/LayOutOne'
import Home from './pages/Home'

const App = () => {

  const myroute = createBrowserRouter(createRoutesFromElements(
     <Route path='/' element={<LayOutOne/>}>
      <Route index  element={<Home/>}/>
  
     </Route>
  ))


  return (
    <>
     <RouterProvider router={myroute} />
    </>
  )
}

export default App