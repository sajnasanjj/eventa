import React, { useState,useEffect } from "react";
import AdminHeader from "../../../components/Admin/AdminNavbar/AdminHeader";
import Sidebar from "../../../components/Admin/AdminSidebar/Sidebar";
import "./Add.scss"
import '../../../App.css'
import { Button } from "react-bootstrap";
import { PhotoCamera } from "@material-ui/icons";
import {useDispatch,useSelector} from 'react-redux'
import { getBanner } from '../../../features/auth/admin/banner/bannerSlice'


function Add() {
     const [file,setFile] =useState("");
     console.log(file);
    const { banners } = useSelector((state) => state.getbannerr);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBanner())
    },[dispatch]);
    return (
        <>
            <AdminHeader />
                <div className="containerr">
                <Sidebar />
                <div className="top">
                   <h2 className="head">Add new Banner</h2>
                
           
            <div className="bottom">
                <div className="right">
                            <form className="form">
                                <div className="formInput" >
                               
                            <label htmlFor="file">Add Image :<PhotoCamera className="icon"/></label>
                            <input type="file" name="Add Image" id="file" onChange={e=>setFile(e.target.files[0])} style={{display:"none"}} />
                            <img src= {file ? URL.createObjectURL(file) : " "} alt="" className="img" />
                            </div>
                                {banners.map((input)=>{
                                    return(
                                    <div className="formInput">
                                            <input type="text" name="name" id="name" placeholder={input.name} required />
                                    </div>
                                    )
                                })}
                                <Button className="button btn-sm">Submit</Button>

                    </form>
                </div>
            </div>
            </div>
            </div>
        </>
    );
}

export default Add;
