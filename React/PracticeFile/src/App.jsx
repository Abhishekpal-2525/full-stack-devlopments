import Navbar from './components/navbar'
import Pages from './components/pages'
import About from './components/about'
import Contact from './components/contact'
import { createBrowserRouter, RouterProvider }  from 'react-router-dom'
function App() {
      const Router=createBrowserRouter([
             {
              path:'/',
              element:<><Navbar/><Pages/></>
             },
             {
              path:'/',
              element:<><Navbar/><About/></>
             },
             {
              path:'/',
              element:<><Navbar/><Contact/></>
             },
      ])
  return (
    <>
    
      <RouterProvider router={Router}/>
    </>
  )
}

export default App
