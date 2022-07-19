import React,{useEffect} from "react";
import AdminHeader from "../../../components/Admin/AdminNavbar/AdminHeader";
import {useDispatch} from 'react-redux'
import './Gallary.scss'
import '../../../App.css'
import Sidebar from "../../../components/Admin/AdminSidebar/Sidebar";
import GallaryDatatable from "../../../components/Admin/GallaryDatatable/GallaryDatatable";
import { getGallery } from '../../../features/auth/admin/Gallery/gallerySlice'
function Gallary() {
          const dispatch = useDispatch();
        useEffect(() => {
              dispatch(getGallery())
          },[dispatch]);
          return (
          <>
              <AdminHeader />
              <div className="containerr">
                  <Sidebar />
                  <div className="galleryDetails">
                      <div className="gallery">
                          Gallery Details
                      </div>
                      <GallaryDatatable/>
                  </div>
              </div>
    </>
  );
}

export default Gallary;
