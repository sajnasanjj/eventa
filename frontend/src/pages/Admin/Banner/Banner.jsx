import React,{useEffect} from "react";
import './Banner.scss'
import '../../../App.css'
import { useDispatch,} from 'react-redux'
import AdminHeader from "../../../components/Admin/AdminNavbar/AdminHeader";
import Sidebar from "../../../components/Admin/AdminSidebar/Sidebar";
import { getBanner } from '../../../features/auth/admin/banner/bannerSlice'
import BannerDatatable from "../../../components/Admin/BannerDatatable/BannerDatatable";

function Banner() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBanner())
    },[dispatch]);
  return (
    <>
    <AdminHeader/>
    <div className="containerr">
        <Sidebar/>
        <div className="bannerDetails">
            <div className="banner">
                Banner Details
            </div>
           <BannerDatatable/>
                   </div>
    </div>
    </>
  );
}

export default Banner;
