import * as api from '../../../api/user'

export const getOrder = async () => {
  const { data } = await api.getOrder()
  return data
}
export const addOrder = async (orderData) => {
  const { data } = await api.addOrder(orderData)
  return data
}

const orderService = {
  getOrder,
  addOrder,
}
export default orderService
