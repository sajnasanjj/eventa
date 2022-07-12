// import * as api from '../../../api/admin';
import axios from "axios";
// import {getUser} from "../../../api/admin"

export const getUsers = async()=>{
    console.log("get my data");
   const response = await axios.get("/adminlogin/getUser");
   console.log("datassss",response.data);                                                                                                    

   return response.data;
   
};
const getUserAuthService = {
    getUsers,
}
export default getUserAuthService;