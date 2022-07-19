import axios from 'axios'
import * as api from '../../../../api/admin'
// const BANNER = '/adminlogin/getBanner'

export const getBanner = async()=>{
    const response = await axios.get("/adminlogin/getBanner");
    return response.data;
};
const addBanner = async(BannerData)=>{
      const {data} = await api.addBanner(BannerData)
      return data;
}
export const editBanner = async(bannerData,bannerId)=>{
    console.log("Banner is Updating");
    const {data} = await api.editBanner(bannerData,bannerId)
    console.log("here is the details are to be updated",data)
    return data;
}
const deleteBanner = async(bannerId)=>{
    const {data} =await api.deleteBanner(bannerId)
    return data;
}

const bannerService = {
    getBanner,editBanner,addBanner,deleteBanner
}
export default bannerService;