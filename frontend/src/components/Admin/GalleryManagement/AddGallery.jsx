import { PhotoCamera } from "@material-ui/icons";
import React, { useEffect } from "react";
import AdminHeader from "../AdminNavbar/AdminHeader";
import Sidebar from "../AdminSidebar/Sidebar";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { imageUpload } from "../../../utils/cloudinaryImage";
import { reset, addGallery } from "../../../features/auth/admin/Gallery/gallerySlice";
import '../../../App.css'
import './AddGallery.scss'
function AddGallery() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isSuccess, isError, message, isLoading } = useSelector((state) => state.getgallery);
    useEffect(() => {
       
        if (isSuccess) {
            navigate('/adminlogin/gallary')
        }
        dispatch(reset())
    }, [isSuccess, isError, message, isLoading, navigate, dispatch]);

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

        const gallaryData = {
            name,
            image: pic,
        }

        dispatch(addGallery(gallaryData))

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
                    <h4 className="head">Add New Photo</h4>
                    <div className="bottom">
                        <div className="right">
                            <form className="form" onSubmit={handleSubmit}>

                                <div className="formInput" >
                                    <label htmlFor="">Image :</label>
                                    <input type="file" name="image" id="image" value={image} onChange={(e) => postDetails(e.target.files[0])} placeholder="Heading" />
                                </div>

                                <div className="formInput">
                                    <label htmlFor="">Heading :</label>
                                    <input type="text" name="name" id="name" value={name} onChange={onChange} placeholder="Heading" />
                                </div>

                                <Button className="button btn-sm" type="submit">Submit</Button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddGallery;
