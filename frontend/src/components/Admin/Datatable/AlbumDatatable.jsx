import React, { useState, useEffect } from "react";
import './Datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteForever } from "@material-ui/icons";
// import {FaEye} from "react-icons/fa";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux';
import { reset, deleteAlbum } from '../../../features/auth/admin/Album/albumSlice'
import { FaPencilAlt } from "react-icons/fa";

function AlbumDatatable() {
    const dispatch = useDispatch()

    const [Album, setAlbum] = useState([])
    const deletingAlbum = (albumId) => {
        alert("album", albumId)
        dispatch(deleteAlbum(albumId))

    }
    const { albums, isError, isModified, isDeleted, isSuccess, message } = useSelector((state) => state.allalbum);

    useEffect(() => {
        if (isError) {
            toast.error(message || "Not Found")
            console.log((message));
            return
        }
        if (isSuccess && albums) {
            setAlbum(albums)
        }
        dispatch(reset());

    }, [albums, isError, isSuccess, isDeleted, isModified, message, dispatch]);
    console.log("The album", albums)
    const columns = [
        // {field: "", headerName: "No", width: 50 },
        {
            field: '_id', headerName: 'id', width: 200, renderCell: (params) => {
                return (
                    <>{params.row._id}
                    </>
                )
            }
        },
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
                    <div className="cellImg">
                        <img src={params.row.image} alt="" className="cellImg" />
                    </div>
                )
            }
        },

        {
            field: "action", headerName: "Action", width: "200", renderCell: (params) => {
                return (
                    <>
                        {/* <div className="cellAction" >
                            <Link to="editAlbum"><Button variant="outlined" size="small" color="primary"><FaPencilAlt className="deleteicon" /></Button></Link>
                        </div> */}
                        <div className="cellAction">
                            <Button variant="outlined" size="small" color="error" onClick={() => { deletingAlbum(params.row._id) }}><DeleteForever className="deleteicon" /></Button>
                        </div>
                    </>
                )
            }

        }
    ]
    const row = Album ? Album : '';
    return (
        <div className="datatable">
            <Button><Link to="add">Add New Album</Link></Button>
            <div style={{ height: 400, width: '100%' }} className="datatable">
                <DataGrid
                    rows={row}
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

export default AlbumDatatable;

    
