import axios from 'axios'

const ADMIN_API_URI ='/adminlogin/adminlogin'


const adminregister = async (adminData) => {
    console.log("admin",adminData);
    const response = await axios.post(ADMIN_API_URI,adminData)
    if(response.data){
        localStorage.setItem('admin',JSON.stringify(response.data))
    }
    return response.data
}

const adminlogin = async(adminData)=>{
    const response = await axios.post(ADMIN_API_URI,adminData)

    if(response.data){
        localStorage.setItem('admin',JSON.stringify(response.data))
    }
    return response.data
}

const adminlogout = () => {
    localStorage.removeItem('admin')
}


const adminAuthService = {
     adminregister,adminlogin,adminlogout
}

export default adminAuthService