import * as api from '../../../../api/admin'

export const getGallery = async () => {
  console.log("hnm")
  const { data } = await api.getGallery()
  console.log("data",data);
  return data
}

export const addGallery = async (gallaryData) => {
  console.log("addedddfghj");
  const { data } = await api.addGallery(gallaryData)
  console.log("sdfghjk",data)
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
