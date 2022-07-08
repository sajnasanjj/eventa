import React, { useState } from "react";
import AdminHeader from "../../../components/Admin/AdminNavbar/AdminHeader";
import Sidebar from "../../../components/Admin/AdminSidebar/Sidebar";
import "./Add.scss"
import '../../../App.css'
import { Button } from "react-bootstrap";
import { PhotoCamera } from "@material-ui/icons";


function Add({inputs}) {
     const [file,setFile] =useState("");
     console.log(file);
    return (
        <>
            <AdminHeader />
                <div className="containerr">
                <Sidebar />
                <div className="top">
                   <h2 className="head">Add new User</h2>
                
           
            <div className="bottom">
                <div className="right">
                            <form className="form">
                                <div className="formInput" >
                               
                            <label htmlFor="file">Add Image :<PhotoCamera className="icon"/></label>
                            <input type="file" name="Add Image" id="file" onChange={e=>setFile(e.target.files[0])} style={{display:"none"}} />
                            <img src= {file ? URL.createObjectURL(file) : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHH2zdXna0gudbPI8CITlu6PiYo-BO7GyZjQ&usqp=CAU"} alt="" className="img" />
                            </div>
                                {inputs.map((input)=>{
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
