// import axios from 'axios'

import * as api from '../../../../api/admin'

export const getService = async()=>{
    console.log("service")
    const {data} = await api.getService()
    if(data) {
    localStorage.setItem('Service',JSON.stringify(data))
    }
    console.log("services");
    return data;
};
const addService = async(serviceData)=>{
      const {data} = await api.addService(serviceData)
      return data;
}
export const editService = async(serviceData,serviceId)=>{
    console.log("Service is Updating");
    const {data} = await api.editService(serviceData,serviceId)
    console.log("here is the details are to be updated",data)
    return data;
}
const deleteService = async(serviceId)=>{
    const {data} =await api.deleteService(serviceId)
    return data;
}

const serviceService = {
    getService,editService,addService,deleteService
}
export default serviceService;

