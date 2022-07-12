import React, { useState, useEffect } from "react";
import AdminHeader from "../../../components/Admin/AdminNavbar/AdminHeader";
import Sidebar from "../../../components/Admin/AdminSidebar/Sidebar";
import '../../Admin/Banner/AddBanner.scss'
import '../../../App.css'
import { Button } from "react-bootstrap";
import { PhotoCamera } from "@material-ui/icons";
import { useDispatch, useSelector } from 'react-redux'
import { getGallary } from '../../../features/auth/admin/Gallery/gallerySlice'


function AddGallary() {
    const [file, setFile] = useState("");
    console.log(file);
    const { gallarys } = useSelector((state) => state.getgallary);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getGallary())
    },[]);

    const onSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <AdminHeader />
            <div className="containerr">
                <Sidebar />
                <div className="top">
                    <h4 className="head">Add New Photo</h4>
                    <div className="bottom">
                        <div className="right">
                            <form className="form" onSubmit={onSubmit}>
                                <label htmlFor="file">Add Image :<PhotoCamera className="icon" /></label>
                                            <div className="formInput" >

                                    {gallarys.map((input) => (
                                        <>
                                            <img src={file ? URL.createObjectURL(file) : input.image } alt="" className="img" /> 
                                                <input type="file" name="image" id="image" onChange={e => setFile(e.target.files[0])} style={{ display: "none" }} />
                                                <input type="text" name="name" id="name" placeholder={input.name} required />
                                                <input type ="number" name="seat" id="seat" placeholder="Number of Seating" required/>
                                        </>
                                    ))}

                                            </div>
                                <Button className="button btn-sm" >Submit</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddGallary;
