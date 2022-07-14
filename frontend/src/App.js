import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
import { Inputs } from './eventSource'
import SingleUser from './pages/Admin/SingleUser/SingleUser'
import About from './components/User/About/About'
import Gallary from './pages/Admin/Gallary/Gallary'
import GallaryUser from './pages/User/GallaryUser/GallaryUser'
import Banner from './pages/Admin/Banner/Banner'
import AddBanner from './pages/Admin/Banner/AddBanner'
import EditBanner from './pages/Admin/Banner/EditBanner'
import AddGallary from './pages/Admin/Gallary/AddGallary'
// import Services from './components/User/Services/Services'
// import Services from './pages/Admin/OurService/Services'
import Album from './components/User/Album/Album'
import Review from './components/User/Review/Review'
import OurServices from './pages/Admin/OurService/Services'
// react.lazy
function App() {
      return (
            <>
                  <Router>

                        <Routes>
                              <Route path="/adminlogin" >
                                    <Route index element={<Alogin />} />
                                    <Route path="dashboard" element={<AdminHome />} />
                                    <Route path="users">
                                          <Route index element={<UserDetails />} />
                                          <Route path=":userId" element={<SingleUser />} />
                                          <Route path="add" element={<Add inputs={Inputs} />} />
                                    </Route>
                                    <Route path="banner">
                                          <Route index element={<Banner />} />
                                          <Route path="add" element={<AddBanner/>} />
                                          <Route path="editBanner" element={<EditBanner/>}/>
                                    </Route>
                                    <Route path="gallary">
                                          <Route index element={<Gallary/>} />
                                          <Route path="add" element={<AddGallary/>} />
                                          {/* <Route path="editGallary" element={<EditGallary/>}/>  */}
                                    </Route>
                                    <Route path="services">
                                          <Route index element={<OurServices/>} />
                                    </Route>
                              </Route>
                        </Routes>
                        <Routes>
                              <Route exact path="/">
                                    <Route index element={<HomePage/>} />
                                    <Route path="logins" element={<Login />} />
                                    <Route path="register" element={<Register />} />
                                    <Route path="profile" element={<Profile />} />
                                    <Route path="about" element={<About/>} />
                                    <Route path="photos" element={<HomePage/>}>
                                                <Route index element={<GallaryUser/>}/>
                                                <Route path="album" element={<Album/>}/>
                                                <Route path="review" element={<Review/> }/>
                                    </Route>
                                    
                              </Route>
                        </Routes>
                  </Router>




                  <ToastContainer /> 
            </>
      )
}
export default App
