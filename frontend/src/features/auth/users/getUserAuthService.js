import axios from 'axios'
import { BACKEND_URL } from '../../../constants/axios'

const API = axios.create({baseURL:`${BACKEND_URL}/adminlogin`});

const getUser = async()=>{
    const response =await axios.get(API)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}
const getUserAuthService = {
    getUser,
}
export default getUserAuthService;