import React, {useState,useEffect} from "react";
import './Datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
// import { DeleteForever} from "@material-ui/icons";
// import { FaEye } from "react-icons/fa";
// import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
// import Switch from '@mui/material/Switch';
import { toast } from 'react-toastify'
import {useDispatch,useSelector} from 'react-redux';
import {reset} from '../../../features/auth/admin/getUser/getUserAuthSlice'
// import { getUser } from "../../../features/auth/admin/getUser/getUserAuthSlice";

function Datatable() {
    // const label = { inputProps : {'aria-label': ''}};
    const [User,setUser] = useState([])
    const dispatch = useDispatch()
    const {users,isError,isSuccess,message} = useSelector((state)=>
        state.alluser);
       
        useEffect(()=>{
            
            
            if(isError){
                toast.error(message || "Not  Found")
                return
            }
        if(isSuccess && users ) {
        setUser(users)
        
        }
    dispatch(reset());

    },[users, isError, isSuccess, message, dispatch]);

    const columns = [
        // {field:"", headerName:"No",width:50},
    {field:'_id',headerName:'User-id',width:170},
    {field:'name',headerName:'User',width:200,renderCell:(params)=>{
        return(
            <div className='cellWithImg'>
                <img src={params.row.img} alt="" className="cellImg" />
                {params.row.name}
            </div>
        )
    }},
    {field:"email",headerName:"email",width:170},
    {field:'status',headerName:'Status',width:100,renderCell:(params)=>{
        return(
            <div className={`cellWithStatus ${params.row.status}`}>
                {params.row.status}</div>
        )
    }},
    // {
    //     field:'#',headerName:"",width:120,renderCell:(params)=>{
    //         return(
    //             <div><Switch {...label} defaultChecked/></div>
    //         )
    //     }
    //     }, 
        // {
        //     field: "action", headerName: "Action", width: "100", renderCell: (params) => {
        //         return (
        //             <>
        //                 {/* <div className="cellAction" >
        //                     <CustomizedDialogs id={params.id ? params.id:""}/>
        //                     <div className="viewButton" ><Link to=":userId"><FaEye /></Link></div>
        //                 </div> */}
        //                 {/* <div className="cellAction">
        //                     <Button variant="outlined" size="small" color="error"><DeleteForever className="deleteicon" /></Button>
        //                 </div> */}
        //             </>
        //         )
        //     }
        // }
]
    const rows = User ? User : '';
  return(
    <div className="datatable">
        
     
    <div style={{height:400 , width:'100%'}} className="datatable">
        <DataGrid
            rows={rows}
            columns={columns}
            // getRowId={(row)=>row._id}
            pageSize={5}
            rowsPerPageOptions={[5]}
            // checkboxSelection
        />
    </div>
      </div>
      
  )
}

export default Datatable;
