
import * as api from '../../../../api/admin'

export const getService = async () => {
  const { data } = await api.getService()
  return data
}
const addService = async (serviceData) => {
  console.log('its working')
  const { data } = await api.addService(serviceData)
  console.log('services added')
  return data
}
export const editService = async (serviceData, serviceId) => {
  console.log('Service is Updating')
  const { data } = await api.editService(serviceData, serviceId)
  console.log('here is the details are to be updated', data)
  return data
}
const deleteService = async (serviceId) => {
  const { data } = await api.deleteService(serviceId)
  return data
}

const serviceService = {
  getService,
  editService,
  addService,
  deleteService,
}
export default serviceService
