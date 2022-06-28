import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './pages/Register'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
 import Profile from './pages/Profile'
function App() {
  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
