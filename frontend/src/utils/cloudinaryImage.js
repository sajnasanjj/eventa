import axios from 'axios';

export const imageUpload=async (pics)=>{
 
   if(pics.type === 'image/jpeg' || pics.type === 'image/png'){
    const formdata = new FormData();
    formdata.append('file',pics);
    formdata.append('upload_preset','Event_Management');
    formdata.append('cloud_name','dvkfod2iq');
    const {data} = await axios.post("https://api.cloudinary.com/v1_1/dvkfod2iq/image/upload",formdata)
       if(data){
        return data;
       }
   }
   else {
    return console.log("Image is not uploaded")
   }
}