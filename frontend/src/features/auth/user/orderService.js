import * as api from '../../../api/user'

export const getOrder = async () => {
  const { data } = await api.getOrder()
  return data
}
export const addOrder = async (orderData) => {
  console.log("added")
  const {data} = await api.addOrder(orderData)
  console.log("added suucessfully",data)
  return data
}

const orderService = {
  getOrder,
  addOrder,
}
export default orderService
