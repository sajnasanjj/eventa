import axios from 'axios'

export const getGallary = async()=>{
    const response = await axios.get("/adminlogin/getGallaryDetails");
    return response.data;
};
export const editGallary = async()=>{
    console.log("Gallary is Updating");
    const response = await axios.put(".adminlogin/editGallary")
    console.log("here is the details",response.data)
    return response.data;
}

const galleryService = {
    getGallary,editGallary
}
export default galleryService;