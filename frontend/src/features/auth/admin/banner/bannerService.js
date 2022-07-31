import * as api from '../../../../api/admin'
// const BANNER = '/adminlogin/getBanner'

export const getBanner = async () => {
  const { data } = await api.getBanner()
  return data
}
const addBanner = async (bannerData) => {
  const { data } = await api.addBanner(bannerData)
  return data
}
export const editBanner = async (bannerData, bannerId) => {
  console.log('Banner is Updating')
  const { data } = await api.editBanner(bannerData, bannerId)
  console.log('here is the details are to be updated', data)
  return data
}
const deleteBanner = async (bannerId) => {
  const { data } = await api.deleteBanner(bannerId)
  return data
}

const bannerService = {
  getBanner,
  editBanner,
  addBanner,
  deleteBanner,
}
export default bannerService
