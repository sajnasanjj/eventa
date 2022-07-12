import React, { useState, useEffect } from "react";
import './DatatableB.scss';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteForever } from "@material-ui/icons";
// import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
// import Switch from '@mui/material/Switch';
import { toast } from 'react-toastify'
import { useDispatch,useSelector} from 'react-redux';
import { reset } from '../../../features/auth/admin/banner/bannerSlice'
import { FaPencilAlt } from "react-icons/fa";
// import {getBanner} from '../../../features/auth/admin/banner/bannerService'

function BannerDatatable() {
    // const label = { inputProps: { 'aria-label': '' } };
    const [Banner, setBanner] = useState([])
    const dispatch = useDispatch()
    const { banners, isError, isSuccess, message } = useSelector((state) => state.getbannerr);

    useEffect(() => {
        if (isError) {
            toast.error(message || "Not Found")
            return
        }
        if (isSuccess && banners) {
            setBanner(banners)
        }
        dispatch(reset());

    }, [banners, isError, isSuccess, message, dispatch]);
      console.log("Bannererrr",banners)
    const columns = [
        {field:"", headerName:"No",width:50},
        {field: '_id', headerName: 'id', width: 170},
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
        // {
        //     field: 'status', headerName: 'Status', width: 100, renderCell: (params) => {
        //         return (
        //             <div className={`cellWithStatus ${params.row.status}`}>
        //                 {params.row.status}</div>
        //         )
        //     }
        // },
        // {
        //     field:'#',headerName:"",width:120,renderCell:(params)=>{
        //         return(
        //             <div><Switch {...label} defaultChecked/></div>
        //         )
        //     }
        //     }, 
        {
            field: "action", headerName: "Action", width: "200", renderCell: (params) => {
                return (
                    <>
                        <div className="cellAction" >
                            {/* <CustomizedDialogs id={params.id ? params.id:""}/> */}

                            <Link to="editBanner"><Button variant="outlined" size="small" color="primary"><FaPencilAlt className="deleteiconn" /></Button></Link>

                        </div>
                        <div className="cellActionn">
                            <Button variant="outlined" size="small" color="error"><DeleteForever className="deleteiconn" /></Button>
                        </div>
                    </>
                )
            }
        }
    ]
    const rows = Banner ? Banner : '';
    return (
        <div className="datatablee">
            <Button><Link to ="add">Add New Banner</Link></Button>
            <div style={{ height: 400, width: '100%' }} className="datatablee">
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

export default BannerDatatable;
