import React, { useEffect } from "react";
import AdminHeader from "../../../components/Admin/AdminNavbar/AdminHeader";
import Sidebar from "../../../components/Admin/AdminSidebar/Sidebar";
import '../../../App.css'
import './UserDetails.scss'
import { useDispatch } from 'react-redux';
import Datatable from "../../../components/Admin/Datatable/Datatable";
import { getUser } from '../../../features/auth/admin/getUser/getUserAuthSlice'
function UserDetails() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser())
  });
  return (
    <>
      <AdminHeader />
      <div className="containerr">
        <Sidebar />
        <div className="userDetails">
          <div className="Details">
            User Details
          </div>
          <Datatable />
        </div>
      </div>

    </>
  );
}

export default UserDetails;
