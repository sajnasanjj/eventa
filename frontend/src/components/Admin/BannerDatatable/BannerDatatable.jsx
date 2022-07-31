import React, { useState, useEffect } from "react";
import './DatatableB.scss';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteForever } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
// import Switch from '@mui/material/Switch';
import { toast } from 'react-toastify'
import { useDispatch,useSelector} from 'react-redux';
import {deleteBanner,reset } from '../../../features/auth/admin/banner/bannerSlice'
// import {getBanner} from '../../../features/auth/admin/banner/bannerService'

function BannerDatatable() {
    const dispatch = useDispatch()

    const [Banner, setBanner] = useState([])
   
    const { banners, isError,isModified, isSuccess, message } = useSelector((state) => state.getbannerr);
    
    
    useEffect(() => {
        
        if (isSuccess && banners) {
            setBanner(banners)
        }
        dispatch(reset());

    }, [banners, isError, isSuccess,isModified, message, dispatch]);
      console.log("Bannererrr",banners)
    const columns = [
        
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
            field: "action", headerName: "Action", width: "200" ,renderCell:(params) => {
                return (
                    <>
                     
                        <div className="cellActionn">
                            <button onClick={() => {dispatch(deleteBanner(params.row._id) )}}><DeleteForever className="deleteiconn" /></button>
                        </div>
                        </>
                   )
            } 
            
        }
    ]
    const row = Banner ? Banner : '';
    return (
        <div className="datatablee">
            <Button><Link to ="add">Add New Banner</Link></Button>
            <div style={{ height: 400, width: '100%' }} className="datatablee">
                <DataGrid
                    rows={row}
                    columns={columns}
                    getRowId={(row) => row._id}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </div>
        </div>

    )
}

export default BannerDatatable;
