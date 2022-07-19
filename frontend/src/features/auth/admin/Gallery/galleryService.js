import * as api from '../../../../api/admin'

export const getGallery = async () => {
  const { data } = await api.getGallery()
  return data
}
// export const editGallery = async (gallaryData) => {
//   const { data } = await api.editGallery(gallaryData)
//   return data
// }
export const addGallery = async (gallaryData) => {
  const { data } = await api.addGallery(gallaryData)
  return data
}
const deleteGallery = async (gallaryId) => {
  const { data } = await api.deleteGallery(gallaryId)
  return data
}
const galleryService = {
  getGallery,

  addGallery,
  deleteGallery,
}
export default galleryService
