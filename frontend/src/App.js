import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Login from './pages/User/Login/Login'
import Register from './pages/User/Register/Register'
import Profile from './pages/User/Profile/Profile'
// import Error from './components/404/Error';

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Alogin from './pages/Admin/AdminLogin/Alogin'
import './App.css'
import AdminHome from './pages/Admin/AdminHome/AdminHome'
import UserDetails from './pages/Admin/UserDetails/UserDetails'
import HomePage from './pages/User/HomePage/HomePage';
import Add from './pages/Admin/Add/Add'
import {Inputs} from './eventSource'
import SingleUser from './pages/Admin/SingleUser/SingleUser'
// react.lazy
function App() {
  return (
<>
<Router>
       
      <Routes>
            <Route path ="/adminlogin" >
                  <Route index element={<Alogin/>}/>
                  <Route path="dashboard" element={<AdminHome/>}/>
                  <Route path="users" >
                        <Route index element={<UserDetails/>}/>
                        <Route path=":userId" element={<SingleUser/>}/>
                        <Route path="add" element={<Add inputs={Inputs}/>}  />
                        </Route>
            </Route>
      </Routes>
        
      <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route path="/logins" element={<Login/>} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
      </Routes>
</Router>
    
      
             
      
      <ToastContainer />
       </>
      )
}
      export default App
