import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import MainLayout from './layout/MainLayout'
import HomeLayout from './layout/HomeLayout'
import AuthProvider from './provider/AuthProvider'
import Registration from './components/Registration'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify';
import AllSportsEquipment from './components/AllSportsEquipment'
import AddEquipment from './components/AddEquipment'
import ClientReview from './components/ClientReview'
import PrivateRoute from './routes/PrivateRoute'
import MyEquipmentList from './components/MyEquipmentList'
import Details from './components/Details'
// import { reviewsLoader } from './loader/review'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <MainLayout/> } >
        <Route index element={ <HomeLayout/> } />
        <Route path='*' element={ <Error/> } />
        <Route path='allsportsequipment' element={ <AllSportsEquipment/> } loader={ ()=> fetch('http://localhost:5000/equipment') } />
        <Route path='/details/:id' element={ <Details/> } loader={ async({params}) => {return await fetch(`http://localhost:5000/details/${params.id}`)}  } />
        <Route path='addequipment' element={ <PrivateRoute><AddEquipment/></PrivateRoute> } />
        <Route path='myequipmentlist' element={ <PrivateRoute><MyEquipmentList/></PrivateRoute> } loader={ ()=> fetch('http://localhost:5000/equipment') }  />
        <Route path='registration' element={ <Registration/> } />
        <Route path='login' element={ <Login/> } />
        <Route path='/' element={ <ClientReview/> } loader={async () => { await fetch('http://localhost:5000/review'); }}/>
      </Route>
    )
  )

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </AuthProvider>
    </>
  )
}

export default App
