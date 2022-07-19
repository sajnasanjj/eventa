import React, { useEffect } from "react";
import './Album.scss'
import '../../../App.css'
import { useDispatch, } from 'react-redux'
import AdminHeader from "../../../components/Admin/AdminNavbar/AdminHeader";
import Sidebar from "../../../components/Admin/AdminSidebar/Sidebar";
import { getAlbum } from '../../../features/auth/admin/Album/albumSlice'
import AlbumDatatable from "../../../components/Admin/Datatable/AlbumDatatable";

function AlbumAdmin() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAlbum())
    }, [dispatch]);
    return (
        <>
            <AdminHeader />
            <div className="containerr">
                <Sidebar />
                <div className="albumDetails">
                    <div className="album">
                        Album Details
                    </div>
                    <AlbumDatatable />
                </div>
            </div>
        </>
    );
}

export default AlbumAdmin;
