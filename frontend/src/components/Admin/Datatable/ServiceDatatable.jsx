import React, { useState, useEffect } from "react";
import './Datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteForever } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux';
import { reset,deleteService} from '../../../features/auth/admin/serviceProvide/serviceSlice'
import { FaPencilAlt } from "react-icons/fa";
// import {getBanner} from '../../../features/auth/admin/banner/bannerService'

function ServiceDatatable() {
    const dispatch = useDispatch()

    const [Service, setService] = useState([])
    const deletingService = (serviceId) => {
        dispatch(deleteService(serviceId))

    }
    const { services, isError, isModified, isSuccess, message } = useSelector((state) => state.allservice);

    useEffect(() => {
       
        if (isSuccess && services) {
            setService(services)
        }
        dispatch(reset());

    }, [services, isError, isSuccess, isModified, message, dispatch]);
    console.log("The services", services)
    const columns = [
        // { field: "", headerName: "No", width: 50 },
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
                            <Link to="editService"><Button variant="outlined" size="small" color="primary"><FaPencilAlt className="deleteicon" /></Button></Link>
                        </div> */}
                        <div className="cellAction">
                            <Button variant="outlined" size="small" color="error" onClick={() => { deletingService(params.row._id) }}><DeleteForever className="deleteicon" /></Button>
                        </div>
                    </>
                )
            }

        }
    ]
    const row = Service ? Service : '';
    return (
        <div className="datatable">
            <Button><Link to="add">Add New Service</Link></Button>
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

export default ServiceDatatable;
