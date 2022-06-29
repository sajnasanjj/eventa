import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
import Login from './pages/User/Login/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/User/Register/Register'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Profile from './pages/User/Profile/Profile'
import Alogin from './pages/Admin/AdminLogin/Alogin'
import Dashboard from './pages/Admin/AdminDashboard/Dashboard'
// import Error from './components/404/Error';
import Carousal from './components/Carousal/Carousal';

function App() {
  return (
    <>
      <div>
        <Router>
             <Header />
             
             
          <Routes>
            <Route path="/" element={<Carousal/>} />
                  
            <Route path="/logins" element={<Login/>} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />

          </Routes>

          <Routes>
            <Route path="/adminlogin" element={<Alogin/>} />
            <Route path="/dashboard" element={<Dashboard/>} />

          </Routes>
        </Router>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
