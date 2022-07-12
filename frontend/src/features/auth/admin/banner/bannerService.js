import axios from 'axios'
// const BANNER = '/adminlogin/getBanner'

export const getBanner = async()=>{
    console.log("Banner on userside");
    const response = await axios.get("/adminlogin/getBanner");
    console.log("baannerr",response.data);
    return response.data;
};
export const editBanner = async()=>{
    console.log("Banner is Updating");
    const response = await axios.put(".adminlogin/editBanner")
    console.log("here is the details",response.data)
    return response.data;
}

const bannerService = {
    getBanner,editBanner
}
export default bannerService;