import React, { useState, useEffect } from "react";
import AdminHeader from "../../../components/Admin/AdminNavbar/AdminHeader";
import Sidebar from "../../../components/Admin/AdminSidebar/Sidebar";
import "./AddBanner.scss"
import '../../../App.css'
import { Button } from "react-bootstrap";
import { PhotoCamera } from "@material-ui/icons";
import { useDispatch, useSelector } from 'react-redux'
import { getBanner,reset } from '../../../features/auth/admin/banner/bannerSlice'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { getBanner } from "../../../features/auth/admin/banner/bannerService";


function AddBanner() {
const [Data,setData] = useState({name:'',image:''})

const {image,name} =Data
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const { banners,isSuccess,isError,message } = useSelector((state) => state.getbannerr);
    useEffect(() => {
        if(isError){
            toast.error(message)
        }
        if (isSuccess && banners) {
            navigate('/adminlogin/banner/add')
        }
        dispatch(reset())
    }, [banners, navigate, dispatch, isSuccess,isError,message]);
    console.log("fghj",banners)

    const handleSubmit= (event) => {
        event.preventDefault()
        if(!name && !image){
            toast.error("Fill all fields")
        }else{
        const bannerData = {
           name,image
        }
      dispatch(getBanner(bannerData))
    }
    //  const data = new FormData(event.currentTarget)
    }
    const onChange=(event)=>{
        setData((prevState)=>({
            ...prevState,
            [event.target.name]:event.target.value,
        }))
      
    }
    useEffect(() => {
       
        if(isSuccess ){
            navigate('/adminlogin/banner')
        }
        dispatch(reset())
    }, [banners,navigate,dispatch,isSuccess]);
    return (
        <>
            <AdminHeader />
            <div className="containerr">
                <Sidebar />
                <div className="top">
                    <h4 className="head">Add New Banner</h4>
                    <div className="bottom">
                        <div className="right">
                            <form className="form" onSubmit={handleSubmit}>
                                {/* <label htmlFor="file">Add Image :<PhotoCamera className="icon" /></label>
                                <input type="file"  onChange={e => setData(e.target.files[0])}  style={{ display: "none" }} /> */}

                                 <div className="formInput" >
/                                    <input type="file" id="image" name="image" value={image} onChange={onChange}/>
                               
                                </div>
                                
                                 
                                        
                                         <div className="formInput" >
                                                <input type="text" name="name" id="name" value={name} onChange={onChange} />

                                         </div>
                                        <div className="formInput">
                                                
                                        </div>
                                      
                                   
                                
                                <Button
                                    className="button btn-sm" type="submit">Submit</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddBanner;
