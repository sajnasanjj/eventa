import axios from 'axios'

const API_URL = '/register'
const API_URI = '/logins'

const register = async (userData) => {
  const response = await axios.post(API_URL, userData)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}
const login = async (userData) => {
  const response = await axios.post(API_URI, userData)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

const logout = () => {
  localStorage.removeItem('user')
}
const authService = {
  register,
  login,
  logout,
}
export default authService
