import * as api from '../../api/user'

const register = async (userData) => {
  const {data} = await api.register(userData)
  if (data) {
    localStorage.setItem('user', JSON.stringify(data))
  }
  return data
}
const login = async (userData) => {
  const {data} = await api.login(userData)
  if (data) {
    localStorage.setItem('user', JSON.stringify(data));
  }
  return data
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
