import * as api from '../../api/admin'

const adminregister = async (adminData) => {
  console.log('admin', adminData)
  const {data} = await api.adminlogin(adminData)
  if (data) {
    localStorage.setItem('admin', JSON.stringify(data))
  }
    return data
}

const adminlogin = async (adminData) => {
  const {data}= await api.adminlogin(adminData)
  if (data) {
    localStorage.setItem('admin', JSON.stringify(data))
  }
  return data
}
const adminlogout = () => {
  localStorage.removeItem('admin')
}
const adminAuthService = {
  adminregister,
  adminlogin,
  adminlogout,
}
export default adminAuthService
