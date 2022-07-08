import React from "react";
import './AdminNavbar.scss';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { NotificationsNone, MessageOutlined, Phone } from '@material-ui/icons';
import { adminlogout, reset } from '../../../features/auth/adminAuthSlice'
import { useDispatch, useSelector } from 'react-redux'

function AdminHeader() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { admin } = useSelector((state) => state.adminauth)
    const onLogout = () => {
        dispatch(adminlogout())
        dispatch(reset())
        navigate('/adminlogin')
    }
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="logo">Admin
                </div>

                <div className="topRight">
                    <div className="topbarIconContainer">
                        <MessageOutlined className="AdminIcon"/>
                        <span className="topIconBadge">2</span>

                    </div>
                    <div className="topbarIconContainer">
                        <Phone className="AdminIcon" />
                    </div>
                    <div className="topbarIconContainer">
                        <NotificationsNone className="AdminIcon" />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/839633/pexels-photo-839633.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="topAvatar" />
                    </div>
                    <div>
                        {admin ? (<button className="Sub-nav" onClick={onLogout}>
                            <FaSignOutAlt /> Logout
                        </button>) : (
                            <Link to="/adminlogin" className="Sub-nav">
                                <FaSignInAlt /> Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AdminHeader;
