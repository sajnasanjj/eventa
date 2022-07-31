import React, { useState, useEffect } from "react";
import './Datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
// import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux';
import { reset, changeUserStatus } from '../../../features/auth/admin/getUser/getUserAuthSlice'
import { FaEye } from "react-icons/fa";
// import { getUser } from "../../../features/auth/admin/getUser/getUserAuthSlice";

function Datatable() {
    const dispatch = useDispatch()

    const [User, setUser] = useState([])

    const { users, isError, isSuccess, message, isModified } = useSelector((state) =>
        state.alluser);
    console.log("userrrs", users)

    const statusChangeUser = (userId) => {
        dispatch(changeUserStatus(userId))
    }
    useEffect(() => {
      
        if (isSuccess && users) {
            setUser(users)

        }
        dispatch(reset());

    }, [users, isError, isSuccess, message, dispatch, isModified]);
    const columns = [
        // {field:"", headerName:"No",width:50},
        {
            field: 'name', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                    <div className='cellWithImg'>
                        {/* <img src={params.row.img} alt="" className="cellImg" /> */}
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: "email", headerName: "email", width: 170 },
        {
            field: 'state', headerName: 'State', width: 100, renderCell: (params) => {
                return (
                    <>
                        {/* {params.row.status ? 'active' : 'block'} */}
                        {params.row.status ? 'Active User' : 'Blocked'}
                    </>
                )
            }
        },
       
        {
            field: "status", headerName: "Status", width: "100", renderCell: (params)=> {
                return (
                   
                        <div className="cellAction" >
                           {params.row.status ? (
                                <button
                                    onClick={() => {
                                        statusChangeUser(params.row._id)
                                    }}
                                    className="unblockbtn"
                                >
                                    Unblock
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        statusChangeUser(params.row._id)
                                    }}
                                    className="blockbtn"
                                >
                                    Block
                                </button>
                            )}
                        </div>
                        )
            }
        },
        {
            field: 'action', headerName: 'View', width: 100, renderCell: (params) => {
                return (
                    <div className="cellAction">
                           <Button variant="outlined" size="small" color="error"><FaEye /></Button>
                      </div> 
                    
              )
}}
    ]
    const rows = User ? User : '';
    return (
        <div className="datatable">


            <div style={{ height: 400, width: '100%' }} className="datatable">
                <DataGrid
                    rows={rows}
                    columns={columns}
                    getRowId={(row) => row._id}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                />
            </div>
        </div>

    )
}

export default Datatable;
