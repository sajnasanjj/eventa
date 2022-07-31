import React, { useState, useEffect } from "react";
import './GallaryDatatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteForever } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux';
import { reset,deleteGallery } from '../../../features/auth/admin/Gallery/gallerySlice'
import { FaPencilAlt } from "react-icons/fa";

function GallaryDatatable() {
    const dispatch = useDispatch()
    const [Gallary, setGallary] = useState([])
    const deletingAlbum = (gallaryId) => {
        dispatch(deleteGallery(gallaryId))

    }
    const { gallarys, isError,isDeleted, isSuccess, message } = useSelector((state) => state.getgallery);

    useEffect(() => {
        if (isError) {
            console.log("error");
            toast.error(message)
        }
        if (isSuccess && gallarys) {
            setGallary(gallarys)
        }
        dispatch(reset());

    }, [gallarys, isError, isSuccess,isDeleted, message, dispatch]);
    console.log("Gallaryyyy", gallarys)
    const columns = [
        { field: "", headerName: "No", width: 50 },
        {
            field: 'name', headerName: 'Name', width: 290, renderCell: (params) => {
                return (
                    <>
                        {params.row.name}
                    </>
                )
            }
        },
        {
            field: "image", headerName: "image", width: 170, renderCell: (params) => {
                return (
                    <div className="cellWithImg">
                        <img src={params.row.image} alt="" className="cellImg" />

                    </div>
                )
            }
        },
        
        {
            field: "action", headerName: "Action", width: "200", renderCell: (params) => {
                return (
                    <>
                       
                        <div className="cellAction">
                            <Button variant="outlined" size="small" color="error" onClick={() => { deletingAlbum(params.row._id) }}><DeleteForever className="deleteicon" /></Button>
                        </div>
                    </>
                )
            }
        }
    ]
    const rows = Gallary ? Gallary : '';
    return (
        <div className="datatablee">
            <Button><Link to="add">Add New Photo</Link></Button>
            <div style={{ height: 400, width: '100%' }} className="datatable">
                <DataGrid
                    rows={rows}
                    columns={columns}
                    getRowId={(row) => row._id}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </div>

    )
}

export default GallaryDatatable;
