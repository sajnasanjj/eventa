import React,{useEffect} from "react";
import AdminHeader from "../../../components/Admin/AdminNavbar/AdminHeader";
import {useDispatch} from 'react-redux'
import Sidebar from "../../../components/Admin/AdminSidebar/Sidebar";
import GallaryDatatable from "../../../components/Admin/GallaryDatatable/GallaryDatatable";
import { getGallary } from '../../../features/auth/admin/Gallery/gallerySlice'
function Gallary() {
          const dispatch = useDispatch();
        useEffect(() => {
              dispatch(getGallary())
          },[]);
          return (
          <>
              <AdminHeader />
              <div className="containerr">
                  <Sidebar />
                  <div className="bannerDetails">
                      <div className="banner">
                          Gallery Details
                      </div>
                      <GallaryDatatable/>
                  </div>
              </div>
    </>
  );
}

export default Gallary;
