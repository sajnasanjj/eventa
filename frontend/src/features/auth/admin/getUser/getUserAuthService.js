import * as api from '../../../../api/admin'

const getUser = async () => {
  const { data } = await api.getUser()
  return data
}

const changeUserStatus = async (userId) => {
  const { data } = await api.changeUserStatus(userId)
  return data
}
const getUserAuthService = {
  getUser,
  changeUserStatus,
}
export default getUserAuthService
