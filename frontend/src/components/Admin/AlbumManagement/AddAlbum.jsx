import React, { useEffect } from "react";
import AdminHeader from "../../../components/Admin/AdminNavbar/AdminHeader";
import Sidebar from "../../../components/Admin/AdminSidebar/Sidebar";
import "./AddAlbum.scss"
import '../../../App.css'
// import { PhotoCamera } from "@material-ui/icons";
// import {Avatar} from "@mui/material";
// import { IconButton} from "@mui/material";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { addAlbum, reset } from '../../../features/auth/admin/Album/albumSlice'
import { useNavigate } from "react-router-dom";
import { imageUpload } from "../../../utils/cloudinaryImage";
import { toast } from "react-toastify";
import { styled } from "@material-ui/styles";



function AddAlbum() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { isSuccess, isError, message, isLoading } = useSelector((state) => state.allalbum);

    useEffect(() => {
        if (isError) {
            console.log("error");
            toast.error(message)
        }
        if (isSuccess) {
            console.log("All added");
            navigate('/adminlogin/albums')
        }
        dispatch(reset())
    }, [isSuccess, isError, message, isLoading, navigate, dispatch,]);

    const [Data, setData] = React.useState({ name: '' });

    const { name } = Data;
    const [pic, setPic] = React.useState('');
    const { image } = pic;
    const onChange = (event) => {
        setData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }))

    }
    const postDetails = async (pics) => {
        try {
            const data = await imageUpload(pics);
            setPic(data.secure_url.toString());
        } catch (error) {
            console.log(error);
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        const albumData = {
            name,
            image: pic,
        }
        dispatch(addAlbum(albumData))

        const datas = new FormData(event.currentTarget)
        console.log({
            image: datas.get('image'),
            name: datas.get('name')
        })
    }

    return (
        <>
            <AdminHeader />
            <div className="containerr">
                <Sidebar />
                <div className="top">
                    <h4 className="head">Add New Album</h4>
                    <div className="bottom">
                        <div className="right">
                            <form className="form" onSubmit={handleSubmit}>

                                <div className="formInput" >
                                    <label htmlFor="">Image :</label>
                                    <input type="file" name="image" id="image" value={image} onChange={(e) => postDetails(e.target.files[0])} placeholder="Heading" />

                                </div>

                                <div className="formInput" >
                                    <label htmlFor="">Heading :</label>
                                    <input type="text" name="name" id="name" value={name} onChange={onChange} placeholder="Heading" />

                                </div>

                                {/* <Input
                                    accept="image/*"
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    name="image"
                                    value={image}
                                    onChange={(e) => postDetails(e.target.files[0])}

                                />
                                <label htmlFor="contained-button-file">
                                    <IconButton>
                                        <Avatar
                                            src=""
                                            style={{
                                                margin: "10px",
                                                width: "60px",
                                                height: "60px",
                                            }}
                                        />
                                    </IconButton>
                                </label> */}
                                {/* <label htmlFor="icon-button-file">
                                    <Input
                                        accept="image/*"
                                        id="icon-button-file"
                                        name="image"
                                        type="file"
                                    />
                                    <IconButton
                                        color="primary"
                                        aria-label="upload picture"
                                        component="span"
                                    >
                                        <PhotoCamera />
                                    </IconButton>
                                </label>
                                <br />
                                <label>choose your image</label> */}




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

export default AddAlbum;
