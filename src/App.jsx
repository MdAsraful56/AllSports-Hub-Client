import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import MainLayout from './layout/MainLayout'
import HomeLayout from './layout/HomeLayout'
import AuthProvider from './provider/AuthProvider'
import Registration from './components/Registration'
import Login from './components/Login'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <MainLayout/> } >
        <Route index element={ <HomeLayout/> }  />
        <Route path='aa' element={ <Registration/> } />
        <Route path='login' element={ <Login/> } />
      </Route>
    )
  )

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  )
}

export default App
