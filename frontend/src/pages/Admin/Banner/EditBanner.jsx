import React, { useState, useEffect } from "react";
import AdminHeader from "../../../components/Admin/AdminNavbar/AdminHeader";
import Sidebar from "../../../components/Admin/AdminSidebar/Sidebar";
import "./AddBanner.scss"
import '../../../App.css'
import { Button } from "react-bootstrap";
import { PhotoCamera } from "@material-ui/icons";
import { useDispatch, useSelector } from 'react-redux'
import { getBanner } from '../../../features/auth/admin/banner/bannerSlice'


function EditBanner() {
    const [file, setFile] = useState("");
    console.log(file);
    const { banners } = useSelector((state) => state.getbannerr);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBanner())
    });
    return (
        <>
            <AdminHeader />
            <div className="containerr">
                <Sidebar />
                <div className="top">
                    <h4 className="head">Edit Banner</h4>


                    <div className="bottom">
                        <div className="right">
                            <form className="form">
                                <label htmlFor="file">Image :<PhotoCamera className="icon" /></label>
                                <input type="file" name="AddImage" id="file" onChange={e => setFile(e.target.files[0])} style={{ display: "none" }} />


                                {banners.map((input) => {
                                    return (
                                        <>
                                            <div className="formInput" >
                                                <img src={file ? URL.createObjectURL(file) : input.image} alt="" className="img" />
                                                <input type="text" name="name" id="name" placeholder="Heading" required />

                                            </div>
                                            <div className="formInput">
                                            </div>
                                        </>
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

export default EditBanner;
