import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { Suspense } from 'react'
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
import HomePage from './pages/User/HomePage/HomePage'
import Add from './pages/Admin/Add/Add'
import { Inputs } from './eventSource'
import SingleUser from './pages/Admin/SingleUser/SingleUser'
import About from './pages/User/About/About'
import Gallary from './pages/Admin/Gallary/Gallary'
import GallaryUser from './components/User/GallaryUser/GallaryUser'
import Banner from './pages/Admin/Banner/Banner'
import AddBanner from './pages/Admin/Banner/AddBanner'
import EditBanner from './pages/Admin/Banner/EditBanner'
import AddService from './components/Admin/OurService/AddService'
import AddGallery from './components/Admin/GalleryManagement/AddGallery'
import AlbumAdmin from './pages/Admin/Album/Album'
import AddAlbum from './components/Admin/AlbumManagement/AddAlbum'
import Enquire from './pages/User/Enquire/Enquire'
import Form2 from './components/User/Form1/Form2'
import ServiceDetails from './components/User/ServiceDetails/ServiceDetails'
import Photography_user from './components/User/Photography_user/Photography_user'
import CateringUser from './components/User/Catering_user/Catering-user'
import Decoration from './components/User/Decorations/Decoration'
// import Services from './components/User/Services/Services'
// import Services from './pages/Admin/OurService/Services'
const Album = React.lazy(() => import('./components/User/Album/Album'))
const Review = React.lazy(() => import('./components/User/Review/Review'))
const OurServices = React.lazy(() =>
  import('./pages/Admin/OurService/Services'),
)

// react.lazy
function App() {
  return (
    <>
      <Suspense>
        <Router>
          <Routes>
            <Route path="/adminlogin">
              <Route index element={<Alogin />} />
              <Route path="dashboard" element={<AdminHome />} />
              <Route path="users">
                <Route index element={<UserDetails />} />
                <Route path=":userId" element={<SingleUser />} />
                <Route path="add" element={<Add inputs={Inputs} />} />
              </Route>
              <Route path="banner">
                <Route index element={<Banner />} />
                <Route path="add" element={<AddBanner />} />
                <Route path="editBanner" element={<EditBanner />} />
              </Route>
              <Route path="gallary">
                <Route index element={<Gallary />} />
                <Route path="add" element={<AddGallery />} />
                {/* <Route path="editGallary" element={<EditGallary/>}/>  */}
              </Route>
              <Route path="services">
                <Route index element={<OurServices />} />
                <Route path="add" element={<AddService />} />
              </Route>
              <Route path="albums">
                <Route index element={<AlbumAdmin />} />
                <Route path="add" element={<AddAlbum />} />
              </Route>
            </Route>
          </Routes>
          <Routes>
            <Route exact path="/">
              <Route index element={<HomePage />} />
              <Route path="logins" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="profile" element={<Profile />} />
              <Route path="about" element={<About />} />
              <Route path="photos" element={<HomePage />}>
                <Route index element={<GallaryUser />} />
                <Route path="album" element={<Album />} />
                <Route path="review" element={<Review />} />
              </Route>
              <Route path="serviceDetails" element={<ServiceDetails />}>
                <Route index element={<Photography_user />} />
                <Route path="catering_user" element={<CateringUser />} />
                <Route path="decorations" element={<Decoration />} />
              </Route>
              <Route path="enquire" element={<Enquire />} />
              <Route path="Form2" element={<Form2 />} />
            </Route>
          </Routes>
        </Router>
      </Suspense>
      <ToastContainer />
    </>
  )
}
export default App
